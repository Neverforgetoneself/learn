<template>
    <div><input type="text" v-model="text" /></div>
    <p>{{ text }}</p>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
name: 'keepDemo'
let text = ref<string>('')
</script>

<style scoped></style>