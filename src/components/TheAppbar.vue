<template lang="pug">
div
    v-navigation-drawer(v-model="drawer" app clipped color="#131313")
        TheDashboardList
    v-app-bar(
        app 
        text 
        color="primary" 
        dense 
        clipped-left)
        v-app-bar-nav-icon(@click.stop="drawer = !drawer")

        v-toolbar-title.headline
            span Y&D
            span.font-weight-light Learning
        //- v-spacer
        .flex-grow-1
        

        v-toolbar-items
            //- .hidden-sm-and-down
            v-btn(text to="/").tile Home 
            v-btn(text to="/news").tile News
            v-btn(text to="/about") About

            //- v-menu LOGIN / SIGN UP
            v-menu(bottom offset-y)
                template(v-slot:activator='{ on: menu }' v-if="!isLoggedIn")
                    v-btn(
                        text
                        depressed v-on='{ ...menu }' 
                        @click.stop="menuClick = !menuClick"
                    ) Login / Sign up
                        v-icon(v-if="!menuClick") mdi-menu-up 
                        v-icon(v-if="menuClick") mdi-menu-down 
                        v-list-item(left)
                            v-icon(right large) mdi-account-circle-outline
                template(v-slot:activator='{ on: menu }' v-else)
                    v-btn(
                        text
                        depressed v-on='{ ...menu }' 
                        @click.stop="menuClick = !menuClick"
                    ) Hi {{ user.username }}
                        v-icon(v-if="!menuClick") mdi-menu-up 
                        v-icon(v-if="menuClick") mdi-menu-down 
                        v-list-item(left)
                            v-icon(right large) mdi-account-circle-outline
                v-list
                    //- [if not logged in]
                    template(v-if="!isLoggedIn")

                        //- Login
                        v-list-item(to="/login")
                            v-list-item-icon
                                v-icon mdi-login-variant
                            v-list-item-title Login

                        //- Sign up
                        v-list-item(to="/signup") 
                            v-list-item-icon
                                v-icon mdi-pencil-plus-outline
                            v-list-item-title Sign up

                    //- [if logged in]
                    template(v-if="isLoggedIn")

                        //- My dashboard
                        v-list-item(to="/dashboard")
                            v-list-item-icon
                                v-icon mdi-home
                            v-list-item-title [My dashboard]

                        //- My profile
                        v-list-item(to="/profile")
                            v-list-item-icon
                                v-icon mdi-account-circle-outline
                            v-list-item-title [My profile]

                        //- Settings
                        v-list-item(to="/settings")
                            v-list-item-icon
                                v-icon mdi-settings-outline
                            v-list-item-title [Settings]

                    //- Logout
                    //- [if logged in]
                    v-list-item(
                        @click="logout()" 
                        v-if="isLoggedIn")
                        v-list-item-icon.rotate-180
                            v-icon mdi-logout-variant
                        v-list-item-title [Logout]
</template>

<script>
import { mapState } from "vuex";
import TheDashboardList from "@/components/TheDashboardList";
export default {
    name: "TheAppbar",
    data() {
        return {
            drawer: false,
            menuClick: false
        };
    },
    computed: {
        ...mapState(["isLoggedIn"])
    },
    components: {
        TheDashboardList
    }
};
</script>

<style lang="sass"></style>
