<template lang="pug">
span
    //- p
        | {{ getCompanyContactPerson }}
    p
        | {{ getCompanyName }}
    p
        h3 Adresse
        //- | {{ getCompanyStreet }}
        //- br
        //- | {{ getCompanyBuilding }}
        //- br
        //- | {{ getCompanyPostcode }} {{ getCompanyTown }}
        //- br
        | {{ getCompanyState }}
    //- span
        h2 Kontakt
        p
            table
                tr
                    td Telefonnummer:
                    td {{ getCompanyPhoneNumber}}
                tr
                    td Faxnummer:
                    td {{ getCompanyFaxNumber }}
                tr
                    td E-Mail:
                    td {{ getCompanyEmail }}
</template>

<script>
export default {
    name: "KontaktDaten",
    computed: {
        //- Getter for environment variables
        getCompanyName() {
            return process.env.VUE_APP_COMPANY_NAME;
        },
        getCompanyStreet() {
            return process.env.VUE_APP_COMPANY_STREET;
        },
        getCompanyPostcode() {
            return process.env.VUE_APP_COMPANY_POSTCODE;
        },
        getCompanyTown() {
            return process.env.VUE_APP_COMPANY_TOWN;
        },
        getCompanyState() {
            return process.env.VUE_APP_COMPANY_STATE;
        },
        getCompanyBuilding() {
            return process.env.VUE_APP_COMPANY_BUILDING;
        },
        getCompanyPhoneNumber() {
            return process.env.VUE_APP_COMPANY_PHONE_NUMBER;
        },
        getCompanyFaxNumber() {
            return process.env.VUE_APP_COMPANY_FAX_NUMBER;
        },
        getCompanyEmail() {
            return process.env.VUE_APP_COMPANY_EMAIL;
        },
        getCompanyContactPerson() {
            return process.env.VUE_APP_COMPANY_CONTACT_PERSON;
        }
    }
};
</script>

<style lang="sass"></style>
