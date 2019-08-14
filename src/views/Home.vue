<template lang="pug">
    v-layout(align-center justify-center)
        v-card(flat color="transparent")
            v-container
                v-flex
                    v-layout(align-center justify-center)
                        v-card(flat color="transparent")
                            v-container
                                v-img(
                                    :src="require('../assets/YDL-Logo.svg')" 
                                    width="500" 
                                    aspect-ratio="1.8888")
                    h2.text-center.display-3.font-weight-regular.page-header Y&D Learning
                    br 
                    br
                v-flex
                    h3.text-center.display-2.text-center.font-weight-regular News
            TheNews
</template>

<script>
import TheNews from "@/components/TheNews";

export default {
    components: { TheNews }
};
</script>

<style lang="sass">
.page-header
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.6), -1px -1px 1px rgba(0, 0, 0, 0.6)
</style>
