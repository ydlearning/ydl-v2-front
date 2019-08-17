<template lang="pug">
    v-container(align-center justify-center)
        v-card(flat color="transparent")
            v-toolbar(color='primary' flat)
                v-toolbar-title {{ this.$route.name }}
            v-card-text
                v-form
                    //- Password:
                    //- @v-validate: required | min:8 | max:100 
                    //- @required: true
                    v-text-field(
                        v-model='oldPassword'
                        v-validate="`required|min:8|max:${maxCounter}`" 
                        :counter="maxCounter"
                        name="password_old" 
                        type="password" 
                        :class="{'is-danger': errors.has('password_old')}" 
                        placeholder="Old Password" ref="oldpassword" 
                        :error-messages="errors.collect('password_old')"
                        data-vv-as="old password"
                        clearable
                        persistent-hint: false)
                    br
                    //- Password:
                    //- @v-validate: required | min:8 | max:100 
                    //- @required: true
                    v-text-field(
                        v-on:input="check_password"
                        v-model='password'
                        v-validate="`required|min:8|max:${maxCounter}`" 
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
                        - var items = ["8 characters long", "at least 1 character", "at least 1 number", "at least 1 special character"]
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
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            password: "",
            oldPassword: "",
            corrections: ["error", "error", "error", "error"],
            maxCounter: 100
        };
    },
    mounted() {
        this.defaultItem = this.items[0];
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        progress() {
            return Math.min(100, this.password.length * 6);
        },
        color() {
            // TODO:
            // for (var i = 0; i < this.corrections.length(); i++) {
            // 	if (this.corrections[i] === "success") {
            // 	}
            // }
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
            if (/[+-]/.test(value)) {
                this.corrections[3] = "success";
            } else {
                this.corrections[3] = "error";
            }
        }
    }
};
</script>

<style lang="sass"></style>
