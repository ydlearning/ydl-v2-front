<template lang="pug">
v-app#inspire
	v-content
		v-container.fill-height(fluid)
			v-row(align='center' justify='center')
				v-col(cols='12' sm='8' md='4')
					v-card.elevation-12
						v-toolbar(color='primary' flat)
							v-toolbar-title Sign up
							v-spacer
							v-tooltip(bottom)
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
									required)

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
								//- @v-validate: required | min:8 | max:100 
								//- @required: true
								v-text-field(
									v-on:input="check_password"
									v-model='password'
									v-validate="'required|min:8|max:100'" 
									:counter='100' 
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
								span.help.is-danger(v-show="errors.has('password')")
								v-alert.ma-1(dense type="info" text) Password has to be at least:
									v-alert.caption.ma-1(dense :type="corrections[0]" text) 8 characters long
									v-alert.caption.ma-1(dense :type="corrections[1]" text) at least 1 character
									v-alert.caption.ma-1(dense :type="corrections[2]" text) at least 1 number
									v-alert.caption.ma-1(dense :type="corrections[3]" text) at least 1 special character


								//- Passwored repeat:
								v-text-field(
									v-validate="'required|confirmed:password'" 
									name="password_confirmation" 
									type="password" 
									:class="{'is-danger': errors.has('password_confirmation')}" 
									placeholder="Password, Again" 
									data-vv-as="password"
									clearable)
								span.help.is-danger(
									v-show="errors.has('password_confirmation')") {{ errors.first('password_confirmation') }} 
								
								v-select(
									v-model='defaultItem' 
									v-validate="'required'" 
									:items='items' 
									:error-messages="errors.collect ('select')" 
									label='Sign up as Student / Teacher (Role)' 
									data-vv-name='select' 
									required
									:menu-props="{ top: true, offsetY: true }")
						v-card-actions
							v-btn(color='primary' to="/Login") Go to login
							v-spacer
							v-btn(color='primary') Sign up
							//- br
							//- v-btn.mr-4(@click='submit') submit
							//- v-btn(@click='clear') clear
</template>

<script>
export default {
    data: () => ({
        password: "",
        custom: true,
        items: [{ text: "Student" }, { text: "Teacher" }],
        corrections: ["error", "error", "error", "error"]
    }),
    computed: {
        progress() {
            return Math.min(100, this.password.length * 6);
        },
        color() {
            return ["error", "warning", "success"][Math.floor(this.progress / 40)];
        },
        defaultItem() {
            return this.items[0];
        }
    },
    components: {},
    methods: {
        check_password: function(value) {
            if (value.length >= 8) {
                this.corrections[0] = "success";
            } else {
                this.corrections[0] = "error";
            }
        }
    }
};
</script>

<style lang="sass">
html
	// remove scroll bar
	// overflow: hidden
</style>
