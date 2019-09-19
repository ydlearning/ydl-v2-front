<template lang="pug">
    //- Datenschutzerklärung / Privacy Policy
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
                                    to="/privacy_policy"
                                )
                                    v-icon mdi-web
                            span English

                    v-card-text.body-1
                        div 
                            h2 1. Datenschutz auf einen Blick
                            h3 Allgemeine Hinweise
                            p
                                | Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                                | passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
                                | identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                                | diesem Text aufgeführten Datenschutzerklärung.
                            h3 Datenerfassung auf dieser Website
                            p
                                strong Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                            p
                                | Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                                | Impressum dieser Website entnehmen.
                            p
                                strong Wie erfassen wir Ihre Daten?
                            p
                                | Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten
                                | handeln, die Sie in ein Kontaktformular eingeben.
                            p
                                | Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
                                | technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
                                | Daten erfolgt automatisch, sobald Sie diese Website betreten.
                            p
                                strong Wofür nutzen wir Ihre Daten?
                            p
                                | Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten
                                | können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                            p
                                strong Welche Rechte haben Sie bezüglich Ihrer Daten?
                            p
                                | Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                                | personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser
                                | Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der
                                | im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der
                                | zuständigen Aufsichtsbehörde zu.
                            p
                                | Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                                | personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter &bdquo;Recht
                                | auf Einschränkung der Verarbeitung“.
                            h2 2. Hosting
                            h3 Externes Hosting
                            p
                                | Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser
                                | Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
                                | Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige
                                | Daten, die über eine Website generiert werden, handeln.
                            p
                                | Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
                                | bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
                                | Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                            p
                                | Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                                | erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                            h2 3. Allgemeine Hinweise und Pflichtinformationen
                            h3 Datenschutz
                            p
                                | Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                                | personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
                                | Datenschutzerklärung.
                            p
                                | Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
                                | Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung
                                | erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
                                | Zweck das geschieht.
                            p
                                | Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
                                | Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                                | möglich.
                            h3 Hinweis zur verantwortlichen Stelle

                            KontaktDaten() 

                            p
                                | Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
                                | über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
                                | Ä.) entscheidet.
                            h3 Widerruf Ihrer Einwilligung zur Datenverarbeitung
                            p
                                | Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                                | können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail
                                | an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
                                | unberührt.
                            h3
                                | Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                            p
                                | WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS
                                | RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
                                | PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
                                | PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                                | DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT
                                | MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
                                | NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                                | GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                            p
                                | WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                                | WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                                | EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                                | WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
                                | (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                            h3 Beschwerderecht bei der zuständigen Aufsichtsbehörde
                            p
                                | Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
                                | Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                                | oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
                                | verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                            h3 Recht auf Datenübertragbarkeit
                            p
                                | Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                                | automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
                                | aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
                                | verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                            h3 SSL- bzw. TLS-Verschlüsselung
                            p
                                | Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
                                | Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
                                | TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
                                | von &bdquo;http://“ auf &bdquo;https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                            p
                                | Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
                                | nicht von Dritten mitgelesen werden.
                            h3 Auskunft, Löschung und Berichtigung
                            p
                                | Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über
                                | Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung
                                | und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                                | personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                            h3 Recht auf Einschränkung der Verarbeitung
                            p
                                | Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu
                                | können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf
                                | Einschränkung der Verarbeitung besteht in folgenden Fällen:
                            ul
                                li
                                    | Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in
                                    | der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
                                    | Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                li
                                    | Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
                                    | statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                                li
                                    | Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung
                                    | oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die
                                    | Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                li
                                    | Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und
                                    | unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben
                                    | Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                            p
                                | Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
                                | ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
                                | Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen
                                | Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines
                                | Mitgliedstaats verarbeitet werden.
                            h3 Widerspruch gegen Werbe-E-Mails
                            p
                                | Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht
                                | ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der
                                | Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
                                | Werbeinformationen, etwa durch Spam-E-Mails, vor.
                            h2 4. Datenerfassung auf dieser Website
                            h3 Cookies
                            p
                                | Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und
                                | enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                                | Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                            p
                                | Die meisten der von uns verwendeten Cookies sind so genannte &bdquo;Session-Cookies“. Sie werden nach Ende
                                | Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese
                                | löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                            p
                                | Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies
                                | nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen
                                | sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung
                                | von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                            p
                                | Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von
                                | Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6
                                | Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies
                                | zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine entsprechende Einwilligung
                                | abgefragt wurde (z. B. eine Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung ausschließlich
                                | auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit widerrufbar.
                            p
                                | Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in
                                | dieser Datenschutzerklärung gesondert behandelt.
                            p
                                | Gehe zu den: 
                                router-link(to="/cookies") Cookkie Einstellungen
                            h3 Server-Log-Dateien
                            p
                                | Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr
                                | Browser automatisch an uns übermittelt. Dies sind:
                            ul
                                li Browsertyp und Browserversion
                                li verwendetes Betriebssystem
                                li Referrer URL
                                li Hostname des zugreifenden Rechners
                                li Uhrzeit der Serveranfrage
                                li IP-Adresse
                            p
                                | Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                            p
                                | Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                                | berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu
                                | müssen die Server-Log-Files erfasst werden.
                            h3 Kontaktformular
                            p
                                | Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der
                                | von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei
                                | uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            p
                                | Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                                | Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                                | erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an
                                | der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
                                | (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                            p
                                | Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern,
                                | Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B.
                                | nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere
                                | Aufbewahrungsfristen – bleiben unberührt.
                            h3 Anfrage per E-Mail, Telefon oder Telefax
                            p
                                | Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
                                | personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und
                                | verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                            p
                                | Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
                                | Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                                | erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1
                                | lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes
                                | Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.
                            p
                                | Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
                                | auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
                                | (z.B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
                                | insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                            h3 Kommentarfunktion auf dieser Website
                            p
                                | Für die Kommentarfunktion auf dieser Seite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der
                                | Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht anonym posten, der von Ihnen gewählte
                                | Nutzername gespeichert.
                            p
                                strong Speicherung der IP-Adresse
                            p
                                | Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, die Kommentare verfassen. Da wir Kommentare auf dieser
                                | Website nicht vor der Freischaltung prüfen, benötigen wir diese Daten, um im Falle von Rechtsverletzungen
                                | wie Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können.
                            p
                                strong Abonnieren von Kommentaren
                            p
                                | Als Nutzer der Seite können Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine
                                | Bestätigungsemail, um zu prüfen, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können
                                | diese Funktion jederzeit über einen Link in den Info-Mails abbestellen. Die im Rahmen des Abonnierens von
                                | Kommentaren eingegebenen Daten werden in diesem Fall gelöscht; wenn Sie diese Daten für andere Zwecke und
                                | an anderer Stelle (z.B. Newsletterbestellung) an uns übermittelt haben, verbleiben die jedoch bei uns.
                            p
                                strong Speicherdauer der Kommentare
                            p
                                | Die Kommentare und die damit verbundenen Daten (z.B. IP-Adresse) werden gespeichert und verbleiben auf dieser
                                | Website, bis der kommentierte Inhalt vollständig gelöscht wurde oder die Kommentare aus rechtlichen
                                | Gründen gelöscht werden müssen (z.B. beleidigende Kommentare).
                            p
                                strong Rechtsgrundlage
                            p
                                | Die Speicherung der Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können
                                | eine von Ihnen erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.
                                | Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf
                                | unberührt.
                            h2 5. Newsletter
                            h3 Newsletterdaten
                            p
                                | Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine
                                | E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der
                                | angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht
                                | bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der
                                | angeforderten Informationen und geben diese nicht an Dritte weiter.
                            p
                                | Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage
                                | Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der
                                | E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über
                                | den &bdquo;Austragen“-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten
                                | Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                            p
                                | Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus
                                | dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters aus
                                | der Newsletterverteilerliste gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden bleiben hiervon
                                | unberührt.
                            p
                                | Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
                                | Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, um künftige Mailings zu verhindern. Die Daten
                                | aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies
                                | dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von
                                | Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist
                                | zeitlich nicht befristet.
                                strong
                                    | Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse
                                    | überwiegen.
                            h2 6. Plugins und Tools
                            h3 Google Web Fonts
                            p
                                | Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt
                                | werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte
                                | und Schriftarten korrekt anzuzeigen.
                            p
                                | Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch
                                | erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von
                                | Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote.
                                | Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                            p
                                | Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
                            p
                                | Weitere Informationen zu Google Web Fonts finden Sie unter 
                                a(href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer") https://developers.google.com/fonts/faq
                                |  und in der
                                |     Datenschutzerklärung von Google: 
                                a(href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer") https://policies.google.com/privacy?hl=de
                                | .
                            p
                                | Quelle: 
                                a(href="https://www.e-recht24.de") eRecht24
</template>

<script>
import KontaktDaten from "@/components/KontaktDaten";
import { mapState } from "vuex";
export default {
    name: "Datenschutzerklaerung",
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
