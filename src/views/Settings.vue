<template lang="pug">
v-layout(align-center justify-center)
    v-card(flat color="transparent" height="90%" width="90%")
        v-container
            v-flex
                h3.text-center.display-2.text-center.font-weight-regular Settings
            TheSettings
</template>

<script>
import TheSettings from "@/components/TheSettings";

export default {
    components: { TheSettings }
};
</script>

<style lang="sass"></style>
