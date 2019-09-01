<template lang="pug">
    div(v-html="content")
</template>

<script>
export default {
    name: "CourseContentItemContent",
    props: {
        content: {
            type: String,
            default: "<b>This</b> is Content!"
        }
    }
};
</script>
