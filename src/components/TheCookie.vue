<template lang="pug">
    div
        v-snackbar(v-model="snackbar" transition="scale-transition" color="#F9F9F9" :timeout="0")
            
            div.black--text
                | {{$t("TheCookie.message")}}
                //- create one space beween message and learn_more
                | 
                router-link(to="/privacy_policy" target="_blank") {{$t("TheCookie.learn_more")}}
            v-btn.red(@click="cookieDecline()") Decline
            v-btn.green(@click="cookieAccept()") Accept
        v-dialog(v-model="cookie_notice" max-width=350)
            v-card
                v-card-title.headline Notice
                v-card-text Some features of this site depends on cookies like the prefered theme (dark/light). Those customizations might be broken.
                v-divider
                v-card-actions
                    v-spacer
                    v-btn(@click="cookie_notice=false") I understand
</template>

<script>
export default {
    name: "TheCookie",
    data() {
        return {
            snackbar: localStorage.getItem("cookie_accepted") !== "true",
            cookie_notice: false
        };
    },
    methods: {
        cookieAccept() {
            this.snackbar = false;
            localStorage.setItem("cookie_accepted", true);
        },
        cookieDecline() {
            this.snackbar = false;
            this.cookie_notice = true;
            this.$localStorage = "lol";
        }
    }
};
</script>
