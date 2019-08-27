<template lang="pug">
div
	//- Password New / Repeat:
	//- @v-validate: required
	//- @required: true
	v-text-field(
		v-model="password"
		v-on:input="check_password"
		v-validate="{ required: true, min: minCounterPassword, max: maxCounterPassword, regex: regexExpression }"
		:counter="maxCounterPassword" 
		name="password"
		:data-vv-as="fieldName"
		:label="fieldLabel"
		:class="{'is-danger': errors.has('password')}" 
		ref="password" 
		:error-messages="errors.collect('password')"
		:clearable="fieldClearable"
		:append-icon=" showPassword ? 'mdi-eye' : 'mdi-eye-off'"
		@click:append="showPassword = !showPassword"
		:type="showPassword ? 'text' : 'password'"
		@input="$emit('input',$event)"
	)

	v-progress-linear(
		v-model='progress'
		:value="progress" 
		:color="color" 
		height="7"
		active)

	v-alert.ma-1(dense type="info" text) Password has to be 
		span.font-weight-bold at least:
		//- iterate over each condition for rendering as alert
		- var items = ["• " + minCounterPassword + " characters long", "• include 1 character", "• include 1 number", "• 1 special character, allowed: $&+:;=?@#'<>.^*()%!-{}"]
		each item, index in items
			//- "+index+" escapes the javascript input for the :type variable so the pug variable can be inserted
			v-alert.caption.ma-1.pa-1(:type="corrections["+index+"]" text)= item    
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "ThePasswordNewField",
    props: {
        value: {
            type: String,
            default: ""
        },
        minCounterPassword: {
            type: Number,
            default: 0,
            required: true
        },
        maxCounterPassword: {
            type: Number,
            default: 0,
            required: true
        },
        regexExpression: {
            type: RegExp,
            default: "",
            required: true
        },
        regexExpressionSpecialChars: {
            type: RegExp,
            default: "",
            required: true
        },
        fieldName: {
            type: String,
            default: "",
            required: true
        },
        fieldLabel: {
            type: String,
            default: "",
            required: true
        },
        showPassword: {
            type: Boolean,
            default: false,
            required: false
        },
        fieldClearable: {
            type: Boolean,
            default: true,
            required: false
        }
    },
    data() {
        return {
            password: "",
            corrections: ["error", "error", "error", "error"]
        };
    },
    methods: {
        check_password: function(value) {
            //- check if value is defined
            if (!value) {
                return;
            }

            //- check password length
            if (value.length >= 8) {
                this.corrections[0] = "success";
            } else {
                this.corrections[0] = "error";
            }

            //- check for character
            if (/[a-zA-Z]/.test(value)) {
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
            if (this.regexExpressionSpecialChars.test(value)) {
                this.corrections[3] = "success";
                // [+-@!#%$^?!:.;,()[] {}]
            } else {
                this.corrections[3] = "error";
            }
        }
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        progress() {
            //- check if this.form.password is defined
            if (!this.password) {
                return 0;
            }
            return Math.min(100, this.password.length * 6);
        },
        color() {
            return ["error", "warning", "success"][Math.floor(this.progress / 40)];
        }
    }
};
</script>

<style lang="sass"></style>
