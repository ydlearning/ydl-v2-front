<template lang="pug">
    v-container.container-padding(
        fluid 
    )
        v-row(align='center' justify='center')
            v-card.elevation-12(width="60%")

                //- Toolbar / App Title
                v-toolbar(color='primary' flat)
                    v-icon.pr-1 mdi-cookie
                    v-toolbar-title {{ this.$route.name }}
                    .flex-grow-1
                    //- v-tooltip(
                        bottom)
                        template(
                            v-slot:activator="{ on: tooltip }"
                        )
                            v-btn(
                                icon
                                v-on="{ ...tooltip }"
                                to="/kontakt"
                            ) 
                                v-icon mdi-web
                        span Deutsch

                v-card-text.body-1
                    div 
                        div.text-center.pb-1
                            v-icon(left) mdi-cookie
                            span.justify-content-center Cookie status
                        
                        //- v-btn.mb-4(
                            style="color: red;"
                            large
                            color="info"
                            block
                            depressed
                            disabled=true
                            @status="cookieStatus"
                            @click="cookieRemovedCookie")
                            v-icon(left) mdi-cookie
                            span(v-if="getCookiePanelAccepted") Accept
                            span(v-else) No cookie set

                        v-text-field.status(
                            readonly
                            :value="statusText"
                            solo
                            style="text-align:center"
                            background-color="success"
                            v-if="getCookiePanelAccepted"
                        ) 
                        v-text-field.status(
                            readonly
                            value="No cookie set"
                            solo
                            style="text-align:center"
                            background-color="info"
                            v-else
                        ) 
                            //- prepend-inner-icon="mdi-cookie"
                            
                        v-btn(
                            large
                            color="error"
                            block
                            depressed
                            @click="removeCookie"
                            @status="cookieStatus"
                        )
                            v-icon(left) mdi-close-circle
                            span Remove cookie
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Cookies",
    data() {
        return {
            status: null
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
            // if (this.getCookiePanel) {
            //     return "accept";
            // } else {
            //     return "No cookie set";
            // }
            return this.getCookiePanel || "No cookie set";
        },
        getCookiePanelAccepted() {
            if (this.getCookiePanel) {
                return true;
            } else {
                return false;
            }
            // return localStorage.getItem("vue-cookie-accept-decline-cookiePanel");
        },
        getCookiePanel() {
            return localStorage.getItem("vue-cookie-accept-decline-cookiePanel");
        },
        removeCookiePanel() {
            return localStorage.removeItem("vue-cookie-accept-decline-cookiePanel");
        }
    },
    components: {}
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
