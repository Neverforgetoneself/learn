<template>
    <div ref="mycolor">
        <dc-input type='text' v-model="contentVal" v-bind="$attrs" v-on="$listeners">
            <!-- 内部 suffix  prefix-->
            <i v-for="item in inTextSuffix" :key="item" :class="item.indexOf('el-icon-') == 0 ? item : ''"
                class="el-input__icon" slot="suffix">{{ item.indexOf('el-icon-') == 0 ? '' : item }}</i>
            <i v-for="item in inTextPrefix" :key="item" :class="item.indexOf('el-icon-') == 0 ? item : ''"
                class="el-input__icon" slot="prefix">{{ item.indexOf('el-icon-') == 0 ? '' : item }}</i>
            <!-- 外部 prepend   append-->
            <template v-if="outTextPrepend">
                <i slot="prepend" :class="outTextPrepend.indexOf('el-icon-') == 0 ? outTextPrepend : ''"
                    class="el-input__icon">{{
                        outTextPrepend.indexOf('el-icon-') == 0 ? '' : outTextPrepend }}</i>
            </template>
            <template v-if="outTextAppend">
                <i slot="append" :class="outTextAppend.indexOf('el-icon-') == 0 ? outTextAppend : ''"
                    class="el-input__icon">{{
                        outTextAppend.indexOf('el-icon-') == 0 ? '' : outTextAppend }}</i>
            </template>
            <template v-for="(item, index) in outTextBtn" :slot="item.slot">
                <el-button :key="index" :icon="item.icon" class="el-input__icon textBtn">{{
                    item.content }}</el-button>
            </template>
        </dc-input>
    </div>
</template>

<script>
export default {
    name: 'DcInputText',
    componentName: 'DcInputText',
    inheritAttrs: false,
    props: {
        value: {
            type: [String, Number],
        },
        params: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            contentVal: this.value
        };
    },
    computed: {
        inTextSuffix() {
            return this.params.inTextSuffix || []
        },
        inTextPrefix() {
            return this.params.inTextPrefix || []
        },
        outTextPrepend() {
            return this.params.outTextPrepend
        },
        outTextAppend() {
            return this.params.outTextAppend
        },
        outTextBtn() {
            return this.params.outTextBtn
        },
        placement() {
            return this.params.placement
        },
        effect() {
            return this.params.effect
        },
        isShowTooltip() {
            return this.params.isShowTooltip
        },
    },
    created() {

    },
    mounted() {
        let inTextPrefixPadding = this.params.inTextPrefix.length > 1 ? this.params.inTextPrefix.length * 25 : 30
        this.$refs.mycolor.style.setProperty("--inTextPrefix", inTextPrefixPadding + 'px');
        let inTextSuffixPadding = this.params.inTextSuffix.length > 1 ? this.params.inTextSuffix.length * 25 : 30
        this.$refs.mycolor.style.setProperty("--inTextSuffix", inTextSuffixPadding + 'px');
    },
    watch: {
        contentVal: {
            handler: function (v) {
                this.$emit('input', v)
            }
        },
    },
    methods: {
    },
    components: {

    },
};
</script>

<style scoped lang="less">
/deep/.el-input--prefix .el-input__inner {
    padding-left: var(--inTextPrefix);
}

/deep/.el-input--suffix .el-input__inner {
    padding-right: var(--inTextSuffix);
}

.textBtn {
    display: inline-block;
    margin-right: 20px;
}

/deep/.textBtn span {
    margin: 0;
}
</style>
