<template lang="pug">
//- align-center justify-center
v-container(fluid)
    v-row.justify-center.align-center
        v-card(flat color="transparent" width="90%" )
            //- v-container
            TheSettings
</template>

<script>
import TheSettings from "@/components/TheSettings";

export default {
    components: { TheSettings }
};
</script>

<style lang="sass"></style>
