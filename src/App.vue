<template>
  <div id="app">
    <div style="display: flex;">
      <div style="width: 200px; border-right:1px solid #333; ">
        <HomeDemo />
      </div>
      <div style="flex: 1;">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HomeDemo from '@/home.vue'

export default {
  name: 'App',
  components: {
    HomeDemo
  },
  data() {
    return {
    }
  },
  methods: {
    back() {
      this.$router.push({
        path: '/'
      })
    }
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
