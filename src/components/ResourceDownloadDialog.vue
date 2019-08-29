<template lang="pug">
    v-dialog(v-model="showDialog" :max-width="maxWidth")
        template(v-slot:activator="{ on }")
            v-btn(icon small v-on="on")
                v-icon mdi-download-multiple
        v-card
            v-card-title
                span Select Resources
                v-spacer
                v-card-actions
                    v-checkbox(@change="checkboxChanged") sd
            v-divider
            v-list
                v-list-item-group(multiple v-model="selected")
                    v-list-item(v-for="resource in resources" :key="resource.name")
                        template(v-slot:default="{ active, toggle }")
                            v-list-item-icon
                                v-icon {{ fileTypeIconMapping[resource.fileType] }}
                            v-list-item-content
                                v-list-item-title {{ resource.name }}
                            v-list-item-action
                                v-icon.grey--text(v-if="!active") mdi-checkbox-blank-circle-outline
                                v-icon.green--text(v-else) mdi-checkbox-blank-circle
            v-divider
            v-card-actions
                v-btn(text @click="closeDialog") Close
                v-spacer
                v-badge(overlap :color="selected.length > 0 ? 'success' : 'error'")
                    template(v-slot:badge)
                        span {{ selected.length }}
                    v-btn Download
</template>

<script>
export default {
    name: "ResourceDownloadDialog",
    props: {
        maxWidth: {
            type: Number,
            default: 512
            //- default: -1
        },
        fileTypeIconMapping: {
            type: Object,
            //- default with Array/Object must be a function
            default: () => ({
                pdf: "mdi-file-pdf",
                movie: "mdi-file-video"
            })
        },
        resources: {
            type: Array,
            //- default with Array/Object must be a function
            default: () => [
                {
                    name: "Script",
                    type: "script",
                    fileType: "pdf"
                },
                {
                    name: "Lecture 01",
                    type: "lecture",
                    fileType: "pdf"
                }
            ]
        }
    },
    data() {
        return {
            showDialog: false,
            selected: []
        };
    },
    methods: {
        closeDialog() {
            this.showDialog = false;
            this.selected = [];
        },
        selectAll() {
            this.selected = Array.from(Array(this.resources.length).keys());
        },
        checkboxChanged(value) {
            value ? this.selectAll() : (this.selected = []);
        }
    }
};
</script>

<style lang="sass"></style>
