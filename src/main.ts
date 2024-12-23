import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import router from "@/config/router";

import "./assets/css/reset.css";
import "./assets/css/index.css";
import "./assets/css/colors.css";
import "./assets/css/typography.css";
import "./assets/css/spacing.css";

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
