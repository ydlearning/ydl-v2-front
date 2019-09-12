<template lang="pug">
    v-card(color="blue")
        v-container(fluid)
            v-row()
                v-col(cols="12" md="3")
                    v-card(color="yellow" padding-left="3%")
                        //- v-navigation-drawer(permanent)
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
                v-col(cols="12" md="9")
                    v-card()
                        router-view
</template>

<script>
export default {
    name: "AnnouncementCard"
};
</script>
