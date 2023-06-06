<template>
    <div>
        姓名：<el-input v-model="name"></el-input>
        年龄：<el-input v-model="age"></el-input>
        车：<el-input v-model="car"></el-input>
        <el-button @click='paramPush'>传参</el-button>
    </div>
</template>

<script>
export default {
    name: 'RouterParamsPush',
    props: {

    },
    data() {
        return {
            name: '',
            age: '',
            car: ''
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
        paramPush() {
            this.$router.push(
                {
                    name: 'HelloWorld',
                    params: {
                        name: this.name,
                        age: this.age
                    },
                    query: {
                        car: this.car
                    }
                }
            )
        }
    },
    components: {

    },
};
</script>

<style scoped ></style>
