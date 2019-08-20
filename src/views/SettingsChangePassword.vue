<template lang="pug">
	v-container(align-center justify-center)
		v-card(flat color="transparent")
			v-snackbar(
				v-model="snackbar" 
				absolute 
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
					v-text-field(
						v-model='form.passwordOld'
						v-validate="{ required: true, min: minCounterPassword, max: maxCounterPassword, regex: /^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$/ }"
						:counter="maxCounterPassword"
						name="password_old" 
						:class="{'is-danger': errors.has('password_old')}" 
						placeholder="Old password" ref="password_old" 
						:error-messages="errors.collect('password_old')"
						data-vv-as="'Old password'"
						clearable
						persistent-hint: false
						:append-icon=" showEye1 ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showEye1 = !showEye1"
						:type="showEye1 ? 'text' : 'password'")
					br
					//- Password:
					//- @v-validate: required | min:8 | max:128 
					//- @required: true
					v-text-field(
						v-on:input="check_password"
						v-model="form.password"
						v-validate="{ required: true, min: minCounterPassword, max: maxCounterPassword, regex: /^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$/ }"
						:counter="maxCounterPassword" 
						name="password"  
						:class="{'is-danger': errors.has('password')}" 
						placeholder="New password" ref="password" 
						data-vv-as="'New Password'"
						:error-messages="errors.collect('password')"
						clearable
						:append-icon=" showEye2 ? 'mdi-eye' : 'mdi-eye-off'"
						@click:append="showEye2 = !showEye2"
						:type="showEye2 ? 'text' : 'password'")
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

					v-checkbox(
						v-model="form.terms" 
						color="success")
						template(v-slot:label)
								div(@click.stop="")
									| Do you accept the 
									a(href="javascript:;") terms
									|  and 
									a(href="javascript:;") conditions
									| ?

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
import { mapState } from "vuex";

export default {
    data() {
        const defaultForm = Object.freeze({
            password: "",
            passwordOld: "",
            passwordRepeat: "",
            terms: false
        });
        return {
            form: Object.assign({}, defaultForm),
            corrections: ["error", "error", "error", "error"],
            minCounterPassword: 8,
            maxCounterPassword: 128,
            showEye1: false,
            showEye2: false,
            showEye3: false,
            snackbar: false,
            defaultForm
        };
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        progress() {
            //- check if this.form.password is defined
            if (!this.form.password) {
                return 0;
            }
            return Math.min(100, this.form.password.length * 6);
        },
        color() {
            return ["error", "warning", "success"][Math.floor(this.progress / 40)];
        },
        formIsValid() {
            return (
                this.form.password &&
                this.form.passwordOld &&
                this.form.passwordRepeat &&
                this.form.terms &&
                this.corrections[0] === "success" &&
                this.corrections[1] === "success" &&
                this.corrections[2] === "success" &&
                this.corrections[3] === "success" &&
                !this.errors.has("password_old") &&
                !this.errors.has("password") &&
                !this.errors.has("password_confirmation")
            );
            // return true;
        }
    },
    components: {},
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
            if (/[$&+,:;=?@#'<>.^*()%!-]/.test(value)) {
                this.corrections[3] = "success";
                // [+-@!#%$^?!:.;,()[] {}]
            } else {
                this.corrections[3] = "error";
            }
        },
        resetForm() {
            this.form = Object.assign({}, this.defaultForm);
            this.$refs.form.reset();
        },
        submit() {
            this.snackbar = true;
            console.log("Ausführen");
            // this.resetForm();
        }
    }
};
</script>

<style lang="sass"></style>
