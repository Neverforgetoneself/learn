<template>

    <div>子组件</div>
    <p>v-bind传递:{{ numb }}</p>
    <p>子组件自身的值：{{ age }}</p>
    <hr>
    <input type="text" :value="modelValue">
    <hr />

    <input type="text" @input="changParam" :value="textVa">
    <button @click="passValue">传值</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
/* 下面这两种方法都是在非ts模式下的传递和接受的值的方法 
const props = defineProps({
    numb: {
        type: Number,
        default: 126589
    },
})
console.log(props)
const emitL = defineEmits(['name'])
const passValue = () => {
    emitL('name', 'cuiwang')
} */
// const props = defineProps<{ numb: number }>()
const props = withDefaults(defineProps<{
    numb: number,
    modelValue: boolean,
    textVa: string
}>(), {
    numb: 951,
    modelValue: true,
    textVa: ''
})
console.log(props.numb)
const emit = defineEmits<{
    (e: 'name', xx: string): void
    (e: 'update:modelValue', xx: string): void
    (e: 'update:textVa', xx: string): void
}>()
const passValue = () => {
    emit('name', 'cuiwang')
}
let age = ref<number>(456)
//v-model
const changParam = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit('update:textVa', target.value)

}
</script>

<style scoped>

</style>