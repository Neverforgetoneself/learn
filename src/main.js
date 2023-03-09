import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
/* import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/routes'
const router  = createRouter({
    history:createWebHashHistory(),
    routes
}) */
/* 
 路由需要使用createRouter来创建，通过createWebhsahHistory来实例化
 在vue3中需要通过 从vue-router中引入 useRouter 并获取到实例来获取路由参数 conat router = useRouter()  router.currentRouter.value.params
 
 在vue3中没有this，但是要想获取实例可以通过 vue中getCurrentInstance 来获取组件实例      const {proxy ctx}  = getCurrentInstance()
 一般使用proxy，因为ctx只适用于开发阶段，如果项目打包投产，在服务器上运行ctx无法获取路由和全局挂载对象
*/
import router from './router'
import {createPinia} from 'pinia'
const store = createPinia()

const app = createApp(App)
app.use(store)
app.use(router).mount('#app')
