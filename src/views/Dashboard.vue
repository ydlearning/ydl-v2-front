<template lang="pug">
    v-container.pa-0(fluid)
        v-row(no-gutters)
            v-col(cols=12 sm=9)
                v-row(no-gutters)
                    v-col.pb-2.pt-4.px-4
                        v-card.pa-2(tile)
                            v-toolbar.orange(flat) Profile
                            p LLl
                v-row(no-gutters)
                    v-col.pt-2.pb-4.px-4
                        v-card.pa-2(tile)
                            v-card-title Favorite Courses
            v-col.pa-4(cols=12 sm=3)
                v-card.pa-2.fill-height(tile)
                    TheNotification
                    
                            
</template>

<script>
import TheNotification from "@/components/TheNotification";

export default {
    components: {
        TheNotification
    },
    mounted() {
        console.debug(this.$route.name);
    }
};
</script>

<style lang="sass"></style>
