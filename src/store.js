import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // isLoggedIn: false
        isLoggedIn: true, // Test!! (Debug)
        user: {
            username: "Max-Mustermann",
            name: "Max Mustermann"
        }
    },
    mutations: {},
    actions: {}
});
