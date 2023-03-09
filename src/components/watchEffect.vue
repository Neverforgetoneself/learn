<template>

    <input type="text" v-model="name">
    <hr>
    <input type="text" v-model="last">
    <hr>
    <input type="text" v-model="person.foo.boo.pe.age">
    <input type="text" v-model="person2.foo.boo.pe.name">

</template>

<script setup lang='ts'>
import { ref, reactive, watchEffect } from 'vue'
let name = ref<string>('')
let last = ref<string>('')
let person = reactive({
    foo: {
        boo: {
            pe: {
                name: 'cui',
                age: 18
            }
        }
    }
})
let person2 = ref({
    foo: {
        boo: {
            pe: {
                name: 'cui',
                age: 18
            }
        }
    }
})
/* 
    在watch中需要在第三个参数中配置immediate：true才可以在页面加载的时候运行
    watchEffect中不需要配置就可以在页面加载的时候运行

    在watch中监视对象中的某一个属性需要使用回调涵数   watch（()=>person.foo.boo.pe.name,(new,old)=>{}）
    watchEffect中可以直接监控某一个属性，不需要回调

*/
watchEffect(() => {
    let first = name.value + '123'
    let lastName = last.value + '456'
    let age = person.foo.boo.pe.age
    // let peName = person2.value.foo.boo.pe.name
    console.log(first, lastName, 'watchEffect', 'age:--', age, 'name--')
})
watchEffect(() => {
    let peName = person2.value.foo.boo.pe.name
    console.log('监视peName------', peName)
})
</script>

<style scoped>

</style>