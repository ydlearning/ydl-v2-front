<template lang="pug">
    v-dialog(v-model="showDialog" :max-width="maxWidth" max-height="430" min-height="400")
        template(v-slot:activator="{ on }")
            v-btn(icon small v-on="on")
                v-icon mdi-download-multiple
        v-card
            v-card-title
                span Select Resources
                v-spacer
                v-card-actions
                    v-checkbox(v-model="isSelectAllSelected" @change="checkboxChanged" :label="isSelectAllSelected ? 'Deselect All' : 'Select All'")
            v-divider
            v-list
                v-list-item-group(multiple v-model="selected")
                    v-list-item(v-for="resource in filteredResources" :key="resource.name")
                        template(v-slot:default="{ active, toggle }")
                            v-list-item-icon
                                v-icon {{ fileTypeIconMapping[resource.type] }}
                            v-list-item-content
                                v-list-item-title {{ resource.name }}
                            v-list-item-action
                                v-icon.grey--text(v-if="!active") mdi-checkbox-blank-circle-outline
                                v-icon.green--text(v-else) mdi-checkbox-blank-circle
            v-divider
            v-card-actions
                v-btn(text @click="closeDialog") Close
                v-spacer
                v-btn(icon @click="showAdvancedSettings = !showAdvancedSettings")
                    v-icon mdi-settings
                v-badge(overlap :color="selected.length > 0 ? 'success' : 'error'")
                    template(v-slot:badge)
                        span {{ selected.length }}
                    v-btn Download
            template(v-if="showAdvancedSettings" )
                v-divider
                v-row(no-gutters)
                    v-col.pa-4
                        span.subheading Filter by File Type:
                        v-chip-group(v-model="selectedFileTypes" multiple active-class="success black--text" column)
                            v-chip(v-for="fileType in fileTypesOnly" :key="fileType" :value="fileType") {{ fileType }}
                        span.subheading Filter by Type:
                        v-chip-group(v-model="selectedTypes" multiple active-class="success black--text" column)
                            v-chip(v-for="type in typesOnly" :key="type" :value="type") {{ type }}

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
                movie: "mdi-file-video",
                quiz: "mdi-help-circle",
                //- TODO: just workaround
                forum: "mdi-forum"
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
                },
                {
                    name: "Lecture 01 Video",
                    type: "moviesdasd",
                    fileType: "movie"
                }
            ]
        }
    },
    data() {
        return {
            showDialog: false,
            selected: [],
            isSelectAllSelected: false,
            showAdvancedSettings: false,
            selectedFileTypes: [],
            selectedTypes: []
        };
    },
    computed: {
        filteredResources() {
            if (this.selectedFileTypes.length === 0 && this.selectedTypes.length === 0) {
                return this.resources;
            }

            return this.resources.filter(
                x =>
                    this.selectedFileTypes.includes(x.fileType) ||
                    this.selectedTypes.includes(x.type)
            );
        },
        fileTypesOnly() {
            var filetypes = [];
            for (var i = 0; i < this.resources.length; i++) {
                if (filetypes.includes(this.resources[i].fileType)) {
                    continue;
                }

                filetypes.push(this.resources[i].fileType);
            }
            return filetypes;
        },
        typesOnly() {
            var types = [];
            for (var i = 0; i < this.resources.length; i++) {
                if (types.includes(this.resources[i].type)) {
                    continue;
                }

                types.push(this.resources[i].type);
            }
            return types;
        }
    },
    methods: {
        closeDialog() {
            this.showDialog = false;
            this.selected = [];
            this.isSelectAllSelected = false;
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
