<template lang="pug">
	v-container(align-center justify-center)
		v-card(flat color="transparent")
			//- div {{ form.password }} // debug
			v-snackbar(
				v-model="snackbar"  
				top 
				right 
				color="success")
					span Apply changes successful!
					v-icon(dark) mdi-check-circle
			v-toolbar(color='primary' flat)
				v-toolbar-title {{ this.$route.name }}
			v-card-text
				v-form(ref="form" @submit.prevent="submit")
					//- Password:
					//- @v-validate: required | min:8 | max:128 
					//- @required: true
					//- v-text-field(
						v-model='form.password'
						v-validate="{ required: true, min: minCounterPassword, max: maxCounterPassword, regex: regexExpression }" 
						:counter="maxCounterPassword"
						name="password" 
						:data-vv-as="passwordFieldName"
						:placeholder="passwordFieldPlaceholder" 
						:class="{'is-danger': errors.has('password')}" 
						ref="password" 
						:error-messages="errors.collect('password')"
						:clearable="passwordFieldClearable"
						:append-icon=" showEyePassword ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showEyePassword = !showEyePassword"
						:type="showEyePassword ? 'text' : 'password'")

					//- Old password
					ThePasswordField(
						v-model="form.password"
						:minCounterPassword= "minCounterPassword" 
						:maxCounterPassword= "maxCounterPassword"
						:regexExpression= "regexExpression"
						fieldName="Old password"
						fieldLabel="Old password"
						@errorCheck="passwordHasErrors=$event"
					)
					br 

					//- Password:
					//- @v-validate: required | min:8 | max:128 
					//- @required: true
					//- v-text-field(
						v-on:input="check_password"
						v-model="form.passwordSet"
						v-validate="{ required: true, min: minCounterPassword, max: maxCounterPassword, regex: regexExpression }"
						:counter="maxCounterPassword" 
						name="password_set"  
						:class="{'is-danger': errors.has('password_set')}" 
						placeholder="New password" ref="password_set" 
						data-vv-as="'New Password'"
						:error-messages="errors.collect('password_set')"
						clearable
						:append-icon=" showEyePasswordSet ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showEyePasswordSet = !showEyePasswordSet"
						:type="showEyePasswordSet ? 'text' : 'password'")
					//- v-progress-linear(
						v-model='progress'
						:value="progress" 
						:color="color" 
						height="7"
						active)
					//- v-alert.ma-1(dense type="info" text) Password has to be 
						span.font-weight-bold at least:
						//- iterate over each condition for rendering as alert
						- var items = ["• 8 characters long", "• include 1 character", "• include 1 number", "• 1 special character, allowed: $&+:;=?@#'<>.^*()%!-{}"]
						each item, index in items
							//- "+index+" escapes the javascript input for the :type variable so the pug variable can be inserted
							v-alert.caption.ma-1.pa-1(:type="corrections["+index+"]" text)= item    
					
					ThePasswordNewField(
						v-model="form.passwordSet"
						:minCounterPassword= "minCounterPassword" 
						:maxCounterPassword= "maxCounterPassword"
						:regexExpression= "regexExpression"
						:regexExpressionSpecialChars= "regexExpressionSpecialChars"
						fieldName="New password"
						fieldLabel="New password"
						@errorCheck="passwordSetHasErrors=$event"
					)

					//- Passwored repeat:
					//- v-text-field(
						v-validate="'required|confirmed:password_set'" 
						v-model='form.passwordRepeat'
						name="password_confirmation" 
						:counter="maxCounterPassword"
						:class="{'is-danger': errors.has('password_confirmation')}" 
						:error-messages="errors.collect('password_confirmation')"
						placeholder="Confirm Password" 
						data-vv-as="'Confirm Password'"
						clearable
						:append-icon=" showEye3 ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showEye3 = !showEye3"
						:type="showEye3 ? 'text' : 'password'")

					ThePasswordRepeatField(
						v-model="form.passwordRepeat"
						:minCounterPassword= "minCounterPassword" 
						:maxCounterPassword= "maxCounterPassword"
						:regexExpression= "regexExpression"
						:confirmationField= "form.passwordSet"
						fieldName="Repeat password"
						fieldLabel="Repeat password"
						@errorCheck="passwordRepeatHasErrors=$event"
					)

					//- v-checkbox(
					//- 	v-model="form.terms" 
					//- 	color="success")
					//- 	template(v-slot:label)
					//- 			div(@click.stop="")
					//- 				| Do you accept the 
					//- 				a(href="javascript:;") terms
					//- 				|  and 
					//- 				a(href="javascript:;") conditions
					//- 				| ?

					TheTermsCheckbox(
						v-model="form.terms" 
					)

					v-card-actions
						v-btn(
							color="primary"
							@click="resetForm"
							outlined) Cancel
						v-spacer
						v-btn(
							color="primary"
							type="submit"
							@click=""
							:disabled="!formIsValid") Apply changes
</template>

<script>
import ThePasswordField from "@/components/ThePasswordField";
import ThePasswordNewField from "@/components/ThePasswordNewField";
import ThePasswordRepeatField from "@/components/ThePasswordRepeatField";
import TheTermsCheckbox from "@/components/TheTermsCheckbox";
import { mapState } from "vuex";

export default {
    name: "SettingsChangePassword",
    data() {
        const defaultForm = Object.freeze({
            password: "",
            passwordSet: "",
            passwordRepeat: "",
            terms: false
        });
        return {
            form: Object.assign({}, defaultForm),
            // corrections: ["error", "error", "error", "error"],
            minCounterPassword: 8,
            maxCounterPassword: 128,
            regexExpression: /^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$/,
            regexExpressionSpecialChars: /[$&+,:;=?@#'<>.^*()%!-]/,
            // passwordFieldName: "'Old password'",
            // passwordFieldPlaceholder: "Old password",
            // passwordFieldClearable: true,
            // showEyePassword: false,
            // showEyePasswordSet: false,
            // showEye3: false,
            snackbar: false,
            defaultForm,
            passwordHasErrors: false,
            passwordSetHasErrors: false,
            passwordRepeatHasErrors: false
        };
    },
    mounted() {
        // alert("Hi "); // Test
    },
    components: {
        ThePasswordField,
        ThePasswordNewField,
        ThePasswordRepeatField,
        TheTermsCheckbox
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        // progress() {
        //     //- check if this.form.password is defined
        //     if (!this.form.passwordSet) {
        //         return 0;
        //     }
        //     return Math.min(100, this.form.passwordSet.length * 6);
        // },
        // color() {
        //     return ["error", "warning", "success"][Math.floor(this.progress / 40)];
        // },
        //- returns true if the form and all fields are valid
        formIsValid() {
            return (
                //- check if value ist set
                this.form.password &&
                this.form.passwordSet &&
                this.form.passwordRepeat &&
                this.form.terms &&
                //- check if all fields are valid
                // this.corrections[0] === "success" &&
                // this.corrections[1] === "success" &&
                // this.corrections[2] === "success" &&
                // this.corrections[3] === "success" &&
                //- check that there aren’t errors
                !this.passwordHasErrors &&
                !this.passwordSetHasErrors &&
                !this.passwordRepeatHasErrors
            );
            // return true; // test
        }
    },
    methods: {
        // check_password: function(value) {
        //     //- check if value is defined
        //     if (!value) {
        //         return;
        //     }

        //     //- check password length
        //     if (value.length >= 8) {
        //         this.corrections[0] = "success";
        //     } else {
        //         this.corrections[0] = "error";
        //     }

        //     //- check for character
        //     if (/[a-zA-Z]/.test(value)) {
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
        //     if (this.regexExpressionSpecialChars.test(value)) {
        //         this.corrections[3] = "success";
        //         // [+-@!#%$^?!:.;,()[] {}]
        //     } else {
        //         this.corrections[3] = "error";
        //     }
        // },
        //- resets the complete form
        resetForm() {
            this.form = Object.assign({}, this.defaultForm);
            this.$refs.form.reset();
        },
        //- submit form fields
        submit() {
            this.snackbar = true;
            console.log("Ausführen");
            // this.resetForm(); // resets form after submit
        }
    }
};
</script>

<style lang="sass"></style>
