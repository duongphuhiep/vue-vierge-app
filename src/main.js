import Vue from "vue";
import App from "./App.vue";

if (process.env.NODE_ENV === 'development') require("../tests/mock/api");

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");