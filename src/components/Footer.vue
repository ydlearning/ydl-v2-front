<template lang="pug">
//- Footer component
div 
    v-footer(
        dark 
        padless
        width="100%" 
        color="primary"
    )
        v-row.lighten-1.white--text(
            justify="center" 
            no-gutters
            width="100%"
        )
        
            //- Website links
            v-btn.my-2(
                v-for="site in sites"
                :key="site.id" 
                color="white"
                text 
                :to="site.to"
            )
                | {{ site.name }}
        
        //- Footer card
        v-card.lighten-1.white--text.text-center(
            flat 
            tile
            width="100%"
        )
            //- Footer Text
            v-card-text 
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
            
            //- Text footer
            //- v-card-text.white--text.pt-0
                | Text

            v-divider

            //- Year / Copyright
            v-card-text.white--text
                | {{ new Date().getFullYear() }} — 
                strong Y&D Learning
                //- v-flex.xs12
                //- v-spacer
                //- v-btn.ma-0(
                    fab 
                    dark
                    x-small
                    color="grey" 
                    @click="toTop")
                    v-icon mdi-arrow-up-circle-outline
</template>

<script>
export default {
    name: "Footer",
    data: () => ({
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
                name: "Contact Us",
                to: "contact_us"
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
                href: "https://github.com/ydlearning/ydl-v2-api-gql"
            }
        ]
    }),
    props: {
        value: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="sass"></style>
