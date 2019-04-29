<template lang="pug">
    v-app(dark)
        v-toolbar(app flat color="primary")
            v-toolbar-title.headline
                span Y&D
                span.font-weight-light Learning
            v-spacer
            v-toolbar-items
                v-btn(flat to="/").tile Home
                v-btn(flat to="About") About
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
  overflow: hidden
</style>
