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
                                code(v-text="cookie.value")
                            div {{ cookieMappings.hasOwnProperty(cookie.name) ? cookieMappings[cookie.name].description : null }}
                        v-card-actions
                            v-switch.ma-0.ml-1(color="success" hide-details)
                            v-spacer
                            v-btn.ma-0(small) delete
</template>

<script>
import BaseFooterItem from "@/components/BaseFooterItem";

export default {
    name: "Cookies",
    components: {
        BaseFooterItem
    },
    data() {
        return {
            status: null,
            cookieMappings: {
                cookie_accepted: {
                    name: "cookie_accepted",
                    displayName: "Cookie",
                    description: "Dürfen Cookies gespeichert werden?"
                },
                is_light_theme: {
                    name: "is_light_theme",
                    displayName: "Theme",
                    description: "Soll die Webseite mit dem hellen Theme angezeigt werden?"
                }
            }
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
        },
        removeCookie(name) {
            console.log(`remove cookie: ${name}`);
            localStorage.removeItem(name);
        }
    },
    computed: {
        cookies() {
            // dont use the wrapper function because regarding the setting we need to display the cookies here
            let cookies = [];
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                console.log(key);
                cookies.push({
                    name: key,
                    value: value
                });
            }
            return cookies;
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
