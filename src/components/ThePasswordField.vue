<template lang="pug">
//- Password:
//- @v-validate: required
//- @required: true
v-text-field(
    v-validate="{ required: true, min: minCounterPassword, max: maxCounterPassword, regex: regexExpression }" 
    :counter="maxCounterPassword"
    :name="passwordName" 
    :data-vv-as="fieldName"
    :label="fieldLabel" 
    :class="{'is-danger': errors.has(passwordName)}" 
    :ref="passwordName" 
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
    name: "ThePasswordField",
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
        passwordName: {
            type: String,
            default: "password",
            required: false
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
