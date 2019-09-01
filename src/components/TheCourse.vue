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
                    CourseContentItem(
                        title="Announcements"
                        :hasBody="current_course.content.announcement.body ? true : false"
                    )
                        template(v-slot:content)
                            CourseContentItemContent(
                                :content="current_course.content.announcement.body.content"
                            )
                        template(v-slot:resourceList)
                            CourseContentItemResourcesList(
                                :resources="current_course.content.announcement.resources"
                            )
                        template(v-slot:resourceDownload)
                            ResourceDownloadDialog(
                                :resources="current_course.content.announcement.resources.filter(x => x.download)"
                            )
                    CourseContentItem(
                        v-for="content in current_course.content.contents" :key="content.name"
                        :title="content.week"
                        :hasBody="content.body ? true : false"
                    )
                        template(v-slot:content)
                            CourseContentItemContent(
                                v-if="content.body"
                                :content="content.body"
                            )
                        template(v-slot:resourceList)
                            CourseContentItemResourcesList(
                                :resources="content.resources"
                            )
                        template(v-slot:resourceDownload)
                            ResourceDownloadDialog(
                                :resources="content.resources.filter(x => x.download)"
                            )

</template>

<script>
import { mapState } from "vuex";
import ResourceDownloadDialog from "@/components/ResourceDownloadDialog";
import CourseContentItem from "@/components/CourseContentItem";
import CourseContentItemContent from "@/components/CourseContentItemContent";
import CourseContentItemResourcesList from "@/components/CourseContentItemResourcesList";

export default {
    name: "TheCourse",
    computed: mapState(["current_course"]),
    components: {
        ResourceDownloadDialog,
        CourseContentItem,
        CourseContentItemContent,
        CourseContentItemResourcesList
    }
};
</script>
