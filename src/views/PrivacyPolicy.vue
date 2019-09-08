<template lang="pug">
    v-container.container-padding(
        fluid 
        width="200px"
    )
        v-row(align='center' justify='center')
                v-card.elevation-12

                    //- Toolbar / App Title
                    v-toolbar(color='primary' flat)
                        v-toolbar-title {{ this.$route.name }}
                        .flex-grow-1
                        v-tooltip(
                            bottom
                        )
                            template(
                                v-slot:activator="{ on: tooltip }"
                            )
                                v-btn(
                                    icon
                                    v-on="{ ...tooltip }"
                                    to="/datenschutzerklaerung"
                                )
                                    v-icon mdi-web
                            span Deutsch

                    v-card-text.body-1
                        div 
                            p
                                | Personal data (usually referred to just as "data" below) will only be processed by us to the extent necessary and for
                                | the purpose of providing a functional and user-friendly website, including its contents, and the services offered
                                | there.
                            p
                                | Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as
                                | the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization,
                                | structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission,
                                | dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction
                                | performed on personal data, whether by automated means or not.
                            p
                                | The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and
                                | legal basis for the processing of such data either under our own control or in conjunction with others. We also
                                | inform you below about the third-party components we use to optimize our website and improve the user experience
                                | which may result in said third parties also processing data they collect and control.
                            p Our privacy policy is structured as follows:
                            p
                                | I. Information about us as controllers of your data
                                br
                                | II. The rights of users and data subjects
                                br
                                | III. Information
                                |     about the data processing
                            h3 I. Information about us as controllers of your data
                            p
                                | The party responsible for this website (the "controller") for purposes of data protection law is:
                            p
                                | {{ company }}
                            //- p
                                br
                                | {{ street }}
                                br
                                | {{ town }}
                                br
                                | {{ state }}
                            //- p
                                | {{ phoneNumber }}
                                br
                                | {{ faxNumber }}
                                br
                                | {{ email }}
                            p The controller's data protection officer is:
                            p
                                | {{ name }}
                            //- p
                                span(style="color: rgb(255, 0, 0); --darkreader-inline-color:#ff3333;" data-darkreader-inline-color="")
                                    | [The
                                    | following information must be added if an external data protection officer has been appointed].
                            //- p
                                span(style="color: rgb(255, 0, 0); --darkreader-inline-color:#ff3333;" data-darkreader-inline-color="")
                                    | Any street
                                    | 1
                                br
                                span(style="color: rgb(255, 0, 0); --darkreader-inline-color:#ff3333;" data-darkreader-inline-color="") 12345 Anytown
                                br
                                span(style="color: rgb(255, 0, 0); --darkreader-inline-color:#ff3333;" data-darkreader-inline-color="") Germany
                            //- p
                                span(style="color: rgb(255, 0, 0); --darkreader-inline-color:#ff3333;" data-darkreader-inline-color="")
                                    | Telephone:
                                    | Telephone number
                                br
                                span(style="color: rgb(255, 0, 0); --darkreader-inline-color:#ff3333;" data-darkreader-inline-color="") Fax: Fax number
                                br
                                span(style="color: rgb(255, 0, 0); --darkreader-inline-color:#ff3333;" data-darkreader-inline-color="")
                                    | Email:
                                    | datenschutz@mustermail.xy
                            h3 II. The rights of users and data subjects
                            p
                                | With regard to the data processing to be described in more detail below, users and data subjects have the right
                            ul(type="disc")
                                li
                                    | to confirmation of whether data concerning them is being processed, information about the data being processed,
                                    | further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR);
                                li to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);
                                li
                                    | to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further
                                    | processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR;
                                li
                                    | to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other
                                    | providers/controllers (cf. also Art. 20 GDPR);
                                li
                                    | to file complaints with the supervisory authority if they believe that data concerning them is being processed
                                    | by the controller in breach of data protection provisions (see also Art. 77 GDPR).
                            p
                                | In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections,
                                | deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation
                                | does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a
                                | right to information about these recipients.
                            p
                                strong
                                    | Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controller's future
                                    | processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing
                                    | for the purpose of direct advertising is permissible.
                            h3 III. Information about the data processing
                            p
                                | Your data processed when using our website will be deleted or blocked as soon as the purpose for its storage ceases
                                | to apply, provided the deletion of the same is not in breach of any statutory storage obligations or unless
                                | otherwise stipulated below.
                            h4 Server data
                            p
                                | For technical reasons, the following data sent by your internet browser to us or to our server provider will be
                                | collected, especially to ensure a secure and stable website: These server log files record the type and version of
                                | your browser, operating system, the website from which you came (referrer URL), the webpages on our site visited,
                                | the date and time of your visit, as well as the IP address from which you visited our site.
                            p
                                | The data thus collected will be temporarily stored, but not in association with any other of your data.
                            p
                                | The basis for this storage is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the improvement,
                                | stability, functionality, and security of our website.
                            p
                                | The data will be deleted within no more than seven days, unless continued storage is required for evidentiary
                                | purposes. In which case, all or part of the data will be excluded from deletion until the investigation of the
                                | relevant incident is finally resolved.
                            h4 Cookies
                            h5 a) Session cookies
                            p
                                | We use cookies on our website. Cookies are small text files or other storage technologies stored on your computer by
                                | your browser. These cookies process certain specific information about you, such as your browser, location data, or
                                | IP address.
                            p
                                | This processing makes our website more user-friendly, efficient, and secure, allowing us, for example, to display our
                                | website in different languages or to offer a shopping cart function.
                            p
                                | The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are used to collect data
                                | to initiate or process contractual relationships.
                            p
                                | If the processing does not serve to initiate or process a contract, our legitimate interest lies in improving the
                                | functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR.
                            p When you close your browser, these session cookies are deleted.
                            h5 b) Third-party cookies
                            p
                                | If necessary, our website may also use cookies from companies with whom we cooperate for the purpose of advertising,
                                | analyzing, or improving the features of our website.
                            p
                                | Please refer to the following information for details, in particular for the legal basis and purpose of such
                                | third-party collection and processing of data collected through cookies.
                            h5 c) Disabling cookies
                            p
                                | You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use the browser to
                                | delete cookies that have already been stored. However, the steps and measures required vary, depending on the
                                | browser you use. If you have any questions, please use the help function or consult the documentation for your
                                | browser or contact its maker for support. Browser settings cannot prevent so-called flash cookies from being set.
                                | Instead, you will need to change the setting of your Flash player. The steps and measures required for this also
                                | depend on the Flash player you are using. If you have any questions, please use the help function or consult the
                                | documentation for your Flash player or contact its maker for support.
                            p
                                | If you prevent or restrict the installation of cookies, not all of the functions on our site may be fully usable.
                            h4 Order processing
                            p
                                | The data you submit when ordering goods and/or services from us will have to be processed in order to fulfill your
                                | order. Please note that orders cannot be processed without providing this data.
                            p The legal basis for this processing is Art. 6 Para. 1 lit. b) GDPR.
                            p
                                | After your order has been completed, your personal data will be deleted, but only after the retention periods
                                | required by tax and commercial law.
                            p
                                | In order to process your order, we will share your data with the shipping company responsible for delivery to the
                                | extent required to deliver your order and/or with the payment service provider to the extent required to process
                                | your payment.
                            h5 The legal basis for the transfer of this data is Art. 6 Para. 1 lit. b) GDPR. 
                            h4 Customer account/registration
                            p
                                | If you create a customer account with us via our website, we will use the data you entered during registration (e.g.
                                | your name, your address, or your email address) exclusively for services leading up to your potential placement of
                                | an order or entering some other contractual relationship with us, to fulfill such orders or contracts, and to
                                | provide customer care (e.g. to provide you with an overview of your previous orders or to be able to offer you a
                                | wishlist function). We also store your IP address and the date and time of your registration. This data will not be
                                | transferred to third parties.
                            p
                                | During the registration process, your consent will be obtained for this processing of your data, with reference made
                                | to this privacy policy. The data collected by us will be used exclusively to provide your customer account.
                            p
                                | If you give your consent to this processing, Art. 6 Para. 1 lit. a) GDPR is the legal basis for this processing.
                            p
                                | If the opening of the customer account is also intended to lead to the initiation of a contractual relationship with
                                | us or to fulfill an existing contract with us, the legal basis for this processing is also Art. 6 Para. 1 lit. b)
                                | GDPR.
                            p
                                | You may revoke your prior consent to the processing of your personal data at any time under Art. 7 Para. 3 GDPR with
                                | future effect. All you have to do is inform us that you are revoking your consent.
                            p
                                | The data previously collected will then be deleted as soon as processing is no longer necessary. However, we must
                                | observe any retention periods required under tax and commercial law.
                            h4 Newsletter
                            p
                                | If you register for our free newsletter, the data requested from you for this purpose, i.e. your email address and,
                                | optionally, your name and address, will be sent to us. We also store the IP address of your computer and the date
                                | and time of your registration. During the registration process, we will obtain your consent to receive this
                                | newsletter and the type of content it will offer, with reference made to this privacy policy. The data collected
                                | will be used exclusively to send the newsletter and will not be passed on to third parties.
                            p The legal basis for this is Art. 6 Para. 1 lit. a) GDPR.
                            p
                                | You may revoke your prior consent to receive this newsletter under Art. 7 Para. 3 GDPR with future effect. All you
                                | have to do is inform us that you are revoking your consent or click on the unsubscribe link contained in each
                                | newsletter.
                            h4 Contact
                            p
                                | If you contact us via email or the contact form, the data you provide will be used for the purpose of processing your
                                | request. We must have this data in order to process and answer your inquiry; otherwise we will not be able to answer
                                | it in full or at all.
                            p The legal basis for this data processing is Art. 6 Para. 1 lit. b) GDPR.
                            p
                                | Your data will be deleted once we have fully answered your inquiry and there is no further legal obligation to store
                                | your data, such as if an order or contract resulted therefrom.
                            h4 User posts, comments, and ratings
                            p
                                | We offer you the opportunity to post questions, answers, opinions, and ratings on our website, hereinafter referred
                                | to jointly as "posts." If you make use of this opportunity, we will process and publish your post, the date and time
                                | you submitted it, and any pseudonym you may have used.
                            p
                                | The legal basis for this is Art. 6 Para. 1 lit. a) GDPR. You may revoke your prior consent under Art. 7 Para. 3 GDPR
                                | with future effect. All you have to do is inform us that you are revoking your consent.
                            p
                                | In addition, we will also process your IP address and email address. The IP address is processed because we might
                                | have a legitimate interest in taking or supporting further action if your post infringes the rights of third parties
                                | and/or is otherwise unlawful.
                            p
                                | In this case, the legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in any legal defense we
                                | may have to mount.
                            h4 Follow-up comments
                            p
                                | If you make posts on our website, we also offer you the opportunity to subscribe to any subsequent follow-up comments
                                | made by third parties. In order to be able to inform you about these follow-up comments, we will need to process
                                | your email address.
                            p
                                | The legal basis for this is Art. 6 Para. 1 lit. a) GDPR. You may revoke your prior consent to this subscription under
                                | Art. 7 Para. 3 GDPR with future effect. All you have to do is inform us that you are revoking your consent or click
                                | on the unsubscribe link contained in each email.
                            h4 Google Fonts
                            p
                                | Our website uses Google Fonts to display external fonts. This is a service provided by Google Ireland Limited, Gordon
                                | House, Barrow Street, Dublin 4, Irland (hereinafter: Google).
                            p Through certification according to the EU-US Privacy Shield
                            p
                                a(href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active" target="_blank" rel="noopener") https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
                            p
                                | Google guarantees that it will follow the EU's data protection regulations when processing data in the United States.
                            p
                                | To enable the display of certain fonts on our website, a connection to the Google server in the USA is established
                                | whenever our website is accessed.
                            p
                                | The legal basis is Art. 6 Para. 1 lit. f) GDPR. Our legitimate interest lies in the optimization and economic
                                | operation of our site.
                            p
                                | When you access our site, a connection to Google is established from which Google can identify the site from which
                                | your request has been sent and to which IP address the fonts are being transmitted for display.
                            p Google offers detailed information at
                            p
                                a(href="https://adssettings.google.com/authenticated" target="_blank" rel="noopener") https://adssettings.google.com/authenticated
                            p
                                a(href="https://policies.google.com/privacy" target="_blank" rel="noopener") https://policies.google.com/privacy
                            p in particular on options for preventing the use of data.
                            p
                                a(href="https://www.ratgeberrecht.eu/leistungen/muster-datenschutzerklaerung.html" target="_blank" rel="noopener") Model Data Protection Statement
                                |  for 
                                a(href="https://www.ratgeberrecht.eu/" target="_blank") Anwaltskanzlei Weiß & Partner

</template>

<script>
import { mapState } from "vuex";
export default {
    name: "PrivacyPolicy",
    data() {
        return {
            company: "Y&D Learning",
            street: "",
            postcode: "",
            state: "",
            town: "",
            phoneNumber: "",
            faxNumber: "",
            email: ""
        };
    },
    computed: {
        ...mapState(["isLoggedIn"])
    }
};
</script>

<style lang="sass">
h1
    padding-bottom: 5px
h2
    padding-bottom: 1px
.container-padding
    padding-top: 3%
    padding-left: 10%
    padding-right: 10%
    padding-bottom: 3%
</style>
