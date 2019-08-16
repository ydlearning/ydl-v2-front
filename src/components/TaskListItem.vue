<template lang="pug">
    v-list-item
        v-list-item-content
            v-list-item-title {{ courseName }}
            v-list-item-subtitle {{ name }}
        v-list-item-action
            v-list-item-action-text 
                span {{ getTimeRemainingString(dueTo) }}
                span.pl-2
                    v-btn(small icon)
                        template(v-if="type === 'Assignment'")
                            v-icon(color="blue") mdi-upload
                        template(v-else-if="type === 'Quiz'")
                            v-icon(color="blue") mdi-arrow-right-bold
</template>

<script>
export default {
    name: "TaskListItem",
    props: {
        name: {
            type: String,
            default: "Name"
        },
        courseName: {
            type: String,
            default: "Course Name"
        },
        dueTo: {
            type: String,
            default: "Due To"
        },
        type: {
            type: String,
            default: ""
        }
    },
    methods: {
        getTimeRemainingString(date) {
            var now = Date.now();
            var due = new Date(date);
            var diff = due - now;

            var measurering_unit = "ms";
            var conversion = diff;

            if (diff > 31556952000) {
                conversion = conversion / 31556952000;
                measurering_unit = "years";
            } else if (diff > 86400000) {
                conversion = conversion / 86400000;
                measurering_unit = "days";
            } else if (diff > 3600000) {
                conversion = conversion / 3600000;
                measurering_unit = "hours";
            } else if (diff > 60000) {
                conversion = conversion / 60000;
                measurering_unit = "mins";
            } else if (diff > 1000) {
                conversion = conversion / 1000;
                measurering_unit = "secs";
            }

            var floored_conversion = Math.floor(conversion);
            if (floored_conversion === 1 && diff > 1000) {
                measurering_unit = measurering_unit.substring(0, measurering_unit.length - 1);
            }

            return `${floored_conversion} ${measurering_unit}`;
        }
    }
};
</script>

<style lang="sass"></style>
