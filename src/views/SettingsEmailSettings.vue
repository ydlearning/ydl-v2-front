<template lang="pug">
    v-container(align-center justify-center)
        v-card(flat color="transparent")
            //- v-container
            //-     v-flex
            //-         h3.text-center.title.text-center.font-weight-regular 
            //-         //- p sdjhasjdh
            //- TODO: .text-center
            v-toolbar(color='primary' flat)
                v-toolbar-title {{ this.$route.name }}
            v-card-text
                v-form
                    //- E-mail: Current
                    //- @v-validate: required | max:100 | min:8
                    //- @required: true
                    v-text-field(
                        v-model='user.email.adress' 
                        v-validate="'required|email|max:100'" 
                        :error-messages="errors.collect('email')" 
                        label='Current E-mail' 
                        data-vv-name='email' 
                        required
                        disabled)

                    //- E-mail: new
                    //- @v-validate: required | max:100 | min:8
                    //- @required: true
                    v-text-field(
                        v-model='newEmail' 
                        v-validate="'required|email|max:100'" 
                        :error-messages="errors.collect('email')" 
                        label='New E-mail' 
                        data-vv-name='email' 
                        required
                        clearable
                        ref="newEmail")

                    //- E-mail: repeat
                    //- @v-validate: required | max:100 | min:8
                    //- @required: true
                    v-text-field(
                        v-validate="'required|confirmed:newEmail'" 
                        name="email_confirmation" 
                        :class="{'is-danger': errors.has('email_confirmation')}" 
                        label='New E-mail' 
                        data-vv-as='email' 
                        required
                        clearable)
                    span.help.is-danger(
                        v-show="errors.has('email_confirmation')") {{ errors.first('email_confirmation') }} 
                v-card-actions
                    v-tooltip(bottom)
                        template(v-slot:activator="{ on }")
                            v-btn(color='primary' v-on="on" @click="") Change E-mail
                        span A verification email will be sent to your new E-mail adress

                    
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            newEmail: ""
        };
    },
    computed: mapState(["isLoggedIn", "user"]),
    components: {}
};
</script>

<style lang="sass"></style>
