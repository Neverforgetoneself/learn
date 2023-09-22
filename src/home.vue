<template>
    <div>
        <div v-for="item in routes" :key="item.path">
            <router-link :to="item.path">{{ item.path }}</router-link>
        </div>

    </div>
</template>

<script>
import { routes } from './router/routes'
export default {
    name: 'HomeC',
    props: {

    },
    data() {
        return {
            routes
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {
        console.log(routes);
    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped ></style>
