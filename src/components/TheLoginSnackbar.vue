<template lang="pug">
div
    //- Snackbar - Info - successful!
    v-snackbar(
        :value="snackbarSuccess"  
        top 
        right 
        color="success"
        @input="$emit('snackbarRemoveSuccess')")
            span {{ successText }} successfully!
            v-icon(dark) mdi-check-circle
    //- Snackbar - Info - Error
    v-snackbar(
        :value="snackbarError"  
        top 
        right 
        color="error"
        @input="$emit('snackbarRemoveError')")
            span {{ errorText }}
            v-icon(dark) mdi-alert
</template>

<script>
export default {
    name: "TheLoginSnackbar",
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
        successText: {
            type: String,
            default: "",
            required: true
        },
        snackbarError: {
            type: Boolean,
            default: false,
            required: false
        },
        errorText: {
            type: String,
            default: "",
            required: false
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="sass"></style>
