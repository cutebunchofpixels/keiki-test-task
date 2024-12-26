import Vue from "vue";
import VueRouter from "vue-router";

import { AuthLayout } from "@/ui/layouts/AuthLayout";
import { MainLayout } from "@/ui/layouts/MainLayout";
import { FactsPage } from "@/ui/pages/facts/Facts";
import { FactPage } from "@/ui/pages/facts/Fact";
import { authGuard, skipIfAuthorizedGuard } from "@/config/router/guards";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: AuthLayout,
      meta: {
        skipIfAuthorized: true,
      },
    },
    {
      path: "/",
      redirect: "/facts",
      component: MainLayout,
      children: [
        {
          path: "/facts",
          component: FactsPage,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/fact/:id",
          component: FactPage,
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
  ],
});

router.beforeEach(authGuard);
router.beforeEach(skipIfAuthorizedGuard);

export default router;
