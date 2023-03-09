<template>

    <div>inject数值：{{ n }}</div>
    <button @click="changeN">addTow</button>

</template>

<script setup lang='ts'>
import { ref, reactive, inject } from 'vue'
import type { Ref } from 'vue';

let n = inject<Ref<number>>('numbe')
const changeN = () => {
    n!.value++
    console.log(n!.value + 2)
}
</script>

<style scoped>

</style>