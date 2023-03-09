<template>
    <div>欢迎：</div>
    <div v-for="item in routes">
        <router-link :to="item.path">{{ item.meta?.name }}</router-link>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import routes from '../router/routes'

</script>

<style scoped></style>