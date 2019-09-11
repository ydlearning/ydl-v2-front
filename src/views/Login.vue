<template lang="pug">
    v-container.fill-height(fluid)
        v-row(align='center' justify='center')
            v-col(cols='12' sm='8' md='4')
                v-card.elevation-12

                    //- Success / Error snackbar
                    TheLoginSnackbar(
                        :snackbarSuccess='snackbarSuccess'
                        successText="Login"
                        @snackbarRemoveSuccess="snackbarSuccess=false"
                    )

                    //- Toolbar / App Title
                    v-toolbar(color='primary' flat)
                        v-toolbar-title {{ this.$route.name }}

                    v-card-text
                        //- Form
                        v-form(ref="form" @submit.prevent="submit")

                            //- E-mail field
                            TheEmailField(
                                v-model="form.email"
                                :maxCounterEmail="getMaxCounterEmail"
                                fieldName="E-mail"
                                fieldLabel="E-mail"
                                @errorCheck="emailHasErrors=$event"						
                            )
                            
                            //- Password field
                            ThePasswordField(
                                v-model="form.password"
                                :minCounterPassword="getMinCounterPassword" 
                                :maxCounterPassword="getMaxCounterPassword"
                                :regexExpression= "getRegex"
                                fieldName="Password"
                                fieldLabel="Password"
                                @errorCheck="passwordHasErrors=$event"
                            )

                            //- TODO: Add site for Forgot username
                            //- Forgot username Button
                            //- v-btn.mb-1.ml-4(
                                outlined
                                rounded
                                color="primary"
                                x-small
                                to="/forgot_username") 
                                v-icon(left) mdi-account-search-outline
                                | Forgot username?
                            //- br

                            //- TODO: Add site for Forgot password
                            //- Forgot username password
                            //- v-btn.ml-4(
                                outlined
                                rounded
                                color="primary"
                                x-small
                                to="/reset_password")
                                v-icon(left) mdi-key-variant
                                | Forgot password?
                            //- br 

                            //- Forgot username button
                            ForgotButton.mb-1.ml-8(
                                goToLink="/forgot_username"
                                icon="mdi-account-search-outline"
                                forgotText="username"
                            )
                            br
                            //- Forgot password button
                            ForgotButton.ml-8(
                                goToLink="/reset_password"
                                icon="mdi-key-variant"
                                forgotText="password"
                            )

                    //- Card buttons
                    TheLoginButtons(
                        @goto="javascript;"
                        @action="submit"
                        :formIsValid="formIsValid"
                        goTo="/signup"
                        goToText="sign up"
                        actionText="login")
</template>

<script>
import TheLoginSnackbar from "@/components/TheLoginSnackbar";
import TheEmailField from "@/components/TheEmailField";
import ThePasswordField from "@/components/ThePasswordField";
import TheLoginButtons from "@/components/TheLoginButtons";
import ForgotButton from "@/components/ForgotButton";
// import Footer from "@/components/Footer";
import { mapState } from "vuex";
export default {
    name: "Login",
    data() {
        //- Form to store variables
        const defaultForm = Object.freeze({
            email: "",
            password: ""
        });
        return {
            form: Object.assign({}, defaultForm),
            defaultForm,
            emailHasErrors: false,
            passwordHasErrors: false,
            snackbarSuccess: false
        };
    },
    computed: {
        ...mapState(["isLoggedIn"]),
        //- Returns true if form is completed and all fields are valid (have no error)
        formIsValid() {
            return (
                //- Check if value ist set
                this.form.email !== "" &&
                this.form.password !== "" &&
                //- Check if all fields havn't errors
                !this.emailHasErrors &&
                !this.passwordHasErrors
            );
        },
        //- Getter for environment variables
        getMinCounterPassword() {
            return parseInt(process.env.VUE_APP_PASSWORD_MIN_COUNTER);
        },
        getMaxCounterPassword() {
            return parseInt(process.env.VUE_APP_PASSWORD_MAX_COUNTER);
        },
        getMaxCounterEmail() {
            return parseInt(process.env.VUE_APP_EMAIL_MAX_COUNTER);
        },
        getRegex() {
            return new RegExp(process.env.VUE_APP_PASSWORD_REGEX);
        }
    },
    methods: {
        login() {
            this.$store.dispatch("login");
        },
        //- Resets the complete form
        resetForm() {
            this.form = Object.assign({}, this.defaultForm);
            this.$refs.form.reset();
        },
        //- Submit form fields
        submit() {
            this.snackbarSuccess = true;
            this.login();
            // this.resetForm(); // resets form after submit
        }
    },
    components: {
        TheLoginSnackbar,
        TheEmailField,
        ThePasswordField,
        TheLoginButtons,
        ForgotButton
        // Footer
    }
};
</script>

<style lang="sass">
html
    // remove scroll bar
    // overflow: hidden
</style>
