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
                    //- Username
                    //- @v-validate: required | min:3 | max:50 | alpha_dash
                    //- @required: true
                    //- @disabled: true
                    v-text-field(
                        v-model='user.username'
                        v-validate="'required|min:3|max:40|alpha_dash'" 
                        :error-messages="errors.collect('username')" 
                        label='Username' 
                        data-vv-name='username' 
                        required
                        disabled)

                    //- Full name:
                    //- @v-validate: required | max:50 | alpha_spaces
                    //- @required: true
                    v-text-field(
                        v-model='user.name' 
                        v-validate="'required|max:50|alpha_spaces'" 
                        :error-messages="errors.collect('name')" 
                        label='Full Name' 
                        data-vv-name='name' 
                        required)

                    v-select(
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

                v-card-actions
                    v-btn(color='primary' @click="") Apply changes
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            newEmail: "",
            defaultItem: "Student",
            items: [{ text: "Student" }, { text: "Teacher" }]
        };
    },
    computed: mapState(["isLoggedIn", "user"]),
    components: {}
};
</script>

<style lang="sass"></style>
