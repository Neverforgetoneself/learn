<template>
    <div class="routes">
        <div v-for="item in routes" :key="item.name">
            <router-link :to="item.path" v-if="item.meta.isShow">{{ item?.meta?.title }}</router-link>
        </div>
        <hr />
        <!-- <el-button @click="goChildrenRou">跳转子路由的子路由</el-button> -->
    </div>
</template>

<script>
import routes from '@/router/routes'
export default {

    name: 'Home-demo',
    props: {

    },
    data() {
        return {
            routes
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
                path: '/routerChildren/header/headerChildren'
                // path: '/headerChildren' //当再子路由中path中使用/headerChildren的根路径的时候可以直接使用
            })
        }
    },
    components: {

    },
};
</script>

<style scoped >
.routes {
    display: flex;
    flex-direction: column;
}

a {
    text-decoration: none;
}
</style>
