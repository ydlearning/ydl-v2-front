<template lang="pug">
    v-list(dense color="transparent")  
        v-list-item(v-for="resource in resources" :key="resource.name")
            v-list-item-icon
                v-icon {{ fileTypeIconMapping[resource.type] }}
            v-list-item-content
                v-list-item-title {{ resource.name }}
</template>

<script>
export default {
    name: "CourseContentItemResourcesList",
    props: {
        fileTypeIconMapping: {
            type: Object,
            //- default with Array/Object must be a function
            default: () => ({
                pdf: "mdi-file-pdf",
                movie: "mdi-file-video",
                quiz: "mdi-help-circle",
                //- TODO: just workaround
                forum: "mdi-forum"
            })
        },
        resources: {
            type: Array,
            default: () => [
                {
                    name: "Announcements",
                    type: "forum",
                    fileType: null
                },
                {
                    name: "Studentforum",
                    type: "forum",
                    fileType: null
                },
                {
                    name: "Script",
                    type: "script",
                    fileType: "pdf"
                }
            ]
        }
    }
};
</script>

<style lang="sass"></style>
