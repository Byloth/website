import Vue from "vue";

import router from "./router";
import store from "./store";

import VueScrollAnimator from "./plugins/vue-scroll-animator/VueScrollAnimator";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueScrollAnimator);

new Vue({
    router,
    store,
    render: (hack) => hack(App)

}).$mount("#app");
