<template lang="pug">
    v-container.pa-0(fluid)
        v-row(no-gutters)
            v-col(cols=12 sm=9)
                v-row(no-gutters)
                    v-col.pb-2.pt-4.px-4
                        v-card.pa-2(tile)
                            //- layout end
                            v-toolbar.orange(flat) Profile
                            p LLl
                v-row(no-gutters)
                    v-col.pt-2.pb-4.px-4
                        v-card.pa-2(tile flat color="transparent")
                            //- layout end
                            v-card-title Favorite Courses
            v-col.pa-4(cols=12 sm=3)
                v-card.pa-0.fill-height(tile flat color="transparent")
                    //- layout 
                    v-row.ma-0
                        v-col
                            TheNotification
                        v-col
                            TheTask
                            
                    
                            
</template>

<script>
import TheNotification from "@/components/TheNotification";
import TheTask from "@/components/TheTask";

export default {
    components: {
        TheNotification,
        TheTask
    },
    mounted() {
        console.debug(this.$route.name);
    }
};
</script>

<style lang="sass"></style>
