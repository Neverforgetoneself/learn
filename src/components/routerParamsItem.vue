<template>
    <div>
        <Params1 v-if="showParam == 'params-1'" />
        <Params2 v-if="showParam == 'params-2'" />
    </div>
</template>

<script>
import Params1 from '@/components/params1.vue'
import Params2 from '@/components/params2.vue'
export default {
    name: 'RouterParamsItem',
    props: {

    },
    data() {
        return {
            showParam: ''
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {
        $route: {
            immediate: true,
            handler(to) {
                // 对路由变化作出响应...
                this.showParam = to.params?.name
            }
        }
    },
    methods: {

    },
    components: {
        Params1,
        Params2
    },
};
</script>

<style scoped ></style>
