
<template>
    <div>
        Params-1
        <p>{{ urlParams }}</p>
    </div>
</template>

<script>
export default {
    name: 'Params-1',
    props: {

    },
    data() {
        return {

        };
    },
    computed: {
        urlParams() {
            return this.$route.params
        }
    },
    created() {

    },
    mounted() {

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
