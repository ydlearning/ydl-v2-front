<template lang="pug">
v-card(flat)
    v-card-text
        v-toolbar(dense)
            v-toolbar-title {{ title }}
            v-spacer
            v-toolbar-item
                slot(name="resourceDownload")
                //- ResourceDownloadDialog
        v-card-text
            slot(name="content")
            //- CourseContentItemContent
        v-divider(v-if="hasBody")
        slot(name="resourceList")
        //- CourseContentItemResourcesList
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
