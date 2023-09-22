import Vue from "vue";
import Router from "vue-router";
import { routes } from "./routes";
//保存一份原来的push方法
const originPush = Router.prototype.push;

Router.prototype.push = function push(loaction) {
  // 调用原来的push方法，并且添加捕获异常的涵数
  return originPush.call(this, loaction).catch((err) => err);
};
Vue.use(Router); //挂载全局
//创建router实例
const router = new Router({
  mode: "history", //选择路由 模式
  routes, //路由匹配规则
});
/* router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  if (to.meta.id) {
    if (to.meta.isNext) {
      next();
    } else {
      next({ path: "/about" });
    }
  } else {
    next();
  }
}); */
/* 
router .beforeEach((to, from, next) =>
if (to.matched.some(res => res .meta.title)) {
//判断当前的token是否存在
if (!localstorage.getItem( 'token')) {
next({
path:/login?
query: [ redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
}
 else if (store.state.velaApp.isLock && to.path !== /lock') {
next({
path:"/lock'
})
return}
store.commit('velaApp/changeMenuId',to.meta.menuId
next()
}
}else{
next()
}
*/
export default router;
