<template lang="pug">
    v-app
        v-navigation-drawer(v-model="drawer" app clipped)
            v-list(dense='')
                v-list-item(to="/News")
                    v-list-item-action
                        v-icon mdi-home
                    v-list-item-content
                        v-list-item-title My Dashboard
                v-list-item(@click='')
                    v-list-item-action
                        v-icon mdi-folder-multiple-outline
                    v-list-item-content
                        v-list-item-title All courses
                //- Test:
                template(v-if="isLoggedIn")
                    v-list-item(@click='')
                        v-list-item-action
                            v-icon mdi-folder-account-outline
                        v-list-item-content
                            v-list-item-title My courses
                    v-list-item(@click='')
                        v-list-item-action
                            v-icon mdi-calendar-account-outline
                        v-list-item-content
                            v-list-item-title Calendar
        v-app-bar(app text color="primary" clipped-left)
            v-app-bar-nav-icon(@click.stop="drawer = !drawer")
            //- router-link(to="/" color="rgb(200,200,200)")
            v-btn(color="transparent" depressed  to="/" tile)
                v-toolbar-title.headline
                    span Y&D
                    span.font-weight-light Learning
            v-spacer
            v-toolbar-items
                v-btn(text to="/").tile Home 
                v-btn(text to="News").tile News
                v-btn(text to="About") About
                v-menu(bottom offset-y)
                    template(v-slot:activator='{ on: menu }')
                        v-btn(color='primary' depressed v-on='{ ...tooltip, ...menu }') Log in / Sign up
                            v-icon(right) mdi-account-circle-outline
                    v-list
                        v-list-item(v-if="!isLoggedIn" to="/Login")
                            v-list-item-title Login
                        //- [wenn eingeloggt]
                        v-list-item(v-else @click='')
                            v-list-item-title [Logout]
                        //- [wenn nicht eingeloggt]
                        v-list-item(v-if="!isLoggedIn" to="/Signup") 
                            v-list-item-title Sign up
                        //- [wenn eingeloggt]
                        template(v-if="isLoggedIn")
                            v-list-item(@click='')
                                v-list-item-title [My profile]
                            //- [wenn eingeloggt]
                            v-list-item(@click='')
                                v-list-item-title [Settings]
        v-content
            router-view
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "App",
    data() {
        return {
            drawer: false
        };
    },
    computed: mapState(["isLoggedIn"])
};
</script>

<style lang="sass">
html
    // remove scroll bar
    // overflow: hidden
    /* own scrollbar */
    /* scrollbar firefox */
    scrollbar-color: rgb(110, 110, 110) rgb(1, 1, 1)
    /* own scrollbar */
    /* Note: The -webkit-scrollbar is not supported by Firefox or IE and Edge. */
    ::-webkit-scrollbar
        /* width */
        width: 12px
    ::-webkit-scrollbar-track
        /* Track */
        box-shadow: inset 0 0 5px grey
        border-radius: 8px

    ::-webkit-scrollbar-thumb
        /* Handle */
        background: rgb(110, 110, 110)
        border-radius: 10px
    ::-webkit-scrollbar-thumb:hover
        /* Handle on hover */
        background: rgb(110, 110, 110)
    ::-webkit-scrollbar-track-piece
        /* not handle on */
        background: rgb(1, 1, 1)
</style>
