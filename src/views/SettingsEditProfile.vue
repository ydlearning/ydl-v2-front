<template lang="pug">
    v-container(align-center justify-center)
        v-card(flat color="transparent")

            //- Success / Error snackbar
            TheSettingsSnackbar(
                :snackbarSuccess='snackbarSuccess'
                :snackbarError='snackbarError'
                @snackbarRemoveSuccess="snackbarSuccess=false"
                @snackbarRemoveError="snackbarError=false")

            //- Toolbar / App Title
            v-toolbar(color='primary' flat)
                v-toolbar-title {{ this.$route.name }}

            v-card-text
                
                //- Username
                v-text-field(
                    v-model='user.name'
                    readonly=false
                    disabled=true
                    label="Username"
                    prepend-icon="mdi-account")

                //- E-mail
                v-text-field(
                    v-model='user.role'
                    readonly=false
                    disabled=true
                    label="Role"
                    prepend-icon="mdi-email-outline")

                //- Form
                v-form(ref="form" @submit.prevent="submit")
                    
                    //- Full name field
                    TheFullNameField(
                        v-model="form.fullname"
                        :minCounter="getMinCounterFullName"
                        :maxCounter="getMinCounterFullName"
                        fieldName="Full name"
                        fieldLabel="Full name"
                        @errorCheck="fullNameHasErrors=$event")

                    //- Card buttons
                    TheSettingsButtons(
                        @cancel="resetForm"
                        @apply="submit"
                        :formIsValid="formIsValid")
</template>

<script>
import TheFullNameField from "@/components/TheFullNameField";
import TheSettingsButtons from "@/components/TheSettingsButtons";
import TheSettingsSnackbar from "@/components/TheSettingsSnackbar";
import { mapState } from "vuex";

export default {
    name: "SettingsEmailSettings",
    data() {
        //- Form to store variables
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
            fullNameHasErrors: false
        };
    },
    computed: {
        ...mapState(["isLoggedIn", "user"]),
        //- Returns true if form is completed and all fields are valid (have no error)
        formIsValid() {
            return (
                //- check if value ist set
                this.form.fullname !== "" &&
                //- check if all fields havn't errors
                !this.fullNameHasErrors
            );
        },
        //- Getter for environment variables
        getMinCounterUsername() {
            return parseInt(process.env.VUE_APP_USERNAME_MIN_COUNTER);
        },
        getMaxCounterUsername() {
            return parseInt(process.env.VUE_APP_USERNAME_MAX_COUNTER);
        },
        getMinCounterFullName() {
            return parseInt(process.env.VUE_APP_FULLNAME_MIN_COUNTER);
        },
        getMaxCounterFullName() {
            return parseInt(process.env.VUE_APP_FULLNAME_MAX_COUNTER);
        }
    },
    components: {
        TheFullNameField,
        TheSettingsButtons,
        TheSettingsSnackbar
    },
    methods: {
        //- Resets the complete form
        resetForm() {
            this.snackbarError = true;
            this.form = Object.assign({}, this.defaultForm);
            this.$refs.form.reset();
        },
        //- Submit form fields
        submit() {
            this.snackbarSuccess = true;
            // this.resetForm(); // resets form after submit
            // this.$refs.form.reset();
        }
    }
};
</script>

<style lang="sass"></style>
