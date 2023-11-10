import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainPage,
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
    /* {
      path: '/board',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: "",
          name: "boardList",
          component: BoardList
        },
        {
          path: "create",
          name: "boardCreate",
          component: BoardCreate
        },
        {
          path: ":id",
          name: "boardDetail",
          component: BoardDetail
        },
        {
          path: "update",
          name: "boardUpdate",
          component: BoardUpdate
        },
      ]
    }, */
  ],
});

export default router;
