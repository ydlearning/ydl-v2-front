<template lang="pug">
    v-card
        v-card-title
            span.title Notifications
            v-spacer
            v-btn(icon text color="blue")
                v-icon mdi-window-restore
        NotificationList
</template>

<script>
import NotificationList from "@/components/NotificationList";

export default {
    name: "TheNotification",
    components: {
        NotificationList
    }
};
</script>

<style lang="sass"></style>
