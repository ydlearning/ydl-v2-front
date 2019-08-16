<template lang="pug">
    v-list-item
        v-list-item-content
            v-list-item-title {{subject}}
            v-list-item-subtitle {{headline}}
        v-list-item-action
            v-list-item-action-text {{new Date(date).format('MM/DD/YYYY')}}
            v-list-item-action-text {{new Date(date).format('hh:mm A')}}
</template>

<script>
export default {
    props: {
        subject: {
            type: String,
            default: "subject"
        },
        headline: {
            type: String,
            default: "headline"
        },
        date: {
            type: String,
            default: "date"
        }
    }
};
</script>
