<template>
    <button @click="goKeep">跳keep</button>
    <button @click="goSome">跳some</button>
    <hr>
    <div>
        <keep-alvie>
            <KeepDemo v-if="Component" />
        </keep-alvie>
        <SomeKeep v-if='!Component' />
    </div>
</template>


<script setup lang='ts'>
import { ref, reactive, shallowRef } from 'vue'
import { useRouter } from 'vue-router';
import KeepDemo from './keep-demo.vue'
import SomeKeep from './some-keep.vue'
let Component = ref<boolean>(true)
const router = useRouter()
const goSome = () => {

    Component.value = false

}
const goKeep = () => {
    Component.value = true

}

</script>

<style scoped></style>