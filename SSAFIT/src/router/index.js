import { createRouter, createWebHistory } from "vue-router";
import TheMain from "../views/TheMain.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: TheMain,
    },
    {
      path: "/regist",
      name: "regist",
      component: () => import("../views/RegistPage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/my",
      name: "my",
      component: () => import("../views/MyPage.vue"),
    },
  ],
});

export default router;
