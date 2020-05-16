import "./core";

import Vue from "vue";

import router from "./router";
import store from "./store";

import App from "./App.vue";

import VueScrollAnimator from "@byloth/vue-scroll-animator";

Vue.config.productionTip = false;

Vue.use(VueScrollAnimator);

new Vue({
    router,
    store,
    render: (hack) => hack(App)

}).$mount("#app");
