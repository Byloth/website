import "./core";

import Vue from "vue";

import router from "./router";
import store from "./store";

import App from "./App.vue";

import VueScrollAnimator from "@byloth/vue-scroll-animator";

Vue.config.productionTip = false;

Vue.use(VueScrollAnimator);

export default new Vue({
    router,
    store,

    mounted: () =>
    {
        const pageLoader = document.getElementById("page-loader")!;

        pageLoader.setAttribute("disabled", "");
        setTimeout(() => pageLoader.remove(), 200);
    },
    render: (hack) => hack(App)

}).$mount("#app");
