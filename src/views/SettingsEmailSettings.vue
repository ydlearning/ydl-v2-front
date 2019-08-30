<template lang="pug">
	v-container(align-center justify-center)
		v-card(flat color="transparent")
			//- Snackbar - Info Apply changes successful!
			v-snackbar(
				v-model="snackbar"  
				top 
				right 
				color="success")
					span Changes apply successfully!
					v-icon(dark) mdi-check-circle
			//- Snackbar - Info Cancel, form cleared!
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
				//- Current E-Mail field
				TheEmailNewField(
					v-model="user.email.address"
					:maxCounterEmail="100"
					fieldName="Current E-mail"
					fieldLabel="Current E-mail"
					@errorCheck="emailNewHasErrors=$event"
					:fieldReadonly="true"
					:fieldPlaceholder="user.email.address"
					:copySymbol="false"
					fieldId="1"
				)

				v-form(ref="form" @submit.prevent="submit")
						
					TheEmailNewField(
						v-model="form.emailNew"
						:maxCounterEmail="100"
						fieldName="New E-mail"
						fieldLabel="New E-mail"
						@errorCheck="emailNewHasErrors=$event"
						:copySymbol="false"
						fieldId="2"
					)

					

					//- E-mail: repeat
					//- @v-validate: required | max:100 | min:8
					//- @required: true
					//- v-text-field(
					//-     v-validate="'required|confirmed:newEmail'" 
					//-     name="email_confirmation" 
					//-     :class="{'is-danger': errors.has('email_confirmation')}" 
					//-     label='New E-mail' 
					//-     data-vv-as='email' 
					//-     required
					//-     clearable)
					//- span.help.is-danger(
					//-     v-show="errors.has('email_confirmation')") {{ errors.first('email_confirmation') }} 

					TheEmailRepeatField(
						v-model="form.emailRepeat"
						:maxCounterEmail="maxCounterEmail"
						fieldName="Repeat E-mail"
						fieldLabel="Repeat E-mail"
						:confirmationField="form.emailNew"
						@errorCheck="emailRepeatHasErrors=$event"
					)

					v-card-actions
						v-tooltip(bottom color="red")
							template(v-slot:activator="{ on: tooltip }")
								v-btn(
									color="primary"
									@click="resetForm"
									outlined
									v-on="{ ...tooltip }"
									) Cancel
							span
								v-icon(size="15px") mdi-alert
								|  All Fields will be deleted!
						v-spacer
						v-btn(
							color="primary"
							type="submit"
							@click=""
							:disabled="!formIsValid"
							) Apply changes
</template>

<script>
import { mapState } from "vuex";
import TheEmailNewField from "@/components/TheEmailNewField";
import TheEmailRepeatField from "@/components/TheEmailRepeatField";

export default {
    data() {
        const defaultForm = Object.freeze({
            emailNew: "",
            emailRepeat: ""
        });
        return {
            form: Object.assign({}, defaultForm),
            defaultForm,
            newEmail: "",
            maxCounterEmail: 100,
            snackbar: false,
            snackbarError: false
        };
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        formIsValid() {
            return (
                //- check if value ist set
                this.form.emailNew &&
                this.form.emailRepeat &&
                //- check if all fields havn't errors
                !this.emailNewHasErrors &&
                !this.emailRepeatHasErrors
            );
        }
    },
    methods: {
        //- resets the complete form
        resetForm() {
            this.snackbarError = true;
            this.form = Object.assign({}, this.defaultForm);
            this.$refs.form.reset();
            // this.form.emailNew = null;
            // this.form.emailRepeat = "";
        },

        //- submit form fields
        submit() {
            this.snackbar = true;
            // this.resetForm(); // resets form after submit
        }
    },
    components: { TheEmailNewField, TheEmailRepeatField }
};
</script>

<style lang="sass"></style>
