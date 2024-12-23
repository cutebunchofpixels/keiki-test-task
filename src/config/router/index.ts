import VueRouter from "vue-router";

import { HomePage } from "@/ui/pages/Home";
import { AuthLayout } from "@/ui/layouts/AuthLayout";
import { LoginPage } from "@/ui/pages/auth/Login";

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/auth",
      component: AuthLayout,
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          component: LoginPage,
        },
      ],
    },
  ],
});

export default router;
