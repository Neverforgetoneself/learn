<template>
    <div>
        <button>按钮1</button><button>按钮2</button>
    </div>
    <div>
        <input type="text" v-model="text">
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

let text = ref<string>('')
</script>

<style scoped></style>