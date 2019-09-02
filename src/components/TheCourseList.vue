<template lang="pug">
    BaseDashboardItem(
        title="Favorite Courses"
    )
        v-container(fluid)
            v-row
                v-col
                    v-toolbar
                        v-text-field(
                            prepend-icon="mdi-magnify"
                            hide-details
                            clearable
                            label="Search"
                            value="Mana"
                        )
            v-row
                v-col(v-for="course in courses" :key="course.name" cols=12 sm=6 lg=3)
                    CourseItem(
                        :header="course.name"
                    )

</template>

<script>
import BaseDashboardItem from "@/components/BaseDashboardItem";
import CourseItem from "@/components/CourseItem";

export default {
    name: "TheCourseList",
    components: {
        BaseDashboardItem,
        CourseItem
    },
    props: {
        courses: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="sass"></style>
