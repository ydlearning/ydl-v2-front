<template lang="pug">
    v-dialog(v-model="showDialog")
        template(v-slot:activator="{ on }")
            v-btn(icon small v-on="on")
                v-icon mdi-download-multiple
        v-card
            v-card-title
                span Select Resources
                v-spacer
                v-card-actions
                    v-btn Select All
            v-divider
            v-list
                v-list-item-group(multiple)
                    v-list-item
                        template(v-slot:default="{ active, toggle }")
                            v-list-item-icon
                                v-icon mdi-file-pdf
                            v-list-item-content
                                v-list-item-title Lecture 00 (Introduction)
                            v-list-item-action
                                v-icon.grey--text(v-if="!active") mdi-checkbox-blank-circle-outline
                                v-icon.green--text(v-else) mdi-checkbox-blank-circle
            v-divider
            v-card-actions
                v-btn(text @click="showDialog = false") Close
                v-spacer
                v-btn Download
</template>

<script>
export default {
    name: "ResourceDownloadDialog",
    props: {
        resources: {
            type: Array,
            default: new Array([
                {
                    name: "Script",
                    type: "SCRIPT",
                    fileType: "PDF"
                },
                {
                    name: "Lecture 01",
                    type: "LECTURE",
                    fileType: "PDF"
                }
            ])
        }
    },
    data() {
        return {
            showDialog: false
        };
    }
};
</script>

<style lang="sass"></style>
