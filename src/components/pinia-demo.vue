<template>
    <div>{{ store.name }}</div>
    <button @click="changeStore">修改</button>
    <hr>
    <p>userNmae:{{ store.user.name }}---userAge:{{ store.user.age }}</p>
    <hr>
    <button @click="goBackDeep">返回keepDemo</button>
    <button @click="goShow">去show</button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { useTestStore } from '../pinia'
const store = useTestStore()
const changeStore = () => {
    /* // 直接修改
    store.name = '崔旺最帅' */0.
    //使用$patch
    /* store.$patch({ 
        name: '崔旺最酷'
    }) */
    store.$patch((store) => {
        store.name = '最帅的崔旺'
    })

    // 使用action
    /* store.changeName('恭喜发财 ') */

    // 使用 $store 但是这个必须要把store对象中的所有数据都修改才可以 不建议使用
    /* store.$state = {
        name: '酷酷的崔旺',
        age: 16
    } */
    store.getUser()
}
const router = useRouter()
const goBackDeep = () => {
    router.push('/keepAlive-demo')
}
const goShow = () => {
    router.push('/showSom')
}
</script>

<style scoped></style>