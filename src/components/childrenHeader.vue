<template>
    <div style="margin-top: 20px;">
        我是子路由:childrenHeader
        <hr />
        <el-button @click="goChildrenRou">跳转到我的子路由</el-button>
        <hr />
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'RouterChildrenHeader',
    props: {

    },
    data() {
        return {

        };
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
        goChildrenRou() {
            this.$router.push({
                path: 'header/headerChildren',
            })
        }
    },
    components: {

    },
};
</script>

<style scoped ></style>
