import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
/**
 *在router3.0以上以后router的跳转返回的式promis对象，当我们使用push的时候需要返回成功或者失败的回调
 *解决办法：
 1.降低router版本 npm i vue-router@3.0 -S
 2.重新push/replace方法
 3.捕获异常  
      // 捕获router.push异常
      this.$router.push(route).catch(err => {  console.log('输出报错',err)}）
 4.补全push/replace方法
      this$router.push(router,()=>{},(err)=>{console.log('错误'+err)})
 */
//获取原型对象上的replace函数
const originalReplace = Router.prototype.replace;
//修改原型对象中的replace方法
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
//获取原型对象上的push函数
const originalPush = Router.prototype.push;
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(Router);
let router = new Router({
  mode: "history", //hash
  routes,
});
router.beforeEach((to, from, next) => {
  // ...
  console.log("---to", to);
  console.log("----from-", from);
  console.log("----", next);
  next();
});
export default router;
/* 
vue2 中需要安装router 要使用3版本   npm i vue-router@3
*/
