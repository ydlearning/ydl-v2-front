import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: false,
        // isLoggedIn: true, // Test!! (Debug)
        user: {
            username: "Max-Mustermann",
            name: "Max Mustermann",
            email: {
                address: "max.mustermann@muster.mann",
                isVerified: false,
                status: "public" //public | private | contacts
            },
            password: "AbCd1234+-",
            role: "Student"
        }
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        },
        logout(context) {
            context.commit("logout");
        }
    }
});
