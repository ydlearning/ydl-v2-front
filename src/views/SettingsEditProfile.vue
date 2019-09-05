<template lang="pug">
    v-container(align-center justify-center)
        v-card(flat color="transparent")
            //- div
                //- alt:
                //- Snackbar - Info Apply changes successful!
                v-snackbar(
                    v-model="snackbarSuccess"  
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

            //- Neu
            TheSettingsSnackbar(
                :snackbarSuccess='snackbarSuccess'
                :snackbarError='snackbarError'
                @snackbarRemoveSuccess="snackbarSuccess=false"
                @snackbarRemoveError="snackbarError=false")

            v-toolbar(color='primary' flat)
                v-toolbar-title {{ this.$route.name }}
            v-card-text
                //- Username
                    //- @v-validate: required | min:3 | max:40 | alpha_dash
                    //- @required: true
                    //- @disabled: true
                    //- v-text-field(
                        v-model='user.username'
                        v-validate="'required|min:3|max:40|alpha_dash'" 
                        :error-messages="errors.collect('username')" 
                        label='Username' 
                        data-vv-name='username' 
                        required
                        disabled)
                    
                //- TheUsernameField(
                    v-model="user.username"
                    :minCounter="3"
                    :maxCounter="40"
                    fieldName="Username"
                    fieldLabel="Username"
                    @errorCheck="usernameHasErrors=$event"
                    :fieldReadonly="true"
                    :fieldPlaceholder="user.username"
                    :copySymbol="false")

                //- v-select(
                    v-model='user.role' 
                    v-validate="'required'" 
                    :items='items' 
                    :error-messages="errors.collect ('select')" 
                    label='Role' 
                    data-vv-name='select' 
                    required
                    :menu-props="{ top: true, offsetY: true }"
                    disabled=false)
                    //- maybe diabled?    

                //- TheRoleSelect(
                    v-model="user.role"
                    :fieldItems='items'
                    fieldName="Role"
                    fieldLabel="Role"
                    :fieldDisable="false"
                    @errorCheck="roleHasErrors=$event")
                
                v-text-field(
                    v-model='user.name'
                    readonly=true
                    disabled=false
                    label="Username")

                v-text-field(
                    v-model='user.role'
                    readonly=false
                    disabled
                    label="Role")

                v-form(ref="form" @submit.prevent="submit")
                    //- Full name:
                    //- @v-validate: required | max:50 | alpha_spaces
                    //- @required: true
                    //- v-text-field(
                        v-model='user.name' 
                        v-validate="'required|max:50|alpha_spaces'" 
                        :error-messages="errors.collect('name')" 
                        label='Full Name' 
                        data-vv-name='name' 
                        required)
                    
                    TheFullNameField(
                        v-model="form.fullname"
                        :minCounter="0"
                        :maxCounter="50"
                        fieldName="Full name"
                        fieldLabel="Full name"
                        @errorCheck="fullNameHasErrors=$event")
                    
                    //- v-card-actions
                        //- div
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

                    TheSettingsButtons(
                        @cancel="resetForm"
                        @apply="submit"
                        :formIsValid="formIsValid"
                    )
</template>

<script>
import TheUsernameField from "@/components/TheUsernameField";
import TheFullNameField from "@/components/TheFullNameField";
import TheRoleSelect from "@/components/TheRoleSelect";
import TheSettingsButtons from "@/components/TheSettingsButtons";
import TheSettingsSnackbar from "@/components/TheSettingsSnackbar";
import { mapState } from "vuex";

export default {
    name: "SettingsEmailSettings",
    data() {
        const defaultForm = Object.freeze({
            fullname: "",
            role: ""
        });
        return {
            form: Object.assign({}, defaultForm),
            defaultItem: "Student",
            items: [{ text: "Student" }, { text: "Teacher" }],
            snackbarSuccess: false,
            snackbarError: false,
            defaultForm,
            usernameHasErrors: false,
            fullNameHasErrors: false,
            roleHasErrors: false
        };
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        //- returns true if the form and all fields are valid
        formIsValid() {
            return (
                //- check if value ist set
                this.form.fullname !== "" &&
                //- check if all fields havn't errors
                !this.fullNameHasErrors
            );
        }
    },
    components: {
        TheUsernameField,
        TheFullNameField,
        TheRoleSelect,
        TheSettingsButtons,
        TheSettingsSnackbar
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
            this.snackbarSuccess = true;
            // this.resetForm(); // resets form after submit
            // this.$refs.form.reset();
        }
    }
};
</script>

<style lang="sass"></style>
