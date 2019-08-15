<template lang="pug">
    v-card
        v-toolbar(color="primary" flat)
            //- pa-0 to remove the padding on the left from the list item
            v-list-item.pa-0
                v-list-item-content
                    v-list-item-title.headline Title
                    v-list-item-subtitle
                        v-row(no-gutters)
                            v-col Hi
</template>

<script>
export default {
    name: "AnnouncementCard",
    components: {}
};
</script>

<style lang="sass"></style>
