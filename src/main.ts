import Vue from "vue";

import App from "./App.vue";
import pinia from "@/config/pinia";
import router from "@/config/router";
import "@/config/vee-validate";
import "@/config/tanstack";
import "@/config/vue-select";

import "./assets/css/reset.css";
import "./assets/css/index.css";
import "./assets/css/colors.css";
import "./assets/css/typography.css";
import "./assets/css/sizing.css";
import "./assets/css/animations.css";

new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount("#app");
