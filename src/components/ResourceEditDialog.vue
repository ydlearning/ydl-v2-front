<template lang="pug">
    v-dialog(v-model="showDialog" @click:outside="reset()" :max-width="550" max-height="430" min-height="400")
        template(v-slot:activator="{ on }")
            v-btn(icon small v-on="on")
                v-icon mdi-pencil
        v-card
            v-card-title
                v-list-item
                    v-list-item-icon
                        v-icon mdi-pencil
                    v-list-item-content {{ resource.name }}
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
            showDialog: false
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
                uploaded: "2019-08-29T22:34:54+0000",
                last_edit: "2019-08-29T22:34:54+0000",
                download: "#"
            })
        }
    }
};
</script>
