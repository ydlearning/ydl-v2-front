<template lang="pug">
    v-container.pa-0(fluid)
        v-row.ma-0
            v-col
                v-toolbar
                    v-text-field(
                        prepend-icon="mdi-magnify"
                        hide-details
                        clearable
                        label="Search"
                    )
        v-row.ma-0
            v-col
                v-card(width=512)
                    v-card-title
                        span {{ currentTitle }}
                        v-spacer
                        v-chip(v-show="selectedItem") {{ selectedItem }}
                    v-card-text
                        v-window(v-model="step")
                            v-window-item(:value="1")
                                v-list
                                    v-list-item-group(v-model="selectedItem")
                                        v-list-item(v-for="category in categories" :key="category.name" :value="category.name" @click="selectItem(category.name)")
                                            v-list-item-content
                                                v-list-item-title {{category.name}}
                            v-window-item(:value="2")
                                v-list
                                    v-list-item-group(v-if="filteredItems[0]")
                                        v-list-item(v-for="course in filteredItems[0].courses" :key="course.name")
                                            v-list-item-content
                                                v-list-item-title {{course.name}}                                          
</template>

<script>
import json from "@/data/courses.json";

export default {
    name: "Courses",
    data() {
        return {
            step: 1,
            categories: json.data.AllCategories.category,
            selectedItem: "",
            items: [
                {
                    text: ""
                },
                {
                    text: "ooo"
                }
            ]
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
                    return "Accccc";
            }
        },
        filteredItems() {
            return this.categories.filter(categorie => categorie.name === this.selectedItem);
        }
    },
    methods: {
        selectItem(itemName) {
            this.items[0].text = itemName;
            this.step++;
        }
    }
};
</script>

<style lang="sass"></style>
