<template>
    <footer id="flooter">
        <div class="row">
            <div class="col-md-6">
                <h3>Mappa del sito</h3>
                <ul>
                    <router-link v-for="page in pages"
                                 :key="page.id"
                                 v-slot="{ href, route, navigate, isActive, isExactActive }"
                                 :to="page">
                        <li :class="[isExactActive && 'active']">
                            <a :href="href" @click="navigate">
                                {{ page.title }}
                            </a>
                        </li>
                    </router-link>
                </ul>
                <div>
                </div>
            </div>
            <div class="col-md-6">
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
                   title="Creative Commons Attribution-ShareAlike 4.0">
                    <creative-commons-icon />
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
    import CreativeCommonsIcon from "@/components/icons/CreativeCommonsIcon.vue";

    @Component({
        name: "Flooter",
        components: {
            "creative-commons-icon": CreativeCommonsIcon,
            "ripple-anchor": RippleAnchor
        }
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
    @use "~@/styles/variables";

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

            & > div.col-md-6
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
                }

                & > ul
                {
                    list-style: none;

                    & > li
                    {
                        position: relative;

                        &::before
                        {
                            content: "•";
                            font-size: 1.25em;
                            left: -0.9em;
                            position: absolute;
                            top: -2px;
                        }

                        &.active
                        {
                            $active-color: lighten(variables.$primary-color, 30);

                            &::before
                            {
                                color: $active-color;
                                content: "»";
                                font-size: 1em;
                                left: -1.125em;
                                top: -1px;
                            }
                            & > a
                            {
                                color: $active-color;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
