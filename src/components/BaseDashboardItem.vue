<template lang="pug">
    v-card
        v-card-title
            span.title {{ title }}
            v-spacer
            v-btn(icon text color="blue")
                v-icon {{ icon }}
        slot
</template>

<script>
export default {
    name: "BaseDashboardItem",
    props: {
        title: {
            type: String,
            default: "<Title>"
        },
        icon: {
            type: String,
            default: "mdi-window-restore"
        }
    }
};
</script>

<style lang="sass"></style>
