<template lang="pug">
    v-container.pa-0(fluid)
        v-row.ma-0
            v-col(cols=12 sm=9)
                //- slice is just a workaround to simulated favorite courses
                TheCourseList( :courses="my_courses.slice(0, 8)")

            v-col(cols=12 sm=3)
                TheNotification.mb-4
                TheTask       
</template>

<script>
import TheNotification from "@/components/TheNotification";
import TheTask from "@/components/TheTask";
import TheCourseList from "@/components/TheCourseList";

import { mapState } from "vuex";

export default {
    components: {
        TheNotification,
        TheTask,
        TheCourseList
    },
    computed: mapState(["my_courses"]),
    mounted() {
        console.debug(this.$route.name);
    }
};
</script>

<style lang="sass"></style>
