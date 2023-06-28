<template>
    <div class="dateSE-div">
        <dc-date type="date" :placeholder="startPlaceholder" v-model="form.date1" @change="getDate" :format="format"
            :value-format="valueFormat" style="width: 100%;"></dc-date>
        <span class="dateSE-span">{{ rangeSeparator }}</span>
        <dc-date type="date" :placeholder="endPlaceholder" v-model="form.date2" @change="getDate" :format="format"
            :value-format="valueFormat" style="width: 100%;"></dc-date>
    </div>
</template>

<script>
import DcDate from '../dcDate.vue'
import emitter from 'element-ui/src/mixins/emitter';
export default {
    name: 'DcDateStartEnd',
    componentName: "DcDateStartEnd",
    inheritAttrs: false,
    inject: ['elFormItem'],
    mixins: [emitter],
    props: {
        contentValue: [String, Array],
        params: {
            default: () => { },
            type: Object
        }
    },
    data() {
        return {
            form: {
                date1: '',
                date2: ''
            }
        };
    },
    computed: {
        type() {
            return this.params.type
        },
        rangeSeparator() {
            return this.params.rangeSeparator || '-'
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
        this.form.date1 = this.elFormItem.startDate
        this.form.date2 = this.elFormItem.endDate
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let da = date.getDate()
        let all = date.toLocaleDateString()
        console.log(year, month, da, all);
    },
    watch: {
    },
    methods: {
        getDate() {
            this.dispatch('ElFormItem', 'el.form.getDateSE', [this.form])
        }
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

.dateSE-div {
    display: flex;
}

.dateSE-div ::v-deep .el-date-editor.el-input,
.el-date-editor.el-input__inner {
    width: 100% !important;
}

.dateSE-span {
    margin: 0 10px;
}
</style>
