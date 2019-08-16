<template lang="pug">
    v-card.remove-top-padding(max-width=850 flat color="transparent")
        //- v-card-title.text-center.justify-center.display-3.text-center.font-weight-regular News
        v-card-text.remove-top-padding
            NewsList
</template>

<script>
import NewsList from "@/components/NewsList";

export default {
    name: "TheNews",
    components: {
        NewsList
    }
};
</script>

<style lang="sass">
.remove-top-padding
    padding-top: 0
</style>
