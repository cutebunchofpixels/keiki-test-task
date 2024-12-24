import { ref } from "vue";
import { defineStore } from "pinia";

import type { User } from "@/auth/types/User";
import { USER_LS_KEY } from "@/auth/constants";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);

  function saveUser(user: User) {
    const userJson = JSON.stringify(user);
    localStorage.setItem(USER_LS_KEY, userJson);
  }

  function getSavedUser() {
    const userJson = localStorage.getItem(USER_LS_KEY);

    if (!userJson) {
      return null;
    }

    return JSON.parse(userJson);
  }

  function clearSavedUser() {
    localStorage.removeItem(USER_LS_KEY);
  }

  function hasSavedUser() {
    return localStorage.getItem(USER_LS_KEY) === null;
  }

  function register(username: string) {
    const userInstance: User = {
      username,
    };

    saveUser(userInstance);
    user.value = userInstance;
  }

  function login(username: string) {
    if (!hasSavedUser) {
      register(username);
    } else {
      const user = getSavedUser();
      user.value = user;
    }
  }

  function hydrateAuth() {
    const savedUser = getSavedUser();

    if (!savedUser) {
      throw new Error("No saved user was found");
    }

    user.value = savedUser;
  }

  function logout() {
    clearSavedUser();
    user.value = null;
  }

  return { user, register, login, logout, hydrateAuth };
});
