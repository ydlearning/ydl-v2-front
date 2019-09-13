<template lang="pug">
    //- Legal Disclosure / Legal Notice site / Impressum 
    v-container.container-padding(
        fluid 
    )
        v-row(align='center' justify='center')
                v-card.elevation-12

                    //- Toolbar / App Title
                    v-toolbar(color='primary' flat)
                        v-toolbar-title {{ this.$route.name }} / Legal Notice
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
                                    to="/impressum"
                                )
                                    v-icon mdi-web
                            span Deutsch

                    v-card-text.body-1
                        div 
                            h3 The following information (Impressum) is required under German law.

                            ContactUsData()

                            h2 Online Dispute Resolution website of the EU Commission
                            p In order for consumers and traders to resolve a dispute out-of-court, the European Commission developed the Online Dispute Resolution Website: www.ec.europa.eu/consumers/odr

                            h2 Legal disclaimer
                            p The contents of these pages were prepared with utmost care. Nonetheless, we cannot assume liability for the timeless accuracy and completeness of the information.

                            p Our website contains links to external websites. As the contents of these third-party websites are beyond our control, we cannot accept liability for them. Responsibility for the contents of the linked pages is always held by the provider or operator of the pages.

                            h2 Data protection
                            p In general, when visiting the website of [FÜGEN SIE HIER IHREN (UNTERNEHMENS)NAMEN EIN], no personal data are saved. However, these data can be given on a voluntary basis. No data will be passed on to third parties without your consent. We point out that in regard to unsecured data transmission in the internet (e.g. via email), security cannot be guaranteed. Such data could possibIy be accessed by third parties.       
</template>

<script>
import { mapState } from "vuex";
import ContactUsData from "@/components/ContactUsData";
export default {
    name: "LegalDisclosure",
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
    padding-left: 10%
    padding-right: 10%
    padding-bottom: 3%
</style>
