<template>
    <footer id="flooter">
        <div class="row">
            <div class="col">
                <h3>Mappa del sito</h3>
                <div v-for="page in pages" :key="page.id">
                    <router-link :to="page.path">
                        {{ page.title }}
                    </router-link>
                </div>
            </div>
            <div class="col">
                <h3>Contatti e social</h3>
                <ripple-anchor description="Matteo Bilotta su Facebook"
                               href="//www.facebook.com/matteo.bilotta"
                               target="_blank">
                    <span class="fab fa-facebook"></span>
                </ripple-anchor>
                <ripple-anchor description="Matteo Bilotta su GitHub"
                               href="//github.com/Byloth"
                               target="_blank">
                    <span class="fab fa-github"></span>
                </ripple-anchor>
                <ripple-anchor description="Matteo Bilotta su Instagram"
                               href="//www.instagram.com/i.byloth/"
                               target="_blank">
                    <span class="fab fa-instagram"></span>
                </ripple-anchor>
                <ripple-anchor description="Matteo Bilotta su LinkedIn"
                               href="//www.linkedin.com/in/byloth/"
                               target="_blank">
                    <span class="fab fa-linkedin-in"></span>
                </ripple-anchor>
                <ripple-anchor description="Matteo Bilotta su Twitter"
                               href="//twitter.com/iByloth"
                               target="_blank">
                    <span class="fab fa-twitter"></span>
                </ripple-anchor>
            </div>
        </div>
        <div style="text-align: center;">
            <p>
                <a rel="license"
                   href="http://creativecommons.org/licenses/by-sa/4.0/"
                   target="_blank"
                   title="CC BY-SA 4.0"
                   style="background-color: #C7C7C7; border-radius: 5px; box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25); display: inline-block; font-size: 24px;">
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

    import RippleAnchor from "@/components/RippleAnchor.vue";

    @Component({
        name: "Flooter",
        components: { "ripple-anchor": RippleAnchor }
    })
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
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
        width: 100%;
        z-index: -1;

        & > div.row
        {
            flex: auto;

            & > div.col
            {
                padding: 0px 16px;

                & a
                {
                    color: #FFFFFF;
                    margin-right: 0.5em;

                    &::before,
                    &::after
                    {
                        background-color: #FFFFFF;
                        background-color: var(--mdc-theme-on-primary, #FFFFFF);
                    }

                    &.router-link-exact-active
                    {
                        color: #8CBAE8;
                    }
                }
            }
        }
    }
</style>
