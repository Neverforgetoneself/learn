<template>

    <div>v-model父组件：{{ flag }}</div>
    <hr>
    <p>tv展示：{{ tv }}</p>
    <hr>
    <children v-model:textVa='tv' v-model="flag"></children>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import children from './children.vue';

let flag = ref<boolean>(true)
let tv = ref<string>('tv')
/* 
defineProps<{
    param: string
}>()
withDefaults(defineProps,{param:'xx'})
defineProps({
    param:{
        type:String,
        default:'xxx'
    }
}) */
</script>

<style scoped>

</style>