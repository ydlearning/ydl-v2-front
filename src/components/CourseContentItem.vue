<template lang="pug">
v-card(flat)
    v-card-text
        v-toolbar(dense)
            v-toolbar-title {{ title }}
            v-spacer
            ResourceDownloadDialog
        v-card-text
            CourseContentItemContent
        v-divider
        CourseContentItemResourcesList
</template>

<script>
import ResourceDownloadDialog from "@/components/ResourceDownloadDialog";
import CourseContentItemContent from "@/components/CourseContentItemContent";
import CourseContentItemResourcesList from "@/components/CourseContentItemResourcesList";

export default {
    name: "CourseContentItem",
    props: {
        title: {
            type: String,
            default: "<title>"
        }
    },
    components: {
        CourseContentItemContent,
        CourseContentItemResourcesList,
        ResourceDownloadDialog
    }
};
</script>
