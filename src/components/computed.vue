<template>
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <hr>
    姓名：{{ name }}
    <hr>
    姓名2:{{ name2 }}
    <div></div>

</template>

<script setup lang='ts'>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router';
let firstName = ref('')
let lastName = ref('')
let name = computed(() => {
    return firstName.value + lastName.value
})
let name2 = computed({
    get() {
        return firstName.value + lastName.value
    },
    set() { firstName.value + lastName.value }
})
const router = useRouter()
onMounted(() => {
    console.log(router?.currentRoute.value.query.age)
})
</script>

<style scoped>

</style>