<template lang="pug">
//- Footer component
div 
    //- Footer
    v-footer(
        dark
        padless
        width="100%" 
        color="primary"
    )
        //- Row 1
        v-row.lighten-1.white--text(
            justify="center" 
            no-gutters
            width="100%"
        )
            //- Website links
            v-btn.my-0(
                v-for="site in sites"
                :key="site.id" 
                color="white"
                text 
                :to="site.to"
            )
                | {{ site.name }}

            //- v-btn.my-0(
            //-     color="white"
            //-     text 
            //-     to="/home"
            //- )
            //-     | site.name

            v-speed-dial(
                v-model="languageSelection"
                direction="top" 
                transition="slide-y-reverse-transition")
                template(v-slot:activator)
                    v-btn(
                        text)
                        cf-country-flag(:country="getLocale" size="small") 
                v-btn(
                    v-for="locale in getLocales"
                    :key="locale"
                    fab
                    small
                    color="primary"
                    @click="$i18n.locale=locale"
                )
                        cf-country-flag(:country="locale !== 'en' ? locale : 'us'" size="small") 
        
        //- Footer card
        v-card.lighten-1.white--text.text-center(
            flat 
            tile
            width="100%"
        )
            //- Footer Text
            v-card-text.pa-1
                //- Social media buttons
                v-tooltip(
                    bottom
                    v-for="social in socialMedia" 
                    :key="social.id" 
                )
                    template(
                        v-slot:activator="{ on: tooltip }"
                    )
                        v-btn.mx-4.white--text(
                            :href="social.href"
                            target="_blank" 
                            icon=true
                            outlined=false
                            rounded
                            v-on="{ ...tooltip }"
                        ) 
                            v-icon.pl-0(
                                size="24px"
                            ) {{ social.iconName }}
                    span {{ social.name }}
            
            //- Text footer (optional)
            //- v-card-text.white--text.pt-0
                | Text

            v-divider

            //- Year / Copyright
            v-card-text.pa-0.white--text
                v-container(fluid)
                    v-row(no-gutters)
                        //- Left column
                        v-col(
                            cols="12" 
                            sm="4")
                            v-card.pa-0(flat)
                                v-card-actions.pa-0.ma-0
                                    v-tooltip(
                                        right
                                    )
                                        template(
                                            v-slot:activator="{ on: tooltip }"
                                        )
                                            v-btn.ma-0(
                                                fab
                                                x-small
                                                depressed
                                                color="transparent" 
                                                v-on="{ ...tooltip }"
                                                @click="switchTheme")
                                                v-icon(v-if="$vuetify.theme.dark") mdi-lightbulb-on
                                                v-icon(v-if="!$vuetify.theme.dark") mdi-lightbulb-outline
                                        span(v-if="$vuetify.theme.dark") Switch to light theme
                                        span(v-else) Switch to dark theme

                        //- Center column
                        v-col.text-center(
                            cols="12" 
                            sm="4"
                            justify-center)
                            v-card.pa-0(flat)
                                | {{ new Date().getFullYear() }} — 
                                strong Y&D Learning

                        //- Right column
                        v-col(
                            cols="12" 
                            sm="4")
                            v-card.pa-0(flat) 
                                v-card-actions.pa-0.ma-0
                                    v-spacer
                                    v-tooltip(
                                        left
                                    )
                                        template(
                                            v-slot:activator="{ on: tooltip }"
                                        )
                                            v-btn.ma-0(
                                                fab
                                                x-small
                                                depressed
                                                v-on="{ ...tooltip }"
                                                color="transparent" 
                                                @click="toTop")
                                                v-icon mdi-arrow-up-circle-outline
                                        span Scroll to top
</template>

<script>
import { mapState } from "vuex";
import CountryFlag from "vue-country-flag";

export default {
    name: "Footer",
    inject: ["theme"],
    data: () => ({
        locales: ["en", "de", "jp"],
        languageSelection: false,
        sites: [
            {
                id: 1,
                name: "Home",
                to: "/"
            },
            {
                id: 2,
                name: "Privacy Policy",
                to: "/privacy_policy"
            },
            {
                id: 3,
                name: "Legal disclosure",
                to: "/legal_disclosure"
            },
            {
                id: 4,
                name: "Cookies",
                to: "/cookies"
            },
            {
                id: 5,
                name: "Contact Us",
                to: "/contact_us"
            }
        ],
        socialMedia: [
            {
                id: 1,
                name: "Y&D Learning",
                iconName: "mdi-github-circle",
                href: "https://github.com/ydlearning"
            },
            {
                id: 2,
                name: "Frontend",
                iconName: "mdi-github-circle",
                href: "https://github.com/ydlearning/ydl-v2-front"
            },
            {
                id: 3,
                name: "Backend",
                iconName: "mdi-github-circle",
                href: "https://github.com/ydlearning/ydl-v2-api"
            }
        ]
    }),
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    components: {
        // somehow indicate that this is a third party component (cf-)
        "cf-country-flag": CountryFlag
    },
    computed: {
        ...mapState(["darkTheme"]),
        // switchThemezzz() {
        //     return (this.darkTheme = false);
        // }
        getLocale: function() {
            var locale = this.$i18n.locale;
            // the icon component does not have flag for en
            if (locale === "en") {
                return "us";
            }
            return locale;
        },
        getLocales: function() {
            return this.locales.filter(locale => locale !== this.$i18n.locale);
        }
    },
    methods: {
        toTop() {
            this.$vuetify.goTo(0);
        },
        switchTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
};
</script>

<style lang="sass"></style>
