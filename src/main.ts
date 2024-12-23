import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "@/config/router";

import "./assets/reset.css";
import "./assets/index.css";

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
