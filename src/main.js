import Vue from "vue";
import App from "./App.vue";

import "../tests/mock/api";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
