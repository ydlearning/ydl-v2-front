<template lang="pug">
    v-app
        v-app-bar(app text color="primary")
            v-toolbar-title.headline
                span Y&D
                span.font-weight-light Learning
            v-spacer
            v-toolbar-items
                v-btn(text to="/").tile Home
                v-btn(text to="About") About
        v-content
            router-view
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            //
        };
    }
};
</script>

<style lang="sass">
html
    // remove scroll bar
    // overflow: hidden
    /* own scrollbar */
    /* scrollbar firefox */
    scrollbar-color: rgb(110, 110, 110) rgb(1, 1, 1)
    /* own scrollbar */
    /* Note: The -webkit-scrollbar is not supported by Firefox or IE and Edge. */
    ::-webkit-scrollbar
        /* width */
        width: 12px
    ::-webkit-scrollbar-track
        /* Track */
        box-shadow: inset 0 0 5px grey
        border-radius: 8px

    ::-webkit-scrollbar-thumb
        /* Handle */
        background: rgb(110, 110, 110)
        border-radius: 10px
    ::-webkit-scrollbar-thumb:hover
        /* Handle on hover */
        background: rgb(110, 110, 110)
    ::-webkit-scrollbar-track-piece
        /* not handle on */
        background: rgb(1, 1, 1)
</style>
