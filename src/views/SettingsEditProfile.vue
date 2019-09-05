<template lang="pug">
    v-container(align-center justify-center)
        v-card(flat color="transparent")

            TheSettingsSnackbar(
                :snackbarSuccess='snackbarSuccess'
                :snackbarError='snackbarError'
                @snackbarRemoveSuccess="snackbarSuccess=false"
                @snackbarRemoveError="snackbarError=false")

            v-toolbar(color='primary' flat)
                v-toolbar-title {{ this.$route.name }}
            v-card-text
                
                v-text-field(
                    v-model='user.name'
                    readonly=false
                    disabled=true
                    label="Username")

                v-text-field(
                    v-model='user.role'
                    readonly=false
                    disabled=true
                    label="Role")

                v-form(ref="form" @submit.prevent="submit")
                    
                    TheFullNameField(
                        v-model="form.fullname"
                        :minCounter="0"
                        :maxCounter="50"
                        fieldName="Full name"
                        fieldLabel="Full name"
                        @errorCheck="fullNameHasErrors=$event")

                    TheSettingsButtons(
                        @cancel="resetForm"
                        @apply="submit"
                        :formIsValid="formIsValid")
</template>

<script>
import TheUsernameField from "@/components/TheUsernameField";
import TheFullNameField from "@/components/TheFullNameField";
import TheRoleSelect from "@/components/TheRoleSelect";
import TheSettingsButtons from "@/components/TheSettingsButtons";
import TheSettingsSnackbar from "@/components/TheSettingsSnackbar";
import { mapState } from "vuex";

export default {
    name: "SettingsEmailSettings",
    data() {
        const defaultForm = Object.freeze({
            fullname: "",
            role: ""
        });
        return {
            form: Object.assign({}, defaultForm),
            defaultItem: "Student",
            items: [{ text: "Student" }, { text: "Teacher" }],
            snackbarSuccess: false,
            snackbarError: false,
            defaultForm,
            fullNameHasErrors: false,
        };
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        //- returns true if the form and all fields are valid
        formIsValid() {
            return (
                //- check if value ist set
                this.form.fullname !== "" &&
                //- check if all fields havn't errors
                !this.fullNameHasErrors
            );
        }
    },
    components: {
        TheUsernameField,
        TheFullNameField,
        TheRoleSelect,
        TheSettingsButtons,
        TheSettingsSnackbar
    },
    methods: {
        //- resets the complete form
        resetForm() {
            this.snackbarError = true;
            this.form = Object.assign({}, this.defaultForm);
            this.$refs.form.reset();
        },

        //- submit form fields
        submit() {
            this.snackbarSuccess = true;
            // this.resetForm(); // resets form after submit
            // this.$refs.form.reset();
        }
    }
};
</script>

<style lang="sass"></style>
