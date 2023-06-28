<template>
  <div class="hello">
    <p>hello</p>
    <!-- <router-link to="/home/about">关于</router-link> -->
    <button @click="goAbout">关于</button>
    <button @click="goMovie">电影1</button>
    <button @click="goShowRouter">跳转</button>
    <button @click="showSomeRouter">多个router</button>
    <button @click="goError">错误</button>
    <a href="/about">关于</a>
    <hr />
    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    goMovie() {
      this.$router.push(
        {
          name: 'movie',
          params: {
            id: '1',
            name: '人生路不熟'
          }
        }
      )
    },
    goAbout() {
      this.$router.push({ name: 'about', params: { name: 'aboutName' }, query: { age: 18 } })
    },
    goShowRouter() {
      this.$router.push({
        path: '/showRouter',
        params: {
          name: 'aboutName'
        }
      })
    },
    goError() {
      this.$router.push({
        path: '/showRouterxxxx',
      })
    },
    showSomeRouter() {
      this.$router.push({
        path: '/showSomeRouter'
      })
    },
  }
}
</script>


