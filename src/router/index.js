import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "JIN-RONG GUO's palette",
    },
  },
  {
    path: "/ApiPage",
    name: "ApiPage",
    component: () =>
      import(/* webpackChunkName: "ApiPage" */ "../views/ApiPage.vue"),
    meta: {
      title: "看看api！",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title;
});

export default router;
