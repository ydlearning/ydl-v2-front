<template lang="pug">
    v-card.remove-top-padding(max-width=850 flat color="transparent")
        //- v-card-title.text-center.justify-center.display-3.text-center.font-weight-regular News
        v-card-text.remove-top-padding
            AnnouncementLayout
</template>

<script>
import AnnouncementLayout from "@/components/AnnouncementLayout";

export default {
    name: "TheNews",
    components: {
        AnnouncementLayout
    }
};
</script>

<style lang="sass">
.remove-top-padding
    padding-top: 0
</style>
