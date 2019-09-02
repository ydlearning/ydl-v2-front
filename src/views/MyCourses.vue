<template lang="pug">
    v-container.pa-0(fluid)
        v-row.ma-0
            v-col(cols=12 sm=9)
                TheCourseList(:courses="my_courses")
            v-col.fixed.fixed--right(cols=12 sm=3)
                TheCourseFilter

</template>

<script>
import { mapState } from "vuex";
import TheCourseList from "@/components/TheCourseList";
import TheCourseFilter from "@/components/TheCourseFilter";

export default {
    name: "MyCourses",
    components: {
        TheCourseList,
        TheCourseFilter
    },
    computed: mapState(["my_courses"])
};
</script>

<style lang="sass" scoped>
.fixed
    position: fixed
.fixed--right
    right: 0
</style>
