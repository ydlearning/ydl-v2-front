<template lang="pug">
    v-card(max-width=850)
        v-card-title News
        v-card-text
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

<style lang="sass"></style>
