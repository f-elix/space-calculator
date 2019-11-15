import Vue from "vue";
import Vuex from "vuex";
import { store } from "./store/index.js";
import App from "./App.vue";

import "./css/global.css";

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
