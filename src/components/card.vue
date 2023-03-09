<template>

    <div style="color:green">card:=={{ this.$route.params.id }}</div>
    <button @click="chageId">改变id</button>
    <p>name:{{ this.$route.params.name }}</p>
    <p>age:{{ this.$route.query.age }}</p>

</template>

<script setup lang='ts'>
import { ref, onMounted, getCurrentInstance } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const { proxy } = getCurrentInstance() as any
function chageId() {
    router.push({
        path: '/',
        params: {
            name: 'ccc'
        },
        query: {
            age: 23
        }
    })
};
onMounted(() => {
    console.log('当前实例:', proxy)
})
</script>

<style scoped>

</style>