<template>
    <div>
        <button @click="add++">add</button>
        <p>{{ add }}</p>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
name: 'keepDemo'
const add = ref<number>(0)
</script>

<style scoped></style>