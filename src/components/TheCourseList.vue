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
                            @input="searchText"
                        )
            v-row
                v-col(v-for="course in filteredCourses" :key="course.name" cols=12 sm=6 lg=3)
                    CourseItem(
                        :header="course.search_name"
                    )

</template>

<script>
import BaseDashboardItem from "@/components/BaseDashboardItem";
import CourseItem from "@/components/CourseItem";

export default {
    name: "TheCourseList",
    data() {
        return {
            filteredCourses: this.courses.filter(course => {
                //- TODO: workaround to initially set the extra property search_name
                course.search_name = course.name;
                return true;
            })
        };
    },
    components: {
        BaseDashboardItem,
        CourseItem
    },
    methods: {
        searchText(searchtext) {
            this.filteredCourses = this.courses.filter(course => {
                let matched = course.name.includes(searchtext);
                if (matched) {
                    course.search_name = course.name.replace(
                        searchtext,
                        "<mark>" + searchtext + "</mark>"
                    );
                } else {
                    course.search_name = course.name;
                }
                return matched;
            });
        }
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
