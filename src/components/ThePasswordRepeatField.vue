<template lang="pug">
//- Password:
v-text-field(
    v-model='passwordRepeat'
    v-validate="{ required: true, confirmed: confirmationField }"
    :counter="maxCounterPassword"
    name="password"
    :data-vv-as="fieldName"
    :label="fieldLabel"
    :class="{'is-danger': errors.has('password')}" 
    :error-messages="errors.collect('password')"
    :clearable="fieldClearable"
    :append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showPassword = !showPassword"
    :type="showPassword ? 'text' : 'password'"
    @input="$emit('input',$event)"
)
</template>

<script>
export default {
    name: "ThePasswordRepeatField",
    props: {
        value: {
            type: String,
            default: ""
        },
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
        fieldName: {
            type: String,
            default: "",
            required: true
        },
        fieldLabel: {
            type: String,
            default: "",
            required: true
        },
        confirmationField: {
            type: String,
            default: "",
            required: true
        },
        showPassword: {
            type: Boolean,
            default: false,
            required: false
        },
        fieldClearable: {
            type: Boolean,
            default: true,
            required: false
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="sass"></style>
