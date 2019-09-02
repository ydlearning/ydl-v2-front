<template lang="pug">
    v-card
        v-img(
            :src="require('../data/dashboard/images/' + Math.floor((Math.random() * 7) + 0) + '.jpg')"
            height=130
        )
            v-card-title.align-start.fill-height.justify-end
                v-btn(icon)
                    v-icon mdi-message
        v-card-actions {{ header }}
            v-spacer
            v-btn(icon small)
                v-icon(size=16) mdi-star
</template>

<script>
export default {
    name: "CourseItem",
    props: {
        header: {
            type: String,
            default: "header"
        }
    }
};
</script>

<style lang="sass"></style>
