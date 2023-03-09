<template>

    <div>父组件</div>
    <p>子组件修改父组件值：{{ name }}</p>
    <button @click="changeParam">改变参数</button>
    <hr>
    <Children @name='changeName' :numb='num'></Children>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Children from './children.vue'
let num = ref<number>(123)
let name = ref<string>('cui')
const changeParam = () => {
    num.value++
}
const changeName = (param) => {
    name.value = param
}
</script>

<style scoped>

</style>