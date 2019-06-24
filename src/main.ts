import Vue from "vue";

import router from "@/router";
import store from "@/store";

import VueAnimator from "@/plugins/animations/VueAnimator";

import App from "@/App.vue";

Vue.config.productionTip = false;

Vue.use(VueAnimator);

new Vue({
    router,
    store,
    render: (hack) => hack(App)

}).$mount("#app");
