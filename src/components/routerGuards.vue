<template>
    <div>
        组件内守卫
        name:{{ name }}
        <hr />
        <el-button @click="$router.back()">返回</el-button>
    </div>
</template>

<script>
export default {
    name: 'RouterGuards',
    props: {

    },
    data() {
        return {

        };
    },
    beforeCreate() {
        console.log('beforeCreate----');
    },
    created() {
        console.log('created----');
    },
    beforeMount() {
        console.log('beforeMount----');
    },
    mounted() {
        console.log('mounted----');
    },
    updated() {
        console.log('updated----');
    },
    beforeDestroy() {
        console.log('beforeDestroy----');
    },
    destroyed() {
        console.log('destroyed----');
    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                console.log('watch----', to)
            }
        }
    },
    computed: {
        name() {
            console.log('computed-----')
            return this.$route.params.name
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter---');
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        next(vm => {
            console.log('beforeRouteEnter---vm', vm)
        })
    },
    beforeRouteUpdate(to, from, next) {
        console.log('beforeRouteUpdate---');
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave---')
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        next()
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped ></style>
