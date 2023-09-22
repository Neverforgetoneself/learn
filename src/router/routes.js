import aboutNo from "@/components/About.vue";
export const routes = [
  /* {
    path: "/",
    name: "home",
    component: () => import("@/components/HelloWorld.vue"),
  }, */
  {
    path: "/",
    name: "home",
    component: () => import("@/home.vue"),
  },
  {
    path: "/home",
    component: () => import("@/components/HelloWorld.vue"),
  },
  {
    path: "/about",
    meta: {
      isNext: true,
      id: "1",
    },
    component: aboutNo,
  },
  {
    path: "/movie/:id?",
    name: "movie",
    props: true,
    meta: {
      isNext: false,
      id: "1",
    },
    component: () => import("@/components/MovieDemo.vue"),
    beforeEnter: (to, from, next) => {
      console.log("进入", to, from, next);
      next();
    },
  },
  {
    path: "/showRouter",
    component: () => import("@/components/ShowRouter.vue"),
  },
  {
    path: "/showTable",
    component: () => import("@/components/ShowTable.vue"),
  },
  {
    path: "/showSomeRouter",
    components: {
      default: () => import("@/components/ShowRouter.vue"),
      two: () => import("@/components/twoShowSomeRouter.vue"),
      three: () => import("@/components/threeShowSomeRouter.vue"),
    },
  },
  {
    path: "*",
    component: () => import("@/components/ErrorPage1.vue"),
  },
];
// export default routes;
