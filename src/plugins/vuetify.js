import Vue from "vue";
import Vuetify from "vuetify/lib";
import de from "vuetify/es5/locale/de";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdi"
    },
    lang: {
        locales: { de },
        current: "en"
    },
    theme: {
        // save dark mode as is_light_theme because than the dark mode is at first enabled
        dark: localStorage.getItem("is_light_theme") === "true" ? false : true,
        // light: true,
        themes: {
            light: {
                primary: "#1179e1",
                secondary: "#FF0000", //"#424242", //#1e1e1e
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107"
            },
            dark: {
                primary: "#1976D2",
                secondary: "#FF0000", //"#424242", //#1e1e1e
                accent: "#82B1FF",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107"
            }
        }
    }
});
