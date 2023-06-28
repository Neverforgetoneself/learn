<template>
    <div ref="mycolor">
        <el-tooltip :content="contentVal" :placement="placement" :effect="effect">
            <dc-input type='text' v-model="contentVal" v-bind="$attrs" v-on="$listeners">
                <!-- 内部 suffix  prefix-->
                <i v-for="item in inTextSuffix" :key="item" :class="item.indexOf('el-icon-') == 0 ? item : ''"
                    class="el-input__icon" slot="suffix">{{ item.indexOf('el-icon-') == 0 ? '' : item }}</i>
                <i v-for="item in inTextPrefix" :key="item" :class="item.indexOf('el-icon-') == 0 ? item : ''"
                    class="el-input__icon" slot="prefix">{{ item.indexOf('el-icon-') == 0 ? '' : item }}</i>
                <!-- 外部 prepend   append-->
                <template v-for="item in outTextPrepend" slot="prepend">
                    <el-button :key="item" :icon="item.indexOf('el-icon-') == 0 ? item : ''" class="el-input__icon">{{
                        item.indexOf('el-icon-') == 0 ? '' : item }}</el-button>
                </template>
                <template v-for="item in outTextAppend" slot="append">
                    <el-button :key="item" :icon="item.indexOf('el-icon-') == 0 ? item : ''" class="el-input__icon">{{
                        item.indexOf('el-icon-') == 0 ? '' : item }}</el-button>
                </template>
            </dc-input>
        </el-tooltip>
    </div>
</template>

<script>
export default {
    name: 'DcInputTextTootipy',
    componentName: 'DcInputTextTootipy',
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
            return this.params.outTextPrepend || []
        },
        outTextAppend() {
            return this.params.outTextAppend || false
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

/deep/.el-input__inner {
    text-overflow: ellipsis;
}
</style>
