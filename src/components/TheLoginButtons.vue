<template lang="pug">
v-card-actions
    //- v-tooltip(bottom color="red")
        //- template(v-slot:activator="{ on: tooltip }")
        //- v-on="{ ...tooltip }"
    v-btn(
        color="primary"
        @click="$emit('goto')"
        outlined
        :to="goTo"
        ) Go to {{ goToText }}
    //- span
        v-icon(size="15px") mdi-alert
        |  Go to 
    v-spacer
    v-btn(
        color="primary"
        type="submit"
        @click="$emit('action')"
        :disabled="!formIsValid"
    ) {{ actionText }}
</template>

<script>
export default {
    name: "TheLoginButtons",
    props: {
        value: {
            type: String,
            default: ""
        },
        goToText: {
            type: String,
            default: "",
            required: true
        },
        actionText: {
            type: String,
            default: "",
            required: true
        },
        goTo: {
            type: String,
            default: "",
            required: true
        },
        formIsValid: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="sass"></style>
