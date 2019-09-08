<template lang="pug">
//- TheSettingsButtons component
v-card-actions

    //- Tooltip for left button
    v-tooltip(bottom color="red")
        template(v-slot:activator="{ on: tooltip }")
            //- Left button
            v-btn(
                color="primary"
                @click="$emit('cancel')"
                outlined
                v-on="{ ...tooltip }"
                ) Cancel
        span
            v-icon(size="15px") mdi-alert
            |  All Fields will be deleted!

    v-spacer

    //- Right button
    v-btn(
        color="primary"
        type="submit"
        @click="$emit('apply')"
        :disabled="!formIsValid"
    ) Apply changes
</template>

<script>
export default {
    name: "TheSettingsButtons",
    props: {
        value: {
            type: String,
            default: ""
        },
        formIsValid: {
            type: Boolean,
            default: false,
            required: false
        }
    }
};
</script>

<style lang="sass"></style>
