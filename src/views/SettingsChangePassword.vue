<template lang="pug">
    v-container(align-center justify-center)
        v-card(flat color="transparent")
        
            //- Success / Error snackbar
            TheSettingsSnackbar(
                :snackbarSuccess='snackbarSuccess'
                :snackbarError='snackbarError'
                @snackbarRemoveSuccess="snackbarSuccess=false"
                @snackbarRemoveError="snackbarError=false")

            //- Toolbar / App Title
            v-toolbar(color='primary' flat)
                v-toolbar-title {{ this.$route.name }}

            v-card-text
                //- Form
                v-form(ref="form" @submit.prevent="submit")

                    //- Old password field
                    ThePasswordField(
                        v-model="form.password"
                        :minCounterPassword="getMinCounterPassword" 
                        :maxCounterPassword="getMaxCounterPassword"
                        :regexExpression="getRegex"
                        fieldName="Old password"
                        fieldLabel="Old password"
                        @errorCheck="passwordHasErrors=$event"
                    )
                    br 
                    
                    //- New password field
                    ThePasswordSetField(
                        v-model="form.passwordSet"
                        :minCounterPassword="getMinCounterPassword" 
                        :maxCounterPassword="getMaxCounterPassword"
                        :regexExpression="getRegex"
                        :regexExpressionSpecialChars="getRegexSpecialCharacters"
                        fieldName="New password"
                        fieldLabel="New password"
                        @errorCheck="passwordSetHasErrors=$event"
                    )

                    //- Repeat password field
                    ThePasswordRepeatField(
                        v-model="form.passwordRepeat"
                        :minCounterPassword="getMinCounterPassword" 
                        :maxCounterPassword="getMaxCounterPassword"
                        :regexExpression="getRegex"
                        :confirmationField="form.passwordSet"
                        fieldName="Repeat password"
                        fieldLabel="Repeat password"
                        @errorCheck="passwordRepeatHasErrors=$event"
                    )

                    //- //- Terms checkbox
                    //- TheTermsCheckbox(
                    //-     v-model="form.terms" 
                    //- )

                    //- Card buttons
                    TheSettingsButtons(
                        @cancel="resetForm"
                        @apply="submit"
                        :formIsValid="formIsValid")
</template>

<script>
import ThePasswordField from "@/components/ThePasswordField";
import ThePasswordSetField from "@/components/ThePasswordSetField";
import ThePasswordRepeatField from "@/components/ThePasswordRepeatField";
import TheTermsCheckbox from "@/components/TheTermsCheckbox";
import TheSettingsButtons from "@/components/TheSettingsButtons";
import TheSettingsSnackbar from "@/components/TheSettingsSnackbar";
import { mapState } from "vuex";

export default {
    name: "SettingsChangePassword",
    data() {
        //- Form to store variables
        const defaultForm = Object.freeze({
            password: "",
            passwordSet: "",
            passwordRepeat: "",
            terms: false
        });
        return {
            form: Object.assign({}, defaultForm),
            defaultForm,
            snackbarSuccess: false,
            snackbarError: false,
            passwordHasErrors: false,
            passwordSetHasErrors: false,
            passwordRepeatHasErrors: false
        };
    },
    mounted() {},
    components: {
        ThePasswordField,
        ThePasswordSetField,
        ThePasswordRepeatField,
        TheTermsCheckbox,
        TheSettingsButtons,
        TheSettingsSnackbar
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),

        //- Returns true if form is completed and all fields are valid (have no error)
        formIsValid() {
            return (
                //- Checks if value ist set
                this.form.password !== "" &&
                this.form.passwordSet !== "" &&
                this.form.passwordRepeat !== "" &&
                this.form.terms &&
                //- Checks if all fields are free of errors
                !this.passwordHasErrors &&
                !this.passwordSetHasErrors &&
                !this.passwordRepeatHasErrors
            );
        },

        //- Getter for environment variables
        getMinCounterPassword() {
            return parseInt(process.env.VUE_APP_PASSWORD_MIN_COUNTER);
        },
        getMaxCounterPassword() {
            return parseInt(process.env.VUE_APP_PASSWORD_MAX_COUNTER);
        },
        getRegex() {
            return new RegExp(process.env.VUE_APP_PASSWORD_REGEX);
        },
        getRegexSpecialCharacters() {
            return new RegExp(process.env.VUE_APP_PASSWORD_REGEX);
        }
    },
    methods: {
        //- Resets the complete form
        resetForm() {
            this.snackbarError = true;
            this.form = Object.assign({}, this.defaultForm);
            this.$refs.form.reset();
        },
        //- Submit form fields
        submit() {
            this.snackbarSuccess = true;
            // this.resetForm(); // resets form after submit
        }
    }
};
</script>

<style lang="sass"></style>
