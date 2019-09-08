<template lang="pug">
    v-container.pa-0(fluid fill-height)
        v-row.ma-0(align="center" justify="center")
            v-col(cols=12 xs=8 sm=6 md=4)
                v-card
                    v-card-title
                        v-btn(v-show="step>=2" icon @click="decreaseStep" small)
                            v-icon mdi-arrow-left
                        span {{ currentTitle }}
                        v-spacer
                        v-chip(v-show="selectedItem") {{ selectedItem }}
                    v-card-text
                        v-window(v-model="step")
                            v-window-item(:value="1")
                                v-list
                                    v-list-item-group(v-model="selectedItem")
                                        v-list-item(v-for="category in categories" :key="category.name" :value="category.name" @click="increaseStep")
                                            v-list-item-content
                                                v-list-item-title {{category.name}}
                            v-window-item(:value="2")
                                v-expansion-panels(v-if="filteredItems[0]")
                                    v-expansion-panel(v-for="course in filteredItems[0].courses" :key="course.name")
                                        v-expansion-panel-header
                                            v-row(no-gutters align="center")
                                                v-icon.mr-2(small) mdi-lock-open
                                                span {{ course.name }}
                                        v-expansion-panel-content
                                            v-divider
                                            v-card-text {{ course.shortDescription }}
                                            v-divider
                                            v-card-actions
                                                v-spacer
                                                //- maybe put this button inside the header
                                                v-btn(
                                                    :to="{ name: 'MyCoursesEnrolled', params: {id: 1}}"
                                                ) Enroll
                                            
</template>

<script>
import json from "@/data/courses.json";

export default {
    name: "Courses",
    data() {
        return {
            step: 1,
            categories: json.data.AllCategories.category,
            selectedItem: ""
        };
    },
    computed: {
        currentTitle() {
            switch (this.step) {
                case 1:
                    return "Select Language";
                case 2:
                    return "Select Course";
                default:
                    return "Nothing Selected";
            }
        },
        filteredItems() {
            return this.categories.filter(categorie => categorie.name === this.selectedItem);
        }
    },
    methods: {
        increaseStep() {
            // this.items[0].text = itemName;
            this.step++;
        },
        decreaseStep() {
            this.selectedItem = null;
            this.step--;
        }
    }
};
</script>

<style lang="sass"></style>
