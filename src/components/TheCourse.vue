<template lang="pug">
    v-row(no-gutters)
        v-col
            v-card(max-width=1200 color="transparent" flat)
                v-toolbar
                    v-toolbar-title [18/19 W] Computergraphics
                v-card-text
                    v-card(flat)
                        v-card-text
                            v-toolbar(dense)
                                v-toolbar-title Announcements
                                v-spacer
                                v-dialog(max-width="512px")
                                    template(v-slot:activator="{ on }")
                                        v-btn(icon small v-on="on")
                                            v-icon mdi-download-multiple
                                    v-card
                                        v-card-title
                                            span Select Resources
                                            v-spacer
                                            v-card-actions
                                                v-btn download all
                                        v-divider
                                        v-list
                                            v-list-item-group(multiple)
                                                v-list-item
                                                    template(v-slot:default="{ active, toggle }")
                                                        v-list-item-icon
                                                            v-icon mdi-file-pdf
                                                        v-list-item-content
                                                            v-list-item-title Script
                                                        v-list-item-action
                                                            v-icon.grey--text(v-if="!active") mdi-checkbox-blank-circle-outline
                                                            v-icon.green--text(v-else) mdi-checkbox-blank-circle
                                        v-divider
                                        v-card-actions
                                            v-btn(text) Close
                                            v-spacer
                                            v-btn Download

                            v-card-text
                                //- template text which will be editable by the course admin
                                div.warning.black--text fetch this data from database later
                                h4#lecture- Lecture:
                                ul
                                    li
                                        | Thursday from 10:00 - 12:00 
                                        strong Room 453 Main
                                    li
                                        strong Start at 19.08.2019
                                h4#tutorials- Tutorials:
                                ul
                                    li
                                        | Monday from 17:00 - 18:00 
                                        strong Room 292
                                    li Friday from 20:00 - 12:00
                                //- template text end
                            v-divider
                            v-list(dense)
                                v-list-item-group
                                    v-list-item
                                        v-list-item-icon
                                            v-icon mdi-forum
                                        v-list-item-content
                                            v-list-item-title Announcements
                                    v-list-item
                                        v-list-item-icon
                                            v-icon mdi-forum
                                        v-list-item-content
                                            v-list-item-title Studentforum
                                    v-list-item
                                        v-list-item-icon
                                            v-icon mdi-file-pdf
                                        v-list-item-content
                                            v-list-item-title Script
                    v-card(flat)
                        v-card-text
                            v-toolbar(dense)
                                v-toolbar-title Week 19.08 - 25.08
                                v-spacer
                                v-dialog(max-width="512px")
                                    template(v-slot:activator="{ on }")
                                        v-btn(icon small v-on="on")
                                            v-icon mdi-download-multiple
                                    v-card
                                        v-card-title
                                            span Select Resources
                                            v-spacer
                                            v-card-actions
                                                v-btn download all
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
                                                v-list-item
                                                    template(v-slot:default="{ active, toggle }")
                                                        v-list-item-icon
                                                            v-icon mdi-file-pdf
                                                        v-list-item-content
                                                            v-list-item-title Helper
                                                        v-list-item-action
                                                            v-icon.grey--text(v-if="!active") mdi-checkbox-blank-circle-outline
                                                            v-icon.green--text(v-else) mdi-checkbox-blank-circle
                                                v-list-item
                                                    template(v-slot:default="{ active, toggle }")
                                                        v-list-item-icon
                                                            v-icon mdi-file-video
                                                        v-list-item-content
                                                            v-list-item-title Lecture 00 (Video)
                                                        v-list-item-action
                                                            v-icon.grey--text(v-if="!active") mdi-checkbox-blank-circle-outline
                                                            v-icon.green--text(v-else) mdi-checkbox-blank-circle
                                        v-divider
                                        v-card-actions
                                            v-btn(text) Close
                                            v-spacer
                                            v-btn Download
                            v-card-text
                                div empty
                            v-divider
                            v-list(dense)
                                v-list-item-group
                                    v-list-item
                                        v-list-item-icon
                                            v-icon mdi-file-pdf
                                        v-list-item-content
                                            v-list-item-title Lecture 00 (Introduction)
                                    v-list-item
                                        v-list-item-icon
                                            v-icon mdi-map-marker-question
                                        v-list-item-content
                                            v-list-item-title Quiz 01 (Raytrace)
                                    v-list-item
                                        v-list-item-icon
                                            v-icon mdi-file-pdf
                                        v-list-item-content
                                            v-list-item-title Helper
                                    v-list-item
                                        v-list-item-icon
                                            v-icon mdi-file-video
                                        v-list-item-content
                                            v-list-item-title Lecture 00 (Video)
                    v-card(flat)
                        v-card-text
                            v-toolbar(dense)
                                v-toolbar-title Week 19.08 - 25.08
                                v-spacer
                    
                            
</template>

<script>
export default {
    name: "TheCourse"
};
</script>
