<template>
    <div>
        <el-button @click="goParams('params-1')">params-1</el-button>
        <el-button @click="goParams('params-2')">params-2</el-button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
            this.$router.push({
                path: '/routerParams'
            })
        },
        goParams(type) {
            this.$router.push({
                path: '/routerParamsItem/' + type + "/1",
                params: { id: '1', age: 16 },
                query: {
                    car: 'baobao'
                }
            })
        }
    }
};
</script>