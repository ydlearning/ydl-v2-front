<template lang="pug">
    //- Impressum / Legal Disclosure / Legal Notice site
    v-container.container-padding(
        fluid 
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
                                    to="/legal_disclosure"
                                )
                                    v-icon mdi-web
                            span English
                    v-card-text.body-1
                        div 
                            h2 Angaben gemäß § 5 TMG

                            KontaktDaten() 

                            h2 Streitschlichtung
                            p
                                | Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                                a(href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer") https://ec.europa.eu/consumers/odr
                                | .
                                br
                                |  Unsere E-Mail-Adresse finden Sie oben im
                                |     Impressum.
                            p
                                | Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                                | teilzunehmen.
                            h3 Haftung für Inhalte
                            p
                                | Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                                | allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                                | verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                                | zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            p
                                | Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                                | hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                                | konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
                                | Inhalte umgehend entfernen.
                            h3 Haftung für Links
                            p
                                | Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
                                | können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                                | verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                                | wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                                | Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                            p
                                | Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                                | Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
                                | entfernen.
                            h3 Urheberrecht
                            p
                                | Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                | Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                                | Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
                                | Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                            p
                                | Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                                | Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
                                | aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                                | derartige Inhalte umgehend entfernen.
                            p
                                | Quelle: 
                                a(href="https://www.e-recht24.de") e-recht24.de
</template>

<script>
import KontaktDaten from "@/components/KontaktDaten";
import { mapState } from "vuex";
export default {
    name: "Impressum",
    computed: {
        ...mapState(["isLoggedIn"])
    },
    components: {
        KontaktDaten
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
