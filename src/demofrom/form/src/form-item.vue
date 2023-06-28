<template>
  <div class="el-form-item" :class="[{
    'el-form-item--feedback': elForm && elForm.statusIcon,
    'is-error': validateState === 'error',
    'is-validating': validateState === 'validating',
    'is-success': validateState === 'success',
    'is-required': isRequired || required,
    'is-no-asterisk': elForm && elForm.hideRequiredAsterisk
  },
  sizeClass ? 'el-form-item--' + sizeClass : ''
  ]">
    <!-- label 组件 -->
    <label-wrap :is-auto-width="labelStyle && labelStyle.width === 'auto'" :update-all="form.labelWidth === 'auto'">
      <label :for="labelFor" class="el-form-item__label" :style="labelStyle" v-if="label || $slots.label">
        <slot name="label">{{ label + form.labelSuffix }}</slot>
      </label>
    </label-wrap>
    <!-- 内容展示 -->
    <div class="el-form-item__content" :style="contentStyle">
      <component :is="componentId" :type="type" :params="params" v-model="contentValue" v-bind="$attrs"
        v-on="$listeners" />
      <slot name="formItem"></slot>
      <!-- 校验展示 -->
      <transition name="el-zoom-in-top">
        <slot v-if="validateState === 'error' && showMessage && form.showMessage" name="error" :error="validateMessage">
          <div class="el-form-item__error" :class="{
            'el-form-item__error--inline': typeof inlineMessage === 'boolean'
              ? inlineMessage
              : (elForm && elForm.inlineMessage || false)
          }">
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator';
import emitter from 'element-ui/src/mixins/emitter';
import objectAssign from 'element-ui/src/utils/merge';
import { noop, getPropByPath } from 'element-ui/src/utils/util';
import DcInputArea from "@/demofrom/form/components/dcInputArea/dcInputArea.vue";
import DcDateTime from '@/demofrom/form/components/date/conponent/dcDateTime.vue'
import DcDateStartEnd from '@/demofrom/form/components/date/conponent/dcDateStartEnd.vue'
import LabelWrap from './label-wrap';
export default {
  name: 'DcFormItem',

  componentName: 'ElFormItem',
  inheritAttrs: false,
  mixins: [emitter],

  provide() {
    return {
      elFormItem: this
    };
  },

  inject: ['elForm'],

  props: {
    value: [String, Array],
    //input属性
    //内部icon图标/文字数组
    inTextSuffix: {
      type: Array,
      default: () => []
    },
    //内部icon图标/文字数组
    inTextPrefix: {
      type: Array,
      default: () => []
    },
    //外部icon图标/文字
    outTextAppend: {
      type: String,
      default: ''
    },
    //外部icon图标/文字
    outTextPrepend: {
      type: String,
      default: ''
    },
    //外部按钮
    outTextBtn: {
      type: Array,
      default: () => []
    },
    //提示框的位置
    placement: {
      type: String,
      default: 'top-start'
    },
    //提示框底部颜色
    effect: {
      type: String,
      default: 'dark'
    },
    //是否展示提示框
    isShowTooltip: {
      type: Boolean,
      default: false
    },

    // date相关属性
    // date组件类型
    dateType: {
      type: String,
      default: 'date'
    },
    //开始时间的提示文字
    startPlaceholder: {
      type: String,
      default: '开始日期'
    },
    //开始和结束中间的连接展示的内容  默认‘-’
    rangeSeparator: String,
    //结束时间的提示文字
    endPlaceholder: {
      type: String,
      default: '结束日期'
    },
    //日期展示格式
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    //数据获取的格式
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    startDate: String,
    endDate: String,

    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String,
    type: String,
  },
  components: {
    LabelWrap,
    DcInputArea,
    DcDateTime,
    DcDateStartEnd
  },
  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value;
        this.validateState = value ? 'error' : '';
      }
    },
    validateStatus(value) {
      this.validateState = value;
    },
    contentValue(v) {
      this.$emit('input', v)
    }
  },
  computed: {
    labelFor() {
      return this.for || this.prop;
    },
    labelStyle() {
      const ret = {};
      if (this.form.labelPosition === 'top') return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    },
    contentStyle() {
      const ret = {};
      const label = this.label;
      if (this.form.labelPosition === 'top' || this.form.inline) return ret;
      if (!label && !this.labelWidth && this.isNested) return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth === 'auto') {
        if (this.labelWidth === 'auto') {
          ret.marginLeft = this.computedLabelWidth;
        } else if (this.form.labelWidth === 'auto') {
          ret.marginLeft = this.elForm.autoLabelWidth;
        }
      } else {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
    form() {
      let parent = this.$parent;
      let parentName = parent.$options.componentName;
      while (parentName !== 'ElForm') {
        /* if (parentName === 'ElFormItem') {
          this.isNested = true;
        } */
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
    fieldValue() {
      const model = this.form.model;
      if (!model || !this.prop) { return; }

      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      return getPropByPath(model, path, true).v;
    },
    isRequired() {
      let rules = this.getRules();
      let isRequired = false;

      if (rules && rules.length) {
        rules.every(rule => {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    },
    _formSize() {
      return this.elForm.size;
    },
    elFormItemSize() {
      return this.size || this._formSize;
    },
    sizeClass() {
      return this.elFormItemSize || (this.$ELEMENT || {}).size;
    },
  },
  data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false,
      computedLabelWidth: '',
      contentValue: this.value,
      componentId: '',
      params: {}
    };
  },
  methods: {
    validate(trigger, callback = noop) {
      this.validateDisabled = false;
      // 获取到符合tigger的规则
      const rules = this.getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }
      this.validateState = 'validating';
      const descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach(rule => {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      const model = {};

      model[this.prop] = this.fieldValue;
      validator.validate(model, { firstFields: true }, (errors, invalidFields) => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';

        callback(this.validateMessage, invalidFields);
        this.elForm && this.elForm.$emit('validate', this.prop, !errors, this.validateMessage || null);
      });
    },
    clearValidate() {
      this.validateState = '';
      this.validateMessage = '';
      this.validateDisabled = false;
    },
    resetField() {
      this.validateState = '';
      this.validateMessage = '';

      let model = this.form.model;
      let value = this.fieldValue;
      let path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      let prop = getPropByPath(model, path, true);

      this.validateDisabled = true;
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        prop.o[prop.k] = this.initialValue;
      }

      // reset validateDisabled after onFieldChange triggered
      this.$nextTick(() => {
        this.validateDisabled = false;
      });

      this.broadcast('ElTimeSelect', 'fieldReset', this.initialValue);
    },
    getRules() {
      //通过  provide 和 inject  获取form ，获取到 form中的规则
      let formRules = this.form.rules;
      // 自己组件的规则
      const selfRules = this.rules;
      const requiredRule = this.required !== undefined ? { required: !!this.required } : [];
      //获取到校验的字段和相应规则（{k:表示字段，v:表示这个字段的规则[],o：字段和规则的结合体}）
      const prop = getPropByPath(formRules, this.prop || '');
      // 单独拿到字段的校验规则
      formRules = formRules ? (prop.o[this.prop || ''] || prop.v) : [];
      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule(trigger) {
      const rules = this.getRules();
      let obj = rules.filter(rule => {
        if (!rule.trigger || trigger === '') return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.indexOf(trigger) > -1;
        } else {
          return rule.trigger === trigger;
        }
      }).map(rule => objectAssign({}, rule));
      return obj
    },
    onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }
      this.validate('change');
    },
    updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? `${width}px` : '';
    },
    addValidateEvents() {
      // 获取到
      const rules = this.getRules();
      // 判定是否有规则或者是否必填
      if (rules.length || this.required !== undefined) {
        // 创建 on 事件
        this.$on('el.form.blur', this.onFieldBlur);
        this.$on('el.form.change', this.onFieldChange);
      }
      if (this.type == 'dateSE') {
        this.$on('el.form.getDateSE', this.onGetDateSE)
      }
    },
    removeValidateEvents() {
      this.$off();
    },
    textBtnClick() {
      this.$emit('textBtnClick')
    },
    getDateParams() {
      this.params = {
        type: this.dateType,
        rangeSeparator: this.rangeSeparator,
        startPlaceholder: this.startPlaceholder,
        endPlaceholder: this.endPlaceholder,
        valueFormat: this.valueFormat,
        format: this.format
      }
    },
    getTextInputParams() {
      this.params = {
        inTextPrefix: this.inTextPrefix,//内部前缀icon图标数组
        inTextSuffix: this.inTextSuffix,//内部后缀icon图标数组
        outTextAppend: this.outTextAppend,//外部
        outTextPrepend: this.outTextPrepend,
        isShowTooltip: this.isShowTooltip,
        effect: this.effect,
        placement: this.placement,
        outTextBtn: this.outTextBtn,
        areaTopContent: this.areaTopContent,
      }
    },
    getComponentType() {
      switch (this.type) {
        case 'text':
          this.getTextInputParams()
          this.componentId = 'DcInputText'
          break;
        case 'textarea':
          this.getTextInputParams()
          this.componentId = 'DcInputArea'
          break;
        case 'textTootipy':
          this.getTextInputParams()
          this.componentId = 'DcInputTextTootipy'
          break;
        case 'select':
          this.params = null
          this.componentId = 'DictSelect'
          break;
        case 'date':
          this.getDateParams()
          this.componentId = 'DcDateTime'
          break;
        case 'dateSE':
          this.getDateParams()
          this.componentId = 'DcDateStartEnd'
          break;
        default:
          console.log('未找到匹配的类型');
          break
      }
    },
    onGetDateSE(data) {
      console.log('data----', data);
      this.$emit('update:startDate', data.date1)
      this.$emit('update:endDate', data.date2)
    }
  },
  mounted() {
    if (this.prop) {
      // 触发 elFORM 中的 el.form.addField 
      this.dispatch('ElForm', 'el.form.addField', [this]);

      let initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      });
      this.addValidateEvents();
    }
  },
  created() {
    this.getComponentType()

  },
  beforeDestroy() {
    this.dispatch('ElForm', 'el.form.removeField', [this]);
  }
};
</script>