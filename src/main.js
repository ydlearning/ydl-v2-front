import Vue from "vue";
import vuetify from "./plugins/vuetify";
import veevalidate from "./plugins/vee-validate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// override the format function for the date object
import {} from "./vendor/datePrototypes";

Vue.config.productionTip = false;

// Require dependencies
// var Vue = require('vue');
var VueCookie = require("vue-cookie");
// Tell Vue to use the plugin
Vue.use(VueCookie);

import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
Vue.component("vue-cookie-accept-decline", VueCookieAcceptDecline);

new Vue({
    router,
    store,
    veevalidate,
    vuetify,
    render: h => h(App)
}).$mount("#app");
