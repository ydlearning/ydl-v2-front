<template lang="pug">
v-text-field(
    v-validate="{ required: true, confirmed: confirmationField }" 
    :name="emailName"
    :data-vv-name="fieldName"
    :label="fieldLabel"
    :error-messages="errors.collect(fieldName)" 
    :clearable="fieldClearable"
    :ref="emailName"
    @input="$emit('input',$event)"
    @update:error="$emit('errorCheck',errors.has(fieldName))"
)
</template>

<script>
export default {
    name: "TheEmailRepeatField",
    props: {
        value: {
            type: String,
            default: ""
        },
        maxCounterEmail: {
            type: Number,
            default: 0,
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
        emailName: {
            type: String,
            default: "email",
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
