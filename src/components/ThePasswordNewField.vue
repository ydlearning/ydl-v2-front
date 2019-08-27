<template lang="pug">
//- Password:
//- @v-validate: required | min:8 | max:128 
//- @required: true
v-text-field(
    v-model='password'
    v-validate="{ required: true, min: minCounterPassword, max: maxCounterPassword, regex: regexExpression }" 
    :counter="maxCounterPassword"
    name="password" 
    :data-vv-as="passwordFieldName"
    :placeholder="passwordFieldPlaceholder" 
    :class="{'is-danger': errors.has('password')}" 
    ref="password" 
    :error-messages="errors.collect('password')"
    clearable=true
    :append-icon=" showEyePassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showEyePassword = !showEyePassword"
    :type="showEyePassword ? 'text' : 'password'")
</template>

<script>
export default {
    name: "ThePasswordField",
    props: {
        minCounterPassword: {
            type: Number,
            default: 0,
            required: true
        },
        maxCounterPassword: {
            type: Number,
            default: 0,
            required: true
        },
        regexExpression: {
            type: RegExp,
            default: "",
            required: true
        },
        passwordFieldName: {
            type: String,
            default: "",
            required: true
        },
        passwordFieldPlaceholder: {
            type: String,
            default: "",
            required: true
        },
        showEyePassword: {
            type: Boolean,
            default: false,
            required: false
        },
        passwordFieldClearable: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    data() {
        return {
            // regexExpression: /^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$/
            password: ""
        };
    }
};
</script>

<style lang="sass"></style>
