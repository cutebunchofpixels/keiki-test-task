import type { NavigationGuard } from "vue-router";

import { useAuthStore } from "@/auth/store";

export const authGuard: NavigationGuard = (to, _, next) => {
  const authStore = useAuthStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authStore.user) {
      try {
        authStore.hydrateAuth();
        next();
      } catch {
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
      }
    } else {
      next();
    }
  } else {
    next();
  }
};
