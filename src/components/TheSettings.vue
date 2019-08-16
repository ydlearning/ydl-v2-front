<template lang="pug">
    v-card(color="blue")
        //- v-toolbar(color="primary" flat)
        //-     //- pa-0 to remove the padding on the left from the list item
        //-     v-list-item.pa-0
        //-         v-list-item-content
        //-             v-list-item-title.headline Title
        //-             v-list-item-subtitle
        //-                 v-row(no-gutters)
        //-                     v-col Hi
        v-container
            v-row()
                v-col(cols="3")
                    v-card(color="yellow" padding-left="3%")
                        v-navigation-drawer(permanent)
                            v-list(dense rounded)
                                v-list-item(to="/settings" exact)
                                    v-list-item-icon
                                        v-icon mdi-account-edit
                                    v-list-item-content
                                        v-list-item-title Edit profile
                                v-list-item(to="/settings/change-email")
                                    v-list-item-icon
                                        v-icon mdi-email-outline
                                    v-list-item-content
                                        v-list-item-title E-Mail settings
                                v-list-item(to="/settings/change-password")
                                    v-list-item-icon
                                        v-icon mdi-lock-outline
                                    v-list-item-content
                                        v-list-item-title Change Password
                v-col(cols="9")
                    v-card()
                        router-view
</template>

<script>
export default {
    name: "AnnouncementCard",
    components: {}
};
</script>

<style lang="sass"></style>
