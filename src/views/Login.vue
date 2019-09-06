<template lang="pug">
    v-container.fill-height(fluid)
        v-row(align='center' justify='center')
            v-col(cols='12' sm='8' md='4')
                v-card.elevation-12

                    //- Toolbar / App Title
                    v-toolbar(color='primary' flat)
                        v-toolbar-title {{ this.$route.name }}

                    v-card-text

                        //- Form
                        v-form(ref="form" @submit.prevent="submit")
                            //- E-mail:
                            //- @v-validate: required | max:100 | min:8
                            //- @required: true
                            //- v-text-field(
                                v-model='email' 
                                v-validate="'required|email|max:100'" 
                                :error-messages="errors.collect('email')" 
                                label='E-mail' 
                                data-vv-name='email' 
                                required
                                clearable)

                            //- E-mail field
                            TheEmailField(
                                v-model="form.email"
                                :maxCounterEmail="getMaxCounterEmail"
                                fieldName="E-mail"
                                fieldLabel="E-mail"
                                @errorCheck="emailHasErrors=$event"						
                            )

                            //- Password:
                            //- @v-validate: required | max:100 | min:8
                            //- @required: true
                            //- v-text-field(
                                v-model='password'
                                v-validate="'required|max:100|min:8'" 
                                :counter='100' 
                                name="password" 
                                type="password" 
                                :class="{'is-danger': errors.has('password')}" 
                                placeholder="Password" ref="password" 
                                :error-messages="errors.collect('password')"
                                clearable)
                            //- span.help.is-danger(
                                v-show="errors.has('password')")
                            
                            //- Password field
                            ThePasswordField(
                                v-model="form.password"
                                :minCounterPassword="getMinCounterPassword" 
                                :maxCounterPassword="getMaxCounterPassword"
                                :regexExpression= "regexExpression"
                                fieldName="Password"
                                fieldLabel="Password"
                                @errorCheck="passwordHasErrors=$event"
                            )

                            a Forgot username?
                            v-chip(x-small color="warning") TODO
                            br
                            a Forgot password?
                            v-chip(x-small color="warning") TODO
                    v-card-actions
                        v-btn(color='primary' to="/Signup" outlined) Go to sign up
                        v-spacer
                        v-btn(color='primary' @click="login()" ) Log in
</template>

<script>
import TheEmailField from "@/components/TheEmailField";
import ThePasswordField from "@/components/ThePasswordField";
import { mapState } from "vuex";
export default {
    data() {
        const defaultForm = Object.freeze({
            email: "",
            password: ""
        });
        return {
            form: Object.assign({}, defaultForm),
            // minCounterPassword: 8,
            // maxCounterPassword: 128,
            regexExpression: /^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$/,
            // maxCounterEmail: 100,
            defaultForm,
            emailHasErrors: false,
            passwordHasErrors: false
        };
    },
    methods: {
        login() {
            this.$store.dispatch("login");
        }
    },
    computed: {
        ...mapState(["isLoggedIn"]),

        //- Getter for environment variables
        getMinCounterPassword() {
            return parseInt(process.env.VUE_APP_PASSWORD_MIN_COUNTER);
        },
        getMaxCounterPassword() {
            return parseInt(process.env.VUE_APP_PASSWORD_MAX_COUNTER);
        },
        getMaxCounterEmail() {
            return parseInt(process.env.VUE_APP_EMAIL_MAX_COUNTER);
        }
        // getRegexTest() {
        //     return new RegExp("^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$");
        // },
        // getRegex() {
        //     return new RegExp(process.env.VUE_APP_PASSWORD_REGEX, "m");
        // }
    },
    components: {
        TheEmailField,
        ThePasswordField
    }
};
</script>

<style lang="sass">
html
    // remove scroll bar
    // overflow: hidden
</style>
