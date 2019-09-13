<template lang="pug">
    v-container.container-padding(
        fluid 
    )
        v-row(align='center' justify='center')
                v-card.elevation-12(width="60%")

                    //- Toolbar / App Title
                    v-toolbar(color='primary' flat)
                        v-toolbar-title {{ this.$route.name }}
                        .flex-grow-1
                        v-tooltip(
                            bottom
                        )
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
                            ContactUsData()

</template>

<script>
import ContactUsData from "@/components/ContactUsData";
import { mapState } from "vuex";
export default {
    name: "ContactUs",
    computed: {
        ...mapState(["isLoggedIn"])
    },
    components: {
        ContactUsData
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
</style>
