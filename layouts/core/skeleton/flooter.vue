<template>
    <footer class="mdc-flooter">
        <div class="row">
            <div class="col-md-6">
                <h3>Mappa del sito</h3>
                <ul>
                    <NuxtLink v-for="page in pages"
                              :key="page.id"
                              v-slot="{ href, navigate, isActive }"
                              :exact="page.path === '/'"
                              :to="page">
                        <li :class="[isActive && 'active']">
                            <a :href="href" @click="navigate">
                                {{ page.title }}
                            </a>
                        </li>
                    </NuxtLink>
                </ul>
            </div>
            <div class="col-md-6">
                <h3>Contatti e social</h3>
                <RippleAnchor href="//www.facebook.com/matteo.bilotta"
                              title="Matteo Bilotta su Facebook"
                              target="_blank">
                    <span class="fab fa-facebook"></span>
                </RippleAnchor>
                <RippleAnchor href="//github.com/Byloth"
                              title="Matteo Bilotta su GitHub"
                              target="_blank">
                    <span class="fab fa-github"></span>
                </RippleAnchor>
                <RippleAnchor title="Matteo Bilotta su Instagram"
                              href="//www.instagram.com/i.byloth/"
                              target="_blank">
                    <span class="fab fa-instagram"></span>
                </RippleAnchor>
                <RippleAnchor title="Matteo Bilotta su LinkedIn"
                              href="//www.linkedin.com/in/byloth/"
                              target="_blank">
                    <span class="fab fa-linkedin-in"></span>
                </RippleAnchor>
                <RippleAnchor href="//twitter.com/iByloth"
                              title="Matteo Bilotta su Twitter"
                              target="_blank">
                    <span class="fab fa-twitter"></span>
                </RippleAnchor>
            </div>
        </div>
        <div class="license-info">
            <div>
                <a rel="license"
                   href="http://creativecommons.org/licenses/by-sa/4.0/"
                   target="_blank"
                   title="Creative Commons Attribution-ShareAlike 4.0">
                    <CreativeCommonsIcon />
                </a>
            </div>
            <p>
                Designed &amp; Developed with <span class="fas fa-heart red"></span> by {{ author }}
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapState } from "vuex";

    export default Vue.extend({
        name: "Flooter",
        computed: mapState("config", {
            author: "author",
            pages: "pages"
        })
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-flooter
    {
        background-color: variables.$chrome-incognito-color;
        bottom: 0px;
        color: #FFFFFF;
        position: fixed;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
        width: 100%;
        z-index: -1;

        & > .row > .col-md-6
        {
            padding: 0px 16px;

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

            & a
            {
                color: #FFFFFF;
                margin-right: 0.5em;

                &::before,
                &::after
                {
                    background-color: #FFFFFF;
                }
            }
        }
        & > .license-info
        {
            margin-top: 1em;
            text-align: center;
        }
    }
</style>
