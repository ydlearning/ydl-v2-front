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
                            v-toolbar
                                v-text-field(
                                    prepend-icon="mdi-magnify"
                                    hide-details
                                    clearable
                                    label="Search"
                                    value="Mana"
                                )
                            v-container(fluid)
                                v-row
                                    v-col(v-for="n in 4" :key="n" cols=12 sm=6 lg=3)
                                        v-card(tile)
                                            v-img(
                                                :src="require('../data/dashboard/images/' + Math.floor((Math.random() * 7) + 0) + '.jpg')"
                                                height=130
                                            )
                                            v-card-actions
                                                span.blue--text.font-weight-black Mana
                                                span gement, Practice and Law
                                                v-spacer
                                                v-btn(icon small)
                                                    v-icon(size=16) mdi-star
                                v-row
                                    v-col(v-for="n in 4" :key="n" cols=12 sm=6 lg=3)
                                        v-card(tile )
                                            v-img(
                                                :src="require('../data/dashboard/images/' + Math.floor((Math.random() * 7) + 0) + '.jpg')"
                                                height=130
                                            )
                                            v-card-actions
                                                span Management, Practice and Law
                                                v-spacer
                                                v-btn(icon small)
                                                    v-icon(size=16) mdi-star

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
