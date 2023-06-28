<template>
    <div>
        <dc-date v-model="value" :value.sync="value" :type="type" :range-separator="rangeSeparator"
            :start-placeholder="startPlaceholder" :end-placeholder="endPlaceholder" :format="format"
            :value-format="valueFormat" v-bind="$attrs" v-on="$listeners">
        </dc-date>
    </div>
</template>

<script>
import DcDate from '../dcDate.vue'
export default {
    name: 'DcDateTime',
    componentName: "DcDateTime",
    inheritAttrs: false,
    props: {
        contentValue: [String, Array],
        params: {
            default: () => { },
            type: Object
        }
    },
    data() {
        return {
            value: this.contentValue
        };
    },
    computed: {
        type() {
            return this.params.type
        },
        rangeSeparator() {
            return this.params.rangeSeparator
        },
        startPlaceholder() {
            return this.params.startPlaceholder
        },
        endPlaceholder() {
            return this.params.endPlaceholder
        },
        format() {
            return this.params.format
        },
        valueFormat() {
            return this.params.valueFormat
        }
    },
    created() {

    },
    mounted() {

    },
    watch: {
        value(v) {
            this.$emit('updata', v)
        }
    },
    methods: {

    },
    components: {
        DcDate
    },
};
</script>

<style scoped >
::v-deep .el-range-editor.el-input__inner {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 3px 10px;
}
</style>
