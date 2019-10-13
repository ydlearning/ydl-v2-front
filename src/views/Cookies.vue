<template lang="pug">
BaseFooterItem(icon="mdi-cookie" width="30%")
    v-container(fluid)
        v-row
            template(v-for="cookie in cookies")
                v-col(:key="cookie.name" cols=12)
                    v-card(outlined tile)
                        v-card-text
                            div.overline.mb-4
                                | {{cookie.name}}
                                |
                                code true
                                v-btn(top right small icon absolute)
                                    v-icon(size=16) mdi-restore
                            div(v-text="cookie.description")
                            v-switch(color="success" hide-details)
    //- v-card-title
    //-     v-icon(left) mdi-cookie
    //-     span.justify-content-center Cookie status

    //- v-text-field.status(
    //-     readonly
    //-     :value="statusText"
    //-     solo
    //-     style="text-align:center"
    //-     background-color="success"
    //-     v-if="getCookiePanelAccepted"
    //- ) 
    //- v-text-field.status(
    //-     readonly
    //-     value="No cookie set"
    //-     solo
    //-     style="text-align:center"
    //-     background-color="info"
    //-     v-else
    //- ) 
    //-     //- prepend-inner-icon="mdi-cookie"
        
    //- v-btn(
    //-     icon
    //-     color="error"
    //-     depressed
    //-     @click="removeCookie"
    //-     @status="cookieStatus"
    //- )
        v-icon(left) mdi-close-circle
</template>

<script>
import { mapState } from "vuex";
import BaseFooterItem from "@/components/BaseFooterItem";

export default {
    name: "Cookies",
    components: {
        BaseFooterItem
    },
    data() {
        return {
            status: null,
            cookies: [
                {
                    name: "cookie_accepted",
                    displayName: "Cookie",
                    description: "Dürfen Cookies gespeichert werden?"
                },
                {
                    name: "is_light_theme",
                    displayName: "Theme",
                    description: "Soll die Webseite mit dem hellen Theme angezeight werden?"
                }
            ]
        };
    },
    methods: {
        cookieStatus(status) {
            console.log("status: " + status);
            this.status = status;
        },
        cookieRemovedCookie() {
            console.log("here in cookieRemoved");
            this.status = null;
            // this.$refs.cookiePanel.init();
            // this.$app.$refs.cookiePanel.init();
        },
        removeCookie() {
            console.log("Cookie removed");
            localStorage.removeItem("vue-cookie-accept-decline-cookiePanel");
            this.cookieRemovedCookie();
            // this.$refs.cookiePanel.removeCookie();
        }
    },
    computed: {
        ...mapState(["isLoggedIn"]),
        statusText() {
            return this.getCookiePanel || "No cookie set";
        },
        getCookiePanelAccepted() {
            if (this.getCookiePanel) {
                return true;
            } else {
                return false;
            }
            // return localStorage.getItem("vue-cookie-accept-decline-cookiePanel");
        }
    }
};
</script>

<style lang="sass">
h1
    padding-bottom: 5px
h2
    padding-bottom: 1px
.container-padding
    padding-top: 3%
    padding-left: 0%
    padding-right: 0%
    padding-bottom: 3%
.btn
    text-transform: uppercase
    font-weight: bold
.status
    border-radius: 4px!important
    text-align: center
.v-text-field__slot input
   text-align: center
.v-text-field .mdi-cookie
   padding-left: 100%
   text-align: center
</style>
