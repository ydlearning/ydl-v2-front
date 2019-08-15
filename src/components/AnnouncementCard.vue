<template lang="pug">
    v-card
        v-toolbar(color="primary" flat)
            //- pa-0 to remove the padding on the left from the list item
            v-list-item.pa-0
                v-list-item-content
                    v-list-item-title.headline {{title}}
                    v-list-item-subtitle
                        v-row(no-gutters)
                            v-col {{author}}
                            v-spacer
                            v-col.text-right {{new Date(date).format('MM/DD/YYYY hh:mm A')}}
        //- Vue2Editor
        v-card-text
            div(v-html="content")
</template>

<script>
import Vue2Editor from "@/components/Vue2Editor";

export default {
    name: "AnnouncementCard",
    components: {
        Vue2Editor
    },
    props: {
        // Title of Announcement
        title: {
            type: String,
            default: "title"
        },
        // Content of Announcement
        content: {
            type: String,
            default: "content"
        },
        // Author for Announcement
        author: {
            type: String,
            default: "author"
        },
        // Date of Announcement
        date: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="sass"></style>
