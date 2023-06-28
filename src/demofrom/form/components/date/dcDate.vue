<template>
    <div>
        <el-date-picker v-model="dataValue" :type="type" :placeholder="placeholder" v-bind="$attrs" v-on="$listeners"
            @blur="dateBlur">
        </el-date-picker>
    </div>
</template>

<script>
export default {
    name: 'DcDate',
    componentName: 'DcDate',
    inheritAttrs: false,
    props: {
        type: String,
        placeholder: String,
        value: [Array, String]
    },
    data() {
        return {
            dataValue: ''
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        this.$nextTick(() => {
            this.dataValue = this.value
        })
    },
    watch: {

    },
    methods: {
        dateBlur() {
            this.$emit('update', this.dataValue)
        }
    },
    components: {

    },
};
</script>

<style scoped ></style>
