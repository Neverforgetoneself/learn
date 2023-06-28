<template>
    <div>
        ShowRouter
    </div>
</template>

<script>
export default {
    name: 'ShowRouter',
    props: {

    },
    data() {
        return {
            name: "beforeRouteEnter"
        };
    },
    beforeRouteEnter(to, from, callback) {
        // 这个是在组件实例还没有创建的时候运行，所以不能使用this，
        // 不过，你可以通过传一个回调给 next 来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数
        console.log(to, from)
        callback(vm => {
            console.log(vm, '-----')
        })
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped ></style>
