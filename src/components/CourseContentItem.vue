<template lang="pug">
v-card(flat color="transparent")
    v-card-text
        v-toolbar(dense color="#131313")
            v-toolbar-title {{ title }}
            v-spacer
            v-toolbar-items
                slot(name="resourceDownload")
                //- ResourceDownloadDialog
        v-card-text
            slot(name="content")
            //- CourseContentItemContent
        //- TODO: maybe remove both dividers
        v-divider(v-if="hasBody")
        slot(name="resourceList")
        //- CourseContentItemResourcesList
        v-divider
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
        },
        hasBody: {
            type: Boolean,
            default: false
        }
    },
    components: {
        CourseContentItemContent,
        CourseContentItemResourcesList,
        ResourceDownloadDialog
    }
};
</script>
