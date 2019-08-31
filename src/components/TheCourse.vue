<template lang="pug">
    v-row(no-gutters)
        v-col
            v-card(max-width=1200 color="transparent" flat)
                v-toolbar
                    v-toolbar-title [{{ new Date(current_course.start).format("YY") + "/" + new Date(current_course.end).format("YY") + " " + current_course.term }}] {{ current_course.name }}
                    v-spacer
                    v-toolbar-title.grey--text.ma-4 {{ new Date(current_course.start).format("DD.MM.YY") + " - " + new Date(current_course.end).format("DD.MM.YY") }}
                    ResourceDownloadDialog
                v-card-text
                    CourseContentItem(title="Announcements")
                    CourseContentItem(title="Week 19.08 - 25.08")
                    CourseContentItem(title="Week 26.08 - 2.09")

</template>

<script>
import { mapState } from "vuex";
import ResourceDownloadDialog from "@/components/ResourceDownloadDialog";
import CourseContentItem from "@/components/CourseContentItem";

export default {
    name: "TheCourse",
    computed: mapState(["current_course"]),
    components: {
        ResourceDownloadDialog,
        CourseContentItem
    }
};
</script>
