<template>
    <div>
        姓名:<el-input v-model="guardName"></el-input>
        <el-button @click="goGuard">跳转</el-button>
    </div>
</template>

<script>
export default {
    name: 'RouterGuard',
    props: {

    },
    data() {
        return {
            guardName: ''
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
        goGuard() {
            this.$router.push({
                name: 'routerGuard',
                params: {
                    name: this.guardName
                }
            })
        }
    },
    components: {

    },
};
</script>

<style scoped ></style>
