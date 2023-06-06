const routes = [
  {
    path: "/",
    name: "home",
    alias: "homeAlias", //这个标识的是化名，也就是一个新名字。
    meta: {
      id: "1",
      title: "首页",
      isShow: true,
    },
    component: () => import("@/home.vue"),
  },
  /* {
    path: "/",
    redirect: "/home",  //redirect 重定向，地址是重定向的地址，path标识的是重定向的那个路由的新名字,
  }, */
  /* 
  相对于 使用redirect会改变我们的url地址，造成更换了页面的假象
  使用 alias 不会改变url地址，只是改变了router-view的内容

  还有一点 有很多博客说在 '/' 根路径的路由中不能起别用 因为这样路由中的router-view区域没有任何内容
  但是现在版本的vue中已经把这个bug改了可以给根目录起别名
  */
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    props: true,
    meta: {
      id: "2",
      title: "欢迎",
      isShow: true,
    },
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/routerParams",
    name: "RouterParams",
    meta: {
      id: "3",
      title: "路由url传参",
      isShow: true,
    },
    component: () => import("@/components/routerParams.vue"),
    beforeEnter: (to, from, next) => {
      console.log("to----", to);
      console.log("from----", from);
      console.log("this----", this);
      next(console.log("vm-----"));
      // next(false);
      // next(true);
      // next();
      // 注意 beforeRouteEnter 是支持给 next 传递回调的唯一守卫
    },
  },
  {
    path: "/routerParamsItem/:name/:id",
    name: "routerParamsItem",
    meta: {
      id: "4",
      title: "路由url传参",
      isShow: false,
    },
    component: () => import("@/components/routerParamsItem.vue"),
  },
  {
    path: "/routerParamsPush",
    name: "routerParamsPush",
    meta: {
      id: "5",
      title: "路由传参",
      isShow: true,
    },
    component: () => import("@/components/routerParamsPush.vue"),
  },
  {
    path: "/routerChildren",
    name: "routerChildren",
    meta: {
      id: "6",
      title: "子路由",
      isShow: true,
    },
    component: () => import("@/components/routerChildren.vue"),
    children: [
      {
        path: "header",
        component: () => import("@/components/childrenHeader.vue"),
        children: [
          {
            path: "headerChildren",
            component: () => import("@/components/headerChildren.vue"),
          },
          /*  {
            path: "/headerChildren", //使用根路径的模式
            component: () => import("@/components/headerChildren.vue"),
          }, */
          /* 
           使用根路径和不使用根路径的不同点：
              以push为例，不适用/，那么子路径要和父路径一起书写才能跳转 path：'/routerChildren/header/headerChildren'
              使用了/，可以直接书写成 path：‘/headerChildren’   
              都是可以跳转到 headerChildren页面的，但是他们的路由展示不同
          */
        ],
      },
    ],
  },
  {
    path: "/guard",
    name: "guard",
    meta: {
      id: "7",
      title: "组件内路由",
      isShow: true,
    },
    component: () => import("@/components/guard.vue"),
  },
  {
    path: "/routerGuard",
    name: "routerGuard",
    meta: {
      id: "8",
      title: "组件内路由",
      isShow: false,
    },
    component: () => import("@/components/routerGuards.vue"),
  },
  {
    path: "*",
    name: "errorDemo",
    meta: {
      id: "12",
      title: "未匹配",
      isShow: true,
    },
    component: () => import("@/components/errorDemo.vue"),
  },
];
export default routes;
