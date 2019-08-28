<template lang="pug">
	v-container.fill-height(fluid)
		v-row(align='center' justify='center')
			v-col(cols='12' sm='8' md='4')
				v-card.elevation-12
					v-toolbar(color='primary' flat)
						v-toolbar-title {{ this.$route.name }}
					v-card-text
						v-form
							//- E-mail:
							//- @v-validate: required | max:100 | min:8
							//- @required: true
							v-text-field(
								v-model='email' 
								v-validate="'required|email|max:100'" 
								:error-messages="errors.collect('email')" 
								label='E-mail' 
								data-vv-name='email' 
								required
								clearable)

							//- Password:
							//- @v-validate: required | max:100 | min:8
							//- @required: true
							v-text-field(
								v-model='password'
								v-validate="'required|max:100|min:8'" 
								:counter='100' 
								name="password" 
								type="password" 
								:class="{'is-danger': errors.has('password')}" 
								placeholder="Password" ref="password" 
								:error-messages="errors.collect('password')"
								clearable)
							span.help.is-danger(
								v-show="errors.has('password')")

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
import { mapState } from "vuex";
export default {
    data() {
        return {
            password: "",
            email: ""
        };
    },
    methods: {
        login() {
            this.$store.dispatch("login");
        }
    },
    computed: mapState(["isLoggedIn"])
};
</script>

<style lang="sass">
html
	// remove scroll bar
	// overflow: hidden
</style>
