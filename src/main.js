import Vue from "vue";
import vuetify from "./plugins/vuetify";
import veevalidate from "./plugins/vee-validate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    veevalidate,
    render: h => h(App)
}).$mount("#app");
