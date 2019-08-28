<template lang="pug">
//- Password:
v-text-field(
    v-validate="{ required: true, confirmed: confirmationField }"
    :counter="maxCounterPassword"
    :name="passwordName"
    :data-vv-as="fieldName"
    :label="fieldLabel"
    :class="{'is-danger': errors.has(passwordName)}" 
    :error-messages="errors.collect(passwordName)"
    :clearable="fieldClearable"
    :append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="showPassword = !showPassword"
    :type="showPassword ? 'text' : passwordName"
    @input="$emit('input',$event)"
    @update:error="$emit('errorCheck',errors.has(passwordName))"
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
        },
        passwordName: {
            type: String,
            default: "password",
            required: false
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="sass"></style>
