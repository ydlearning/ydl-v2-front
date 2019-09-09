<template lang="pug">
    v-dialog(v-model="showDialog" @click:outside="reset" :max-width="550" max-height="430" min-height="400")
        template(v-slot:activator="{ on }")
            v-btn(icon small v-on="on")
                v-icon mdi-pencil
        v-card(width="100%")
            v-card-title
                v-list-item
                    v-list-item-icon
                        v-icon mdi-pencil
                    v-list-item-content Edit: {{ resource.name }}
            v-card-text
                v-row
                    v-col(cols=12)
                        v-form(ref="form" @submit.prevent="submit")
                            v-text-field(label="Name" :value="resource.name")
                            v-file-input(v-model="file")
                    v-col(cols=12)
                        div First Upload: {{ new Date(resource.uploaded).format("YYYY/MM/DD hh:mm:ss a") }}
                        div Last Edit: {{ new Date(resource.last_edit).format("YYYY/MM/DD hh:mm:ss a") }}

            v-divider
            v-card-actions
                v-badge(overlap :value="showTimer")
                    template(v-slot:badge)
                        span {{ timerCount }}
                    v-btn(@click="clickDelete" :class=" shouldAskDelete ? 'error' : 'warning black--text'")
                        v-window(v-model="shouldAskDelete")
                            v-window-item(:value="true")
                                span Delete
                            v-window-item(:value="false")
                                span Confirm
                v-btn.ml-4 Reset
                v-spacer
                v-btn Save
</template>

<script>
export default {
    name: "ResourceEditDialog",
    data() {
        return {
            shouldAskDelete: true,
            showTimer: false,
            timerCount: 5,
            timer: null,
            showDialog: false,
            //- workaround to simulate an already existing file
            file: new File([""], this.resource.name)
        };
    },
    methods: {
        startAskDeleteTimer() {
            this.showTimer = true;
            this.timer = setInterval(() => {
                this.timerCount--;
                if (this.timerCount <= 0) {
                    clearInterval(this.timer);
                    this.timerCount = 5;
                    this.shouldAskDelete = true;
                    this.showTimer = false;
                }
            }, 1000);
        },
        clickDelete() {
            if (this.shouldAskDelete) {
                this.shouldAskDelete = false;
                this.startAskDeleteTimer();
            } else {
                clearInterval(this.timer);
                this.showDialog = false;
            }
        },
        reset() {
            clearInterval(this.timer);
            this.timerCount = 5;
            this.shouldAskDelete = true;
            this.showTimer = false;
        }
    },
    props: {
        resource: {
            type: Object,
            default: () => ({
                name: "CG Lecture 00: Begin",
                category: "lecture",
                type: "pdf",
                uploaded: "2019-08-27T20:34:54+0000",
                last_edit: "2019-08-29T22:34:54+0000",
                download: "#"
            })
        }
    }
};
</script>
