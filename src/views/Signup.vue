<template lang="pug">
    v-container.fill-height(fluid)
        v-row(align='center' justify='center')
            v-col(cols='12' sm='8' md='4')
                v-card.elevation-12
                    v-toolbar(color='primary' flat)
                        v-toolbar-title Sign up
                    v-card-text
                        v-form
                            //- Username
                            //- @v-validate: required | min:3 | max:50 | alpha_dash
                            //- @required: true
                            v-text-field(
                                v-model='username'
                                :counter='40'
                                v-validate="'required|min:3|max:40|alpha_dash'" 
                                :error-messages="errors.collect('username')" 
                                label='Username' 
                                data-vv-name='username' 
                                required
                                hint="Username cannot be changed later! Choose wisely!"
                                persistent-hint=false)

                            //- Full name:
                            //- @v-validate: required | max:50 | alpha_spaces
                            //- @required: true
                            v-text-field(
                                v-model='name' 
                                v-validate="'required|max:50|alpha_spaces'" 
                                :error-messages="errors.collect('name')" 
                                label='Full Name' 
                                data-vv-name='name' 
                                required)

                            //- E-mail:
                            //- @v-validate: required | email | max:100
                            //- @required: true
                            v-text-field(
                                v-model='email' 
                                v-validate="'required|email|max:100'" 
                                :error-messages="errors.collect('email')" 
                                label='E-mail' 
                                data-vv-name='email' 
                                required)
                            //- br							
                            //- Password:
                            //- @v-validate: required | min:8 | max:128 
                            //- @required: true
                            v-text-field(
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
                            v-progress-linear(
                                v-model='progress'
                                :value="progress" 
                                :color="color" 
                                height="7"
                                active)
                            v-alert.ma-1(dense type="info" text) Password has to be at least:
                                //- iterate over each condition for rendering as alert
                                - var items = ["8 characters long", "at least 1 character", "at least 1 number", "at least 1 special character, allowed: $&+:;=?@#'<>.^*()%!-{}"]
                                each item, index in items
                                    //- "+index+" escapes the javascript input for the :type variable so the pug variable can be inserted
                                    v-alert.caption.ma-1.pa-1(:type="corrections["+index+"]" text)= item    

                            //- Passwored repeat:
                            v-text-field(
                                v-validate="'required|confirmed:password'" 
                                name="password_confirmation" 
                                type="password" 
                                :class="{'is-danger': errors.has('password_confirmation')}" 
                                :error-messages="errors.collect('password_confirmation')"
                                placeholder="Confirm Password" 
                                data-vv-as="password"
                                clearable)
                            
                            v-select(
                                v-model='defaultItem' 
                                v-validate="'required'" 
                                :items='items' 
                                :error-messages="errors.collect ('select')" 
                                label='Role' 
                                data-vv-name='select' 
                                required
                                :menu-props="{ top: true, offsetY: true }")
                    v-card-actions
                        v-btn(color='primary' to="/Login" outlined) Go to login
                        v-spacer
                        v-btn(color='primary' @click="") Sign up
                        //- br
                        //- v-btn.mr-4(@click='submit') submit
                        //- v-btn(@click='clear') clear
</template>

<script>
export default {
    data() {
        return {
            password: "",
            custom: true,
            items: [{ text: "Student" }, { text: "Teacher" }],
            corrections: ["error", "error", "error", "error"],
            defaultItem: "",
            email: "",
            name: "",
            username: ""
        };
    },
    mounted() {
        this.defaultItem = this.items[0];
    },
    computed: {
        progress() {
            return Math.min(100, this.password.length * 6);
        },
        color() {
            return ["error", "warning", "success"][Math.floor(this.progress / 40)];
        }
    },
    components: {},
    methods: {
        check_password: function(value) {
            //- check password length
            if (value.length >= 8) {
                this.corrections[0] = "success";
            } else {
                this.corrections[0] = "error";
            }

            //- check for character
            if (/[aA-zZ]/.test(value)) {
                this.corrections[1] = "success";
            } else {
                this.corrections[1] = "error";
            }

            //- check for number
            if (/\d/.test(value)) {
                this.corrections[2] = "success";
            } else {
                this.corrections[2] = "error";
            }

            //- check for special character
            if (/[$&+:;=?@#'<>.^*()%!-{}]/.test(value)) {
                this.corrections[3] = "success";
            } else {
                this.corrections[3] = "error";
            }
        }
    }
};
</script>

<style lang="sass"></style>
