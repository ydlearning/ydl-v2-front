<template lang="pug">
    BaseDashboardItem(
        title="Notification"
    )
        NotificationList
</template>

<script>
import NotificationList from "@/components/NotificationList";
import BaseDashboardItem from "@/components/BaseDashboardItem";

export default {
    name: "TheNotification",
    components: {
        NotificationList,
        BaseDashboardItem
    }
};
</script>

<style lang="sass"></style>
