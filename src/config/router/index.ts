import VueRouter from "vue-router";

import { HomePage } from "@/components/pages/Home";

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: HomePage,
    },
  ],
});

export default router;
