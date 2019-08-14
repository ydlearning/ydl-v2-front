<template lang="pug">
    v-card(flat tile)
        v-card-text
            vue-editor(v-model="content")
</template>

<script>
import { VueEditor } from "vue2-editor/dist/vue2-editor.core.js";

export default {
    name: "Vue2Editor",
    data: () => ({
        content: "<h1>initial content</h1>"
    }),
    components: { VueEditor }
};
</script>

<style lang="sass">
@import "~vue2-editor/dist/vue2-editor.css"

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css'
@import '~quill/dist/quill.snow.css'

.ql-snow.ql-toolbar
    background-color: gray
.ql-stroke
    fill: white
</style>
