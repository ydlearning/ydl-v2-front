<template lang="pug">
div
    //- Snackbar - Info Apply changes successful!
    v-snackbar(
        :value="snackbarSuccess"  
        top 
        right 
        color="success"
        @input="$emit('snackbarRemoveSuccess')")
            span Changes apply successfully!
            v-icon(dark) mdi-check-circle
    //- Snackbar - Info Cancel, form cleared!
    v-snackbar(
        :value="snackbarError"  
        top 
        right 
        color="error"
        @input="$emit('snackbarRemoveError')")
            span Cancel, form cleared!
            v-icon(dark) mdi-alert
</template>

<script>
export default {
    name: "TheSettingsSnackbar",
    computed: {},
    props: {
        value: {
            type: String,
            default: ""
        },
        snackbarSuccess: {
            type: Boolean,
            default: false,
            required: true
        },
        snackbarError: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="sass"></style>
