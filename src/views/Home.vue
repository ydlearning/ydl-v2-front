<template lang="pug">
    v-layout(align-center justify-center)
        //- v-img(:src="require('../assets/YDL-Logo.svg')")
        v-card(flat color="rgb(110, 110, 110, 0)")
            v-container
                v-flex
                    v-img(:src="require('../assets/YDL-Logo_white_borders.png')" width="500" aspect-ratio="1.778")
                    h2.text-center.display-3.font-weight-regular Y&D Learning
                    br 
                    br
                    h4.text-center.display-2 News
                    p Test
</template>

<script>
export default {
    components: {}
};
</script>

<style lang="sass"></style>
