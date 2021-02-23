<template>
    <!-- eslint-disable vue/multiline-html-element-content-newline -->
    <CardLayout id="privacy-page">
        <main>
            <h1>Privacy &amp; Cookie</h1>
            <p>
                Il presente sito web utilizza un insieme >minimale di cookie
                necessari per il corretto funzionamento dello stesso.<br />
                Non traccia e non salva alcuna informazione personale dell'utente direttamente
                altresì fa uso di servizi esterni di terze parti che, a loro volta,
                potrebbero tracciare l'utente oppure salvarne alcune informazioni personali.
            </p>
            <p>
                Si noti che, qualora l'utente decida di inviare un'e-mail tramite l'apposito form di contatto,
                acconsentirà automaticamente all'eventuale salvataggio del proprio nome, cognome, indirizzo e-mail
                o qualunque altra informazione personale decida di inserire all'interno del corpo del messaggio.
            </p>
            <p>
                I servizi esterni di terze parti di cui, questo sito, usufruisce sono (in ordine alfabetico):
            </p>
            <dl>
                <dt>
                    <a href="//marketingplatform.google.com/about/analytics/"
                       rel="nofollow noopener noreferrer"
                       target="_blank">Google Analytics</a> (Google Inc.)</dt>
                <dd>
                    Viene utilizzato per raccogliere informazioni anonime riguardanti
                    il traffico ricevuto da questo sito per meri scopi di analisi.
                </dd>
                <dt>
                    <a href="//fonts.google.com/about/"
                       rel="nofollow noopener noreferrer"
                       target="_blank">Google Fonts</a> (Google Inc.)</dt>
                <dd>
                    Viene utilizzato per visualizzare correttamente il font di questo sito.
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
                Di seguito i link che rimanano, rispettivamente, al documento esteso della
                <a href="//policies.google.com/privacy"
                   rel="nofollow noopener noreferrer"
                   target="_blank">Privacy Policy</a>
                dei servizi di Google Inc. utilizzati e alla procedura di
                <a href="//tools.google.com/dlpage/gaoptout"
                   rel="nofollow noopener noreferrer"
                   target="_blank">Opt-Out</a>
                qualora non si volesse più condividere le proprie informazioni di navigazione con Google Inc.
            </p>
            <hr />
            <div class="row">
                <div class="col-6">
                    Ultimo aggiornamento: 23/02/2021
                </div>
                <div class="col-6 text-right">
                    Torna alla
                    <NuxtLink :to="{ name: 'index' }">
                        home
                    </NuxtLink>
                </div>
            </div>
            </p>
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
        h1
        {
            text-align: center;
        }
        hr
        {
            margin: 1em;
        }

        .text-right
        {
            text-align: right;
        }
    }
</style>
