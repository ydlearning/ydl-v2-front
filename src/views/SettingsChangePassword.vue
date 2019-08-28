<template lang="pug">
	v-container(align-center justify-center)
		v-card(flat color="transparent")
			//- Snackbar - Info Apply changes successful!
			v-snackbar(
				v-model="snackbar"  
				top 
				right 
				color="success")
					span Apply changes successful!
					v-icon(dark) mdi-check-circle
			v-snackbar(
				v-model="snackbarError"  
				top 
				right 
				color="error")
					span Cancel, form cleared!
					v-icon(dark) mdi-alert
			v-toolbar(color='primary' flat)
				v-toolbar-title {{ this.$route.name }}
			v-card-text
				v-form(ref="form" @submit.prevent="submit")

					//- Old password field
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
					
					//- New password field
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

					//- Repeat password field
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

					//- Terms checkbox
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
            minCounterPassword: 8,
            maxCounterPassword: 128,
            regexExpression: /^([a-zA-Z0-9$&+,:;=?@#'<>.^*()%!-]+)$/,
            regexExpressionSpecialChars: /[$&+,:;=?@#'<>.^*()%!-]/,
            snackbar: false,
            snackbarError: false,
            defaultForm,
            passwordHasErrors: false,
            passwordSetHasErrors: false,
            passwordRepeatHasErrors: false
        };
    },
    mounted() {},
    components: {
        ThePasswordField,
        ThePasswordNewField,
        ThePasswordRepeatField,
        TheTermsCheckbox
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),

        //- returns true if the form and all fields are valid
        formIsValid() {
            return (
                //- check if value ist set
                this.form.password &&
                this.form.passwordSet &&
                this.form.passwordRepeat &&
                this.form.terms &&
                //- check if all fields havn't errors
                !this.passwordHasErrors &&
                !this.passwordSetHasErrors &&
                !this.passwordRepeatHasErrors
            );
        }
    },
    methods: {
        //- resets the complete form
        resetForm() {
            this.snackbarError = true;
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
