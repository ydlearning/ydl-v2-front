<template lang="pug">
v-select(
    :id="fieldId"
    v-validate="{ required: true}" 
    :items='fieldItems'
    :menu-props="{ top: true, offsetY: true }"
    :name="componentName"
    :data-vv-name="fieldName"
    :label="fieldLabel"
    :error-messages="errors.collect(fieldName)"
    :ref="componentName"
    prepend-icon="mdi-city-variant-outline"
    @input="$emit('input',$event)"
    @update:error="$emit('errorCheck',errors.has(fieldName))"
    :disabled="fieldDisable"
    :placeholder="fieldPlaceholder"
    :readonly="fieldReadonly"
    @click:append="copyToClipboard()"
)
</template>

<script>
export default {
    name: "TheRoleSelect",
    props: {
        value: {
            type: String,
            default: ""
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
        fieldItems: {
            type: Array,
            default: () => [],
            required: true
        },
        fieldPlaceholder: {
            type: String,
            default: "",
            required: false
        },
        componentName: {
            type: String,
            default: "role",
            required: false
        },
        fieldDisable: {
            type: Boolean,
            default: false,
            required: false
        },
        fieldReadonly: {
            type: Boolean,
            default: false,
            required: false
        },
        fieldId: {
            type: String,
            default: "",
            required: false
        }
    },
    methods: {
        copyToClipboard() {
            var textToCopy = document.getElementById(this.fieldId);
            textToCopy.select();
            try {
                document.execCommand("copy");
            } catch (err) {
                alert("Unable to copy");
            }

            /* unselect the range */
            window.getSelection().removeAllRanges();
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="sass"></style>
