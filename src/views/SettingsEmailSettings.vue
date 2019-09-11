<template lang="pug">
    v-container(align-center justify-center)
        v-card(flat color="transparent")

            TheSettingsSnackbar(
                :snackbarSuccess='snackbarSuccess'
                :snackbarError='snackbarError'
                @snackbarRemoveSuccess="snackbarSuccess=false"
                @snackbarRemoveError="snackbarError=false")

            //- Toolbar / App Title
            v-toolbar(color='primary' flat)
                v-toolbar-title {{ this.$route.name }}

            v-card-text

                //- Current E-mail field
                v-text-field(
                    v-model='user.email.address'
                    readonly=false
                    disabled=true
                    label="Current E-mail"
                    prepend-icon="mdi-email-outline")

                //- Form
                v-form(ref="form" @submit.prevent="submit")
                        
                    //- New E-mail
                    TheEmailField(
                        v-model="form.emailNew"
                        :maxCounterEmail="getMaxCounterEmail"
                        fieldName="New E-mail"
                        fieldLabel="New E-mail"
                        @errorCheck="emailNewHasErrors=$event"
                        :copySymbol="false"
                    )

                    //- Repeat E-mail
                    TheEmailRepeatField(
                        v-model="form.emailRepeat"
                        :maxCounterEmail="getMaxCounterEmail"
                        fieldName="Repeat E-mail"
                        fieldLabel="Repeat E-mail"
                        :confirmationField="form.emailNew"
                        @errorCheck="emailRepeatHasErrors=$event"
                    )

                    TheSettingsButtons(
                        @cancel="resetForm"
                        @apply="submit"
                        :formIsValid="formIsValid")
</template>

<script>
import { mapState } from "vuex";
import TheEmailField from "@/components/TheEmailField";
import TheEmailRepeatField from "@/components/TheEmailRepeatField";
import TheSettingsButtons from "@/components/TheSettingsButtons";
import TheSettingsSnackbar from "@/components/TheSettingsSnackbar";

export default {
    name: "SettingsEmailSettings",
    data() {
        //- Form to store variables
        const defaultForm = Object.freeze({
            emailNew: "",
            emailRepeat: ""
        });
        return {
            form: Object.assign({}, defaultForm),
            defaultForm,
            newEmail: "",
            maxCounterEmail: 100,
            snackbarSuccess: false,
            snackbarError: false,
            emailNewHasErrors: false,
            emailRepeatHasErrors: false
        };
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        formIsValid() {
            return (
                //- check if value ist set
                this.form.emailNew !== "" &&
                this.form.emailRepeat !== "" &&
                //- check if all fields havn't errors
                !this.emailNewHasErrors &&
                !this.emailRepeatHasErrors
            );
        },
        //- Getter for environment variables
        getMaxCounterEmail() {
            return parseInt(process.env.VUE_APP_EMAIL_MAX_COUNTER);
        }
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
        }
    },
    components: {
        TheEmailField,
        TheEmailRepeatField,
        TheSettingsButtons,
        TheSettingsSnackbar
    }
};
</script>

<style lang="sass"></style>
