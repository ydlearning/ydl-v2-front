<template lang="pug">
v-btn(
    outlined
    rounded
    color="primary"
    small
    :to="goToLink"
) 
    v-icon(left) {{ icon }}
    | Forgot {{ forgotText }}?
</template>

<script>
export default {
    name: "ForgotButton",
    props: {
        value: {
            type: String,
            default: ""
        },
        goToLink: {
            type: String,
            default: "",
            required: true
        },
        icon: {
            type: String,
            default: "",
            required: true
        },
        forgotText: {
            type: String,
            default: "",
            required: true
        }
    }
};
</script>

<style lang="sass"></style>
