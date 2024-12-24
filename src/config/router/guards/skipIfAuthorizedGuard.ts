import type { NavigationGuard } from "vue-router";

import { useAuthStore } from "@/auth/store";

export const skipIfAuthorizedGuard: NavigationGuard = (to, _, next) => {
  const authStore = useAuthStore();

  if (to.matched.some((record) => record.meta.skipIfAuthorized)) {
    if (authStore.user) {
      next("/facts");
    } else {
      try {
        authStore.hydrateAuth();
        next("/facts");
      } catch {
        next();
      }
    }
  } else {
    next();
  }
};
