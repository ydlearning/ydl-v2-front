<template lang="pug">
    v-container.fill-height(fluid)
        v-row(align='center' justify='center')
            v-col(cols='12' sm='8' md='4')
                v-card.elevation-12

                    //- Success / Error snackbar
                    TheLoginSnackbar(
                        :snackbarSuccess='snackbarSuccess'
                        successText="Send"
                        @snackbarRemoveSuccess="snackbarSuccess=false"
                    )

                    //- Toolbar / App Title
                    v-toolbar(color='primary' flat)
                        v-toolbar-title 
                            v-icon mdi-account-search-outline
                            |{{ this.$route.name }}

                    v-card-text

                        span Enter your e-mail address and we'll send you your username.
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

                    //- Card buttons
                    TheLoginButtons(
                        @goto="javascript;"
                        @action="submit"
                        :formIsValid="formIsValid"
                        goTo="/login"
                        goToText="login"
                        actionText="send")
</template>

<script>
import TheLoginSnackbar from "@/components/TheLoginSnackbar";
import TheEmailField from "@/components/TheEmailField";
import TheLoginButtons from "@/components/TheLoginButtons";
import { mapState } from "vuex";
export default {
    name: "ForgotUsername",
    data() {
        //- Form to store variables
        const defaultForm = Object.freeze({
            email: ""
        });
        return {
            form: Object.assign({}, defaultForm),
            defaultForm,
            emailHasErrors: false,
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
                //- Check if all fields havn't errors
                !this.emailHasErrors
            );
        },
        //- Getter for environment variables
        getMaxCounterEmail() {
            return parseInt(process.env.VUE_APP_EMAIL_MAX_COUNTER);
        }
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
    },
    components: {
        TheLoginSnackbar,
        TheEmailField,
        TheLoginButtons
    }
};
</script>

<style lang="sass"></style>
