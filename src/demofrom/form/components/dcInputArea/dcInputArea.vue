
    
<template>
    <div ref="mycolor">
        <dc-input type='textarea' v-model="contentVal" v-bind="$attrs" v-on="$listeners">
            <!-- 内部 suffix  prefix-->
            <!--  在富文本开头位置加载自定义文字
            <template v-if='areaTopContent'>
                <span slot="areatop" class='el-input__count_top el-input__icon '
                    :class="areaTopContent.indexOf('el-icon-') == 0 ? areaTopContent : ''">{{
                        areaTopContent.indexOf('el-icon-') == 0 ? '' : areaTopContent }}
                </span>
            </template>-->

        </dc-input>
    </div>
</template>
    
<script>
export default {
    name: 'DcInputArea',
    componentName: 'DcInputArea',
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
        areaTopContent() {
            return this.params.areaTopContent
        },
    },
    created() {

    },
    mounted() {
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
/* /deep/.el-textarea .el-input__count_top {
    color: #909399;
    background: #FFF;
    position: absolute;
    font-size: 12px;
    top: 5px;
    left: 10px;
} */
</style>
    