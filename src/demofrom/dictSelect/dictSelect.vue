<template>
    <div class="dict-select">
        <el-select v-model="dictBindVal" :disabled="isDisabled" :multiple="isMultiple" :multiple-limit="multipleLimit"
            filterable placeholder="请选择" clearable @change="handleSelectChange">
            <el-option v-for="item in dictOptions" :key="item.name" :label="item.name" :value="item.value"
                :disabled="item.disabled">
            </el-option>
        </el-select>
    </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
import emitter from 'element-ui/src/mixins/emitter';
export default {
    name: 'DictSelect',
    componentName: 'DictSelect',
    mixins: [emitter],
    props: {
        isDisabled: {
            type: Boolean,
            default: false
        },
        //是否多选
        isMultiple: {
            type: Boolean,
            default: false
        },
        // 多选时用户最多选择的项目数，为 0 则不限制
        multipleLimit: {
            type: Number,
            default: 0
        },
        //字典码值
        dictCode: {
            type: String,
            default: ''
        },
        //字典值
        contentValue: [String, Array],
        //是否过滤字典
        isDictFilter: {
            type: Boolean,
            default: false
        },
        // isDictFilter开启的时候 只保留includeCodes里面的字典,其他字典过滤掉
        includeCodes: {
            type: Array,
            default: () => []
        },
        //isDictFilter开启的时候 只保留excludeCodes以外的字典
        excludeCodes: {
            type: Array,
            default: () => []
        },
        validateEvent: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            dictBindVal: this.contentValue || '',
            // storageDict: JSON.parse(localStorage.getItem('dictMap'))
            storageDict: {
                'DEMO': [{ name: '小红', value: '1' }, { name: '小明', value: '2' }, { name: '小花', value: '3' }, { name: '小华', value: '4' }]
            }
        };
    },
    computed: {
        /* ...mapState({
            dictMap: state => state.dictStore.disMap
        }), */
        dictOptions() {
            let { dictCode, isDictFilter, excludeCodes, includeCodes } = this;

            if (!dictCode || dictCode === '') {
                return []
            }
            // let list = this.dictMap[dictCode] || this.storageDict && this.storageDict['dictCode'] || []
            // let list = this.storageDict && this.storageDict['dictCode'] || []
            let list = this.storageDict && this.storageDict[dictCode] || []
            if (list && list.length) {
                //开启字典过滤
                if (isDictFilter) {
                    if (excludeCodes && excludeCodes.length) {
                        list = list.filter(item => !excludeCodes.includes(item.value)) || []
                    } else if (includeCodes && includeCodes.length) {
                        list = list.filter(item => includeCodes.includes(item.value)) || []
                    }
                }
            }

            return list
        }
    },
    created() {
        this.storageDict = JSON.parse(localStorage.getItem('dictMap')) || this.storageDict
        // let dictList = this.dictMap[this.dictCode] || this.storageDict && this.storageDict[this.dictCode] || []
        // let dictList = this.storageDict && this.storageDict[this.dictCode] || []
        /*  if (!dictList || !dictList.length) {
             this.getDictList(this.dictCode)
         } */
    },
    mounted() {

    },
    watch: {
    },
    methods: {
        // ...mapActions('dictStore', ['getDictList']),
        handleSelectChange(val) {
            console.log('handleSelectChange', val);
            this.$emit('input', val)
            if (this.validateEvent) {
                // 触发 ElFormItem 组件中的  el.form.blur  并传递参数 this.value   
                this.$nextTick(() => {
                    this.dispatch('ElFormItem', 'el.form.blur', [this.dictBindVal]);
                })

            }
        }
    },
    components: {

    },
};
</script>

<style scoped >
.el-select {
    width: 100%;
}
</style>
