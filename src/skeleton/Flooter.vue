<template>
    <footer id="flooter">
        <div class="row" style="flex: auto;">
            <div class="col" style="padding: 0px 16px;">
                <h3>Mappa del sito</h3>
                <div v-for="page in pages" :key="page.id">
                    <router-link :to="page.path" style="color: white;">
                        {{ page.title }}
                    </router-link>
                </div>
            </div>
            <div class="col" style="padding: 0px 16px;">
                <h3>Contatti e social</h3>
                <a href="//www.facebook.com/matteo.bilotta"
                   target="_blank"
                   title="Byloth on Facebook"
                   style="color: white; font-size: 2em; margin: 0.5em;">
                    <span class="fab fa-facebook"></span>
                </a>
                <a href="//github.com/Byloth"
                   target="_blank"
                   title="Byloth on GitHub"
                   style="color: white; font-size: 2em; margin: 0.5em;">
                    <span class="fab fa-github"></span>
                </a>
                <a href="//www.instagram.com/i.byloth/"
                   target="_blank"
                   title="Byloth on Instagram"
                   style="color: white; font-size: 2em; margin: 0.5em;">
                    <span class="fab fa-instagram"></span>
                </a>
                <a href="//www.linkedin.com/in/byloth/"
                   target="_blank"
                   title="Byloth on LinkedIn"
                   style="color: white; font-size: 2em; margin: 0.5em;">
                    <span class="fab fa-linkedin-in"></span>
                </a>
                <a href="//twitter.com/iByloth"
                   target="_blank"
                   title="Byloth on Twitter"
                   style="color: white; font-size: 2em; margin: 0.5em;">
                    <span class="fab fa-twitter"></span>
                </a>
            </div>
        </div>
        <div style="text-align: center;">
            <p>
                <a rel="license"
                   href="http://creativecommons.org/licenses/by-sa/4.0/"
                   target="_blank"
                   title="CC BY-SA 4.0"
                   style="background-color: #C7C7C7; border-radius: 5px; box-shadow: 1px 1px 4px #000000; display: inline-block; font-size: 24px;">
                    <span class="fab fa-creative-commons" style="margin: 0.25em;"></span>
                    <span class="fab fa-creative-commons-by" style="margin: 0.25em;"></span>
                    <span class="fab fa-creative-commons-sa" style="margin: 0.25em;"></span>
                </a>
            </p>
            <p>
                Designed &amp; Developed with <span class="fas fa-heart red"></span> by {{ author }}.
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import config, { PageOptions } from "@/config";

    @Component({ name: "Flooter" })
    export default class Flooter extends Vue
    {
        public author: string;
        public pages: PageOptions[];

        public constructor()
        {
            super();

            this.author = config.author;
            this.pages = config.pages;
        }
    }
</script>

<style lang="scss" scoped>
    #flooter
    {
        align-items: stretch;
        background-color: #3F3F3F;
        bottom: 0px;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        height: 250px;
        position: fixed;
        text-shadow: 1px 1px 4px #000000;
        width: 100%;
        z-index: -1;

        a
        {
            color: #1976D2;
        }
    }
</style>
