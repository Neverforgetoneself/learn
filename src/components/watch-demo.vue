<template>

    <div></div>
    <input v-model="current">
    <hr>
    <input v-model="current2">
    <hr>
    <input v-model="person.foo.boo.pe.name">
    <hr>
    <input v-model="person.foo.boo.pe.age">
    <hr>
    <input v-model="person2.foo.boo.pe.name">
    <hr>
    <input v-model="person2.foo.boo.pe.age">
    <hr>
    <button @click="changeName">改变姓名</button>

</template>

<script setup lang='ts'>
import { type } from 'os';
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'; 'vue-router'
const current = ref<string>('姓名')
const current2 = ref<string>('姓名')
const router = useRouter()
const person = ref<any>({
    foo: {
        boo: {
            pe: { name: 'xiao', age: 12 }
        }
    }
})
let person2 = reactive<any>({
    foo: {
        boo: {
            pe: { name: 'xiao2', age: 13 }
        }
    }
})
function changeName() {
    console.log('我要改变名字，通过watch')
    router.push({
        path: '/computed',
        query: {
            age: 12
        }
    })
}
/* watch([current, current2], (newValue, oldVaule) => {
    console.log('新值-', newValue, '旧值-', oldVaule)
}) */
watch(current, (newValue, oldVaule) => {
    console.log('新值-', newValue, '旧值-', oldVaule)
})
watch(current2, (newValue, oldVaule) => {
    console.log('新值2-', newValue, '旧值2-', oldVaule)
})
/* watch(person, (newValue, oldVaule) => {
    console.log('新值pe-', newValue, '旧值pe-', oldVaule)
}, {
    deep: true,//添加此属性可以做到深度监听
    // immediate:true //添加此属性会在页面加载时先运行一次
}) */
/* watch(person2, (newValue, oldVaule) => {
    console.log('新值pe-', newValue, '旧值pe-', oldVaule)
}) */ //使用reactie时不需要使用deep属性也可监视，因为在源码中已经开启了deep
watch(() => person2.foo.boo.pe.name, (newValue, oldVaule) => {
    console.log('新值pe-', newValue, '旧值pe-', oldVaule)
}) //如果想监视一个属性，那需要使用回调函数形式，因为直接监视我们获取到的不是一个proxy对象，
watch(() => person.value.foo.boo.pe.name, (newValue, oldVaule) => {
    console.log('新值pe-', newValue, '旧值pe-', oldVaule)
}) //如果想监视一个属性，那需要使用回调函数形式，因为直接监视我们获取到的不是一个proxy对象，
</script>

<style scoped>

</style>