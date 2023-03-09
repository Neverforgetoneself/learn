<template>

    <div>小飞机</div>

</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
onMounted(() => {
    console.log('route', route)
    console.log('router', router.currentRoute)
})
</script>

<style scoped>

</style>