<template lang="pug">
    v-container.fill-height(fluid)
        v-row(align='center' justify='center')
            v-col(cols='12' sm='8' md='4')
                v-card.elevation-12

                    //- Success / Error snackbar
                    TheLoginSnackbar(
                        :snackbarSuccess='snackbarSuccess'
                        successText="Sign up"
                        @snackbarRemoveSuccess="snackbarSuccess=false"
                    )

                    //- Toolbar / App Title
                    v-toolbar(color='primary' flat)
                        v-toolbar-title {{ this.$route.name }}

                    v-card-text
                        //- Form
                        v-form(ref="form" @submit.prevent="submit")

                            //- Username field
                            TheUsernameField(
                                v-model="form.username"
                                :minCounter="getMinCounterUsername"
                                :maxCounter="getMaxCounterUsername"
                                fieldName="Username"
                                fieldLabel="Username"
                                @errorCheck="usernameHasErrors=$event")

                            //- Full name field
                            TheFullNameField(
                                v-model="form.fullname"
                                :minCounter="getMinCounterFullName"
                                :maxCounter="getMaxCounterFullName"
                                fieldName="Full name"
                                fieldLabel="Full name"
                                @errorCheck="fullNameHasErrors=$event")

                            //- E-mail field
                            TheEmailField(
                                v-model="form.email"
                                :maxCounterEmail="getMaxCounterEmail"
                                fieldName="E-mail"
                                fieldLabel="E-mail"
                                @errorCheck="emailHasErrors=$event"						
                            )

                            //- New password field
                            ThePasswordSetField.mt-4(
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

                            //- Role select field
                            TheRoleSelect(
                                v-model="form.role"
                                fieldName="Role"
                                fieldLabel="Role"
                                :fieldItems="items"
                                @errorCheck="roleHasErrors=$event"
                            )
                            //- Terms checkbox
                            //- TODO: Get this working (it's true all the time)
                            TheTermsCheckbox(
                                v-model="form.terms")
                            //- TheTermsCheckbox(
                                v-model="testProp")

                            //- Debug: Get this working with form.role
                            //- span terms: {{ this.form.terms }}
                            //- br
                            //- span testProp: {{ this.testProp }}

                    //- Card buttons
                    TheLoginButtons(
                        @goto="javascript;"
                        @action="submit"
                        :formIsValid="formIsValid"
                        goTo="/login"
                        goToText="login"
                        actionText="sign up")
</template>

<script>
import TheLoginSnackbar from "@/components/TheLoginSnackbar";
import TheLoginButtons from "@/components/TheLoginButtons";
import TheUsernameField from "@/components/TheUsernameField";
import TheFullNameField from "@/components/TheFullNameField";
import ThePasswordSetField from "@/components/ThePasswordSetField";
import ThePasswordRepeatField from "@/components/ThePasswordRepeatField";
import TheTermsCheckbox from "@/components/TheTermsCheckbox";
import TheEmailField from "@/components/TheEmailField";
import TheRoleSelect from "@/components/TheRoleSelect";

import { mapState } from "vuex";
export default {
    name: "Signup",
    data() {
        //- Form to store variables
        const defaultForm = Object.freeze({
            username: "",
            fullname: "",
            email: "",
            passwordSet: "",
            passwordRepeat: "",
            role: "",
            terms: false
        });
        return {
            form: Object.assign({}, defaultForm),
            defaultForm,
            snackbarSuccess: false,
            items: [{ text: "Student" }, { text: "Teacher" }],
            defaultItem: "",
            usernameHasErrors: false,
            fullNameHasErrors: false,
            emailHasErrors: false,
            passwordSetHasErrors: false,
            passwordRepeatHasErrors: false,
            roleHasErrors: false,
            testProp: false
        };
    },
    mounted() {
        this.defaultItem = this.items[0]; // TODO: Get this working with form.role
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        //- Returns true if form is completed and all fields are valid (have no error)
        formIsValid() {
            return (
                //- Check if value ist set
                this.form.username !== "" &&
                this.form.fullname !== "" &&
                this.form.email !== "" &&
                this.form.passwordSet !== "" &&
                this.form.passwordRepeat !== "" &&
                this.form.role !== "" &&
                // this.form.terms && // TODO: Get this working with form.role
                //- Check if all fields havn't errors
                !this.usernameHasErrors &&
                !this.fullNameHasErrors &&
                !this.emailHasErrors &&
                !this.passwordSetHasErrors &&
                !this.passwordRepeatHasErrors &&
                !this.roleHasErrors
            );
        },
        //- Getter for environment variables
        getMinCounterFullName() {
            return parseInt(process.env.VUE_APP_FULLNAME_MIN_COUNTER);
        },
        getMaxCounterFullName() {
            return parseInt(process.env.VUE_APP_FULLNAME_MAX_COUNTER);
        },
        getMinCounterUsername() {
            return parseInt(process.env.VUE_APP_USERNAME_MIN_COUNTER);
        },
        getMaxCounterUsername() {
            return parseInt(process.env.VUE_APP_USERNAME_MAX_COUNTER);
        },
        getMaxCounterEmail() {
            return parseInt(process.env.VUE_APP_EMAIL_MAX_COUNTER);
        },
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
    components: {
        TheLoginSnackbar,
        TheLoginButtons,
        TheUsernameField,
        TheFullNameField,
        ThePasswordSetField,
        ThePasswordRepeatField,
        TheEmailField,
        TheRoleSelect,
        TheTermsCheckbox
    },
    methods: {
        //- Resets the complete form
        resetForm() {
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
