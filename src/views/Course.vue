<template lang="pug">
    div
        v-overlay(
            :value="showWelcomeScreen"
        )
            v-card(max-width=400)
                v-card-title Welcome to the Course!
                v-card-text Important notes
                v-card-actions
                    v-spacer
                    v-btn(@click="showWelcomeScreen = false") Accept
        TheCourse
</template>

<script>
import TheCourse from "@/components/TheCourse";

export default {
    name: "Course",
    props: {
        showWelcomeScreen: {
            type: Boolean,
            default: false
        }
    },
    components: {
        TheCourse
    }
};
</script>
