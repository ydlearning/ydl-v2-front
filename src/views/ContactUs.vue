<template lang="pug">
BaseFooterItem(icon="mdi-web")
    ContactUsData

</template>

<script>
import ContactUsData from "@/components/ContactUsData";
import BaseFooterItem from "@/components/BaseFooterItem";
import { mapState } from "vuex";
export default {
    name: "ContactUs",
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
    padding-left: 0%
    padding-right: 0%
    padding-bottom: 3%
</style>
