<template>
    <div>
        <p>{{ cool }}</p>
        <button @click="changeTe">修改</button>
        <input type="text" v-model="text">
        <br>
        <p>{{ text }}</p>
    </div>
    <button @click="clickPinia">跳转到pinia页面</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const clickPinia = function () {
    router.push('/pinia-demo')
}
let cool = ref<string>('谁最帅')
const changeTe = () => {
    cool.value = '崔旺是最帅的仔'
}
let text = ref<string>('')
</script>

<style scoped></style>