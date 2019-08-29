<template lang="pug">
    v-row(no-gutters)
        v-col
            v-card(max-width=1200 color="transparent" flat)
                v-toolbar
                    v-toolbar-title [18/19 W] Computergraphics
                    v-spacer
                    ResourceDownloadDialog
                v-card-text
                    v-card(flat)
                        v-card-text
                            v-toolbar(dense)
                                v-toolbar-title Announcements
                                v-spacer
                                ResourceDownloadDialog
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
                                ResourceDownloadDialog
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
                                ResourceDownloadDialog
                    
                            
</template>

<script>
import ResourceDownloadDialog from "@/components/ResourceDownloadDialog";

export default {
    name: "TheCourse",
    components: {
        ResourceDownloadDialog
    }
};
</script>
