<template lang="pug">
    BaseDashboardItem(
        title="Filter"
    )
        v-card-text
            v-span.subheading Show only...
            v-row(justify="space-around")
                v-switch(label="Favorites")
                v-switch(label="Active")
                v-switch(label="Unread")
            v-span.subheading Filter by Category
            v-chip-group(column multiple)
                v-chip(v-for="n in 8" :key="n") {{ "chip" + n }}
            v-span.subheading Filter by Term
            v-chip-group(column multiple)
                v-chip WS
                v-chip SS          
</template>

<script>
import BaseDashboardItem from "@/components/BaseDashboardItem";

export default {
    name: "TheCourseFilter",
    components: {
        BaseDashboardItem
    }
};
</script>
