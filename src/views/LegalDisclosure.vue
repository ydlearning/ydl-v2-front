<template lang="pug">
BaseFooterItem(icon="mdi-web")
    div 
        h3 The following information (Impressum) is required under German law.

        ContactUsData

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
import BaseFooterItem from "@/components/BaseFooterItem";
export default {
    name: "LegalDisclosure",
    computed: {
        ...mapState(["isLoggedIn"])
    },
    components: {
        ContactUsData,
        BaseFooterItem
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
