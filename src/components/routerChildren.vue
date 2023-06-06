<template>
    <div>
        <el-button @click="go('header')">header</el-button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'RouterChildren',
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
        go(type) {
            switch (type) {
                case 'header':
                    this.$router.push({
                        path: '/routerChildren/header'
                    })
                    break;
                default: break;
            }
        }

    },
    components: {

    },
};
</script>

<style scoped ></style>
