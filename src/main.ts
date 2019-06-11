import Vue from "vue";

import router from "@/router";
import store from "@/store";

import App from "@/App.vue";
import updater from "@/services/Updater";

Vue.config.productionTip = false;

Vue.use(updater);

new Vue({
    router,
    store,
    render: (hack) => hack(App)

}).$mount("#app");
