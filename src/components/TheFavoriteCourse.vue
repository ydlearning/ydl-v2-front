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
                v-col(v-for="n in 8" :key="n" cols=12 sm=6 lg=3)
                    FavoriteCourseItem(
                        header="Frontend Course"
                    )

</template>

<script>
import BaseDashboardItem from "@/components/BaseDashboardItem";
import FavoriteCourseItem from "@/components/FavoriteCourseItem";

export default {
    name: "TheFavoriteCourse",
    components: {
        BaseDashboardItem,
        FavoriteCourseItem
    }
};
</script>

<style lang="sass"></style>
