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

                            //- Username
                            //- @v-validate: required | min:3 | max:50 | alpha_dash
                            //- @required: true
                            //- v-text-field(
                                v-model='username'
                                :counter='40'
                                v-validate="'required|min:3|max:40|alpha_dash'" 
                                :error-messages="errors.collect('username')" 
                                label='Username' 
                                data-vv-name='username' 
                                required
                                hint="Username cannot be changed later! Choose wisely!"
                                persistent-hint=false)

                            //- Username field
                            TheUsernameField(
                                v-model="form.username"
                                :minCounter="getMinCounterUsername"
                                :maxCounter="getMaxCounterUsername"
                                fieldName="Username"
                                fieldLabel="Username"
                                @errorCheck="usernameHasErrors=$event")

                            //- Full name:
                            //- @v-validate: required | max:50 | alpha_spaces
                            //- @required: true
                            //- v-text-field(
                                v-model='name' 
                                v-validate="'required|max:50|alpha_spaces'" 
                                :error-messages="errors.collect('name')" 
                                label='Full Name' 
                                data-vv-name='name' 
                                required)

                            //- Full name field
                            TheFullNameField(
                                v-model="form.fullname"
                                :minCounter="getMinCounterFullName"
                                :maxCounter="getMaxCounterFullName"
                                fieldName="Full name"
                                fieldLabel="Full name"
                                @errorCheck="fullNameHasErrors=$event")

                            //- E-mail:
                            //- @v-validate: required | email | max:100
                            //- @required: true
                            //- v-text-field(
                                v-model='email' 
                                v-validate="'required|email|max:100'" 
                                :error-messages="errors.collect('email')" 
                                label='E-mail' 
                                data-vv-name='email' 
                                required)

                            //- E-mail field
                            TheEmailField(
                                v-model="form.email"
                                :maxCounterEmail="getMaxCounterEmail"
                                fieldName="E-mail"
                                fieldLabel="E-mail"
                                @errorCheck="emailHasErrors=$event"						
                            )

                            //- Password:
                            //- @v-validate: required | min:8 | max:128 
                            //- @required: true
                            //- v-text-field(
                                v-on:input="check_password"
                                v-model='password'
                                v-validate="{ required: true, min: 8, max: 128, regex: /^([a-zA-Z0-9$&+:;=?@#'<>.^*()%!-{}]+)$/ }"
                                :counter="maxCounter" 
                                name="password" 
                                type="password" 
                                :class="{'is-danger': errors.has('password')}" 
                                placeholder="Password" ref="password" 
                                :error-messages="errors.collect('password')"
                                clearable
                                persistent-hint: false)
                            //- v-progress-linear(
                                v-model='progress'
                                :value="progress" 
                                :color="color" 
                                height="7"
                                active)
                            //- v-alert.ma-1(dense type="info" text) Password has to be at least:
                                //- iterate over each condition for rendering as alert
                                - var items = ["8 characters long", "at least 1 character", "at least 1 number", "at least 1 special character, allowed: $&+:;=?@#'<>.^*()%!-{}"]
                                each item, index in items
                                    //- "+index+" escapes the javascript input for the :type variable so the pug variable can be inserted
                                    v-alert.caption.ma-1.pa-1(:type="corrections["+index+"]" text)= item    

                            //- New password field
                            ThePasswordSetField.mt-4(
                                v-model="form.passwordSet"
                                :minCounterPassword="getMinCounterPassword" 
                                :maxCounterPassword="getMaxCounterPassword"
                                :regexExpression="regexExpression"
                                :regexExpressionSpecialChars="regexExpressionSpecialChars"
                                fieldName="New password"
                                fieldLabel="New password"
                                @errorCheck="passwordSetHasErrors=$event"
                            )

                            //- Passwored repeat:
                            //- v-text-field(
                                v-validate="'required|confirmed:password'" 
                                name="password_confirmation" 
                                type="password" 
                                :class="{'is-danger': errors.has('password_confirmation')}" 
                                :error-messages="errors.collect('password_confirmation')"
                                placeholder="Confirm Password" 
                                data-vv-as="password"
                                clearable)

                            //- Repeat password field
                            ThePasswordRepeatField(
                                v-model="form.passwordRepeat"
                                :minCounterPassword="getMinCounterPassword" 
                                :maxCounterPassword="getMaxCounterPassword"
                                :regexExpression="regexExpression"
                                :confirmationField="form.passwordSet"
                                fieldName="Repeat password"
                                fieldLabel="Repeat password"
                                @errorCheck="passwordRepeatHasErrors=$event"
                            )
                            
                            //- v-select(
                                v-model='defaultItem' 
                                v-validate="'required'" 
                                :items='items' 
                                :error-messages="errors.collect ('select')" 
                                label='Role' 
                                data-vv-name='select' 
                                required
                                :menu-props="{ top: true, offsetY: true }")

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
                                v-model="form.terms"
                            )

                            //- Debug: Get this working with form.role
                            span terms: {{ this.form.terms !== "" }}

                    //- v-card-actions
                        v-btn(color='primary' to="/Login" outlined) Go to login
                        v-spacer
                        v-btn(color='primary' @click="") Sign up
                        br
                        v-btn.mr-4(@click='submit') submit
                        v-btn(@click='clear') clear

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
            regexExpression: /^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$/,
            regexExpressionSpecialChars: /[$&+,:;=?@#'<>.^*()%!-]/,
            usernameHasErrors: false,
            fullNameHasErrors: false,
            emailHasErrors: false,
            passwordSetHasErrors: false,
            passwordRepeatHasErrors: false,
            roleHasErrors: false
            // password: "",
            // custom: true,
            // corrections: ["error", "error", "error", "error"],
            // email: "",
            // name: "",
            // username: "",
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
        }
        // progress() {
        //     return Math.min(100, this.password.length * 6);
        // },
        // color() {
        //     return ["error", "warning", "success"][Math.floor(this.progress / 40)];
        // }
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
        // check_password: function(value) {
        //     //- check password length
        //     if (value.length >= 8) {
        //         this.corrections[0] = "success";
        //     } else {
        //         this.corrections[0] = "error";
        //     }
        //     //- check for character
        //     if (/[aA-zZ]/.test(value)) {
        //         this.corrections[1] = "success";
        //     } else {
        //         this.corrections[1] = "error";
        //     }
        //     //- check for number
        //     if (/\d/.test(value)) {
        //         this.corrections[2] = "success";
        //     } else {
        //         this.corrections[2] = "error";
        //     }
        //     //- check for special character
        //     if (/[$&+:;=?@#'<>.^*()%!-{}]/.test(value)) {
        //         this.corrections[3] = "success";
        //     } else {
        //         this.corrections[3] = "error";
        //     }
        // },
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
