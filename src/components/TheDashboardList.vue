<template lang="pug">
    v-list(dense)
        //- My Dashboard
        v-list-item(to="/dashboard")
            v-list-item-action
                v-icon mdi-home
            v-list-item-content
                v-list-item-title My dashboard

        template(v-if="isLoggedIn")
            //- My courses
            v-list-item(to="/mycourses")
                v-list-item-action
                    v-icon mdi-folder-account-outline
                v-list-item-content
                    v-list-item-title [My courses]
                    
        //- All Courses
        v-list-item(to="/courses")
            v-list-item-action
                v-icon mdi-folder-multiple-outline
            v-list-item-content
                v-list-item-title All courses

        //- Calendar
        v-list-item(to="/calendar")
            v-list-item-action
                v-icon mdi-calendar-account-outline
            v-list-item-content
                v-list-item-title Calendar

</template>

<script>
import { mapState } from "vuex";

export default {
    name: "TheDashboardList",
    computed: mapState(["isLoggedIn"])
};
</script>
