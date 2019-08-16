<template lang="pug">
    v-list(dense)
        v-list-item-group
            template(v-for="(notification, index) in notifications")
                NotificationListItem(
                    :subject="notification.subject"
                    :headline="notification.headline"
                    :date="notification.date"
                )
                //- only the render the divider between list items not at the end
                v-divider(v-if="index < notifications.length - 1")
</template>
<
<script>
import NotificationListItem from "@/components/NotificationListItem";

import json from "@/data/dashboard/notifications.json";

export default {
    name: "NotificationList",
    components: {
        NotificationListItem
    },
    data() {
        return {
            notifications: []
        };
    },
    mounted() {
        this.notifications = json.data.allNotifications;
    }
};
</script>

<style lang="sass"></style>
