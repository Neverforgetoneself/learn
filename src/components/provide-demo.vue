<template>
    <div>provide数值：{{ num }}</div>
    <button @click="num++">add</button>
    <hr>
    <injectDemo></injectDemo>
</template>

<script setup lang='ts'>
import { ref, reactive, provide, readonly } from 'vue'
import injectDemo from './inject-demo.vue';
let num = ref<number>(1)
// provide('numbe', num) 子组件可以修改
provide('numbe', readonly(num)) //子组件不可以修改
</script>

<style scoped></style>