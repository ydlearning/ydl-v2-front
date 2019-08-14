<template lang="pug">
    v-container
        v-row(v-for="announcement in announcements" :key="announcement.title")
            v-col(max-width=800)
                AnnouncementCard(
                    :title="announcement.title"
                    :content="announcement.content"
                    :author="announcement.User.username"
                    :date="announcement.date")
</template>

<script>
import AnnouncementCard from "@/components/AnnouncementCard";

import json from "@/data/announcements.json";

export default {
    name: "AnnouncementLayout",
    components: {
        AnnouncementCard
    },
    data() {
        return {
            announcements: []
        };
    },
    mounted() {
        this.announcements = json.data.allAnnouncements.announcements;
    }
};
</script>

<style lang="sass"></style>
