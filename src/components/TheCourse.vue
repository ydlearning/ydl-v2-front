<template lang="pug">
    v-row(no-gutters)
        v-col
            v-card(max-width=1200 color="transparent" flat)
                v-toolbar
                    v-toolbar-title [18/19 W] Computergraphics
                    v-spacer
                    ResourceDownloadDialog
                v-card-text
                    CourseContentItem(title="Announcements")
                    CourseContentItem(title="Week 19.08 - 25.08")
                    CourseContentItem(title="Week 26.08 - 2.09")

</template>

<script>
import ResourceDownloadDialog from "@/components/ResourceDownloadDialog";
import CourseContentItem from "@/components/CourseContentItem";

export default {
    name: "TheCourse",
    components: {
        ResourceDownloadDialog,
        CourseContentItem
    }
};
</script>
