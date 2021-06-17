<template>
    <!-- eslint-disable vue/multiline-html-element-content-newline -->
    <CardLayout id="privacy-page">
        <main>
            <h1>Privacy &amp; Cookie</h1>
            <p>
                Il presente sito web utilizza un insieme minimale di cookie
                necessari, semplicemente, per il corretto funzionamento dello stesso.<br />
                Non traccia e non salva direttamente alcuna informazione personale dell'utente,
                altresì fa uso di servizi esterni di terze parti che, a loro volta,
                potrebbero tracciare l'utente oppure salvarne alcune informazioni personali.
            </p>
            <p>
                Si noti che, qualora l'utente decida di inviare un'e-mail tramite l'apposito form di contatto,
                acconsentirà automaticamente all'eventuale salvataggio del proprio nome, cognome, indirizzo e-mail
                o qualunque altra informazione personale decida, in maniera
                autonoma, di inserire all'interno del corpo del messaggio.
            </p>
            <p>
                I servizi esterni di terze parti di cui, questo sito, usufruisce sono <i>(in ordine alfabetico)</i>:
            </p>
            <dl>
                <dt>
                    <a href="//marketingplatform.google.com/about/analytics/"
                       rel="nofollow noopener noreferrer"
                       target="_blank">Google Analytics</a> (Google Inc.)</dt>
                <dd>
                    Viene utilizzato per raccogliere informazioni anonime riguardanti
                    il traffico ricevuto da questo sito per meri scopi di analisi / statistici.
                </dd>
                <dt>
                    <a href="//fonts.google.com/about/"
                       rel="nofollow noopener noreferrer"
                       target="_blank">Google Fonts</a> (Google Inc.)</dt>
                <dd>
                    Viene utilizzato per visualizzare correttamente i font utilizzati in questo sito.
                </dd>
                <dt>
                    <a href="//www.youtube.com/about/"
                       rel="nofollow noopener noreferrer"
                       target="_blank">YouTube</a> (Google Inc.)</dt>
                <dd>
                    Viene utilizzato per visualizzare contenuti esterni a questo sito all'interno dello stesso.
                </dd>
            </dl>
            <p>
                Di seguito i link che rimandano, rispettivamente, al documento esteso della
                <a href="//policies.google.com/privacy"
                   rel="nofollow noopener noreferrer"
                   target="_blank">Privacy Policy</a>
                dei servizi di <strong>Google Inc.</strong> utilizzati e alla procedura di
                <a href="//tools.google.com/dlpage/gaoptout"
                   rel="nofollow noopener noreferrer"
                   target="_blank">Opt-Out</a>,
                necessaria qualora non si volesse più condividere le
                proprie informazioni di navigazione con suddetta società.
            </p>
            <p>
                Si coglie l'occasione per augurare ai visitatori una piacevole navigazione all'interno di questo sito.
            </p>
            <hr />
            <div class="row">
                <div class="col-6">
                    Ultimo aggiornamento: 17/06/2021
                </div>
                <div class="col-6 text-right">
                    Torna alla
                    <NuxtLink :to="{ name: 'index' }">
                        home
                    </NuxtLink>
                </div>
            </div>
        </main>
    </CardLayout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/pages/card-layout.vue";

    export default Vue.extend({
        name: "ArticlePage",
        components: { CardLayout },

        head: { title: "Privacy & Cookie" }
    });
</script>

<style lang="scss" scoped>
    #privacy-page
    {
        main
        {
            margin: 2em;

            & > h1
            {
                text-align: center;
            }
            & > hr
            {
                margin: 1em;
            }
            & > dl
            {
                margin-bottom: 1.5em;
            }

            & > .row > .text-right
            {
                text-align: right;
            }
        }
    }
</style>
