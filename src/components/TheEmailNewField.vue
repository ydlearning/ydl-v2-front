<template lang="pug">
v-text-field(
    :id="fieldId"
    v-validate="{ required: true, email: true, max: maxCounterEmail }" 
    :name="emailName"
    :data-vv-name="fieldName"
    :label="fieldLabel"
    :error-messages="errors.collect(fieldName)" 
    :clearable="fieldClearable"
    :ref="emailName"
    @input="$emit('input',$event)"
    @update:error="$emit('errorCheck',errors.has(fieldName))"
    :disabled="fieldDisable"
    :placeholder="fieldPlaceholder"
    :readonly="fieldReadonly"
    :append-icon=" copySymbol ? 'mdi-content-copy' : ''"
    @click:append="copyToClipboard()"
)
</template>

<script>
export default {
    name: "TheEmailNewField",
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
        fieldPlaceholder: {
            type: String,
            default: "",
            required: false
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
        copySymbol: {
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

            // navigator.clipboard
            //     .writeText(this.value)
            //     .then(() => {
            //         alert("Copy successful!");
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });
        }
    },
    data() {
        return {};
    }
};
</script>

<style lang="sass"></style>
