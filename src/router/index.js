import Vue from "vue";
import Router from "vue-router";
import { routes } from "./routes";
//保存一份原来的push方法
const originPush = Router.prototype.push;

Router.prototype.push = function push(loaction) {
  // 调用原来的push方法，并且添加捕获异常的涵数
  return originPush.call(this, loaction).catch(() => {
    console.log();
  });
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
export default router;
