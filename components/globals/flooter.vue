<template>
    <footer class="mdc-flooter">
        <div class="row">
            <div class="column col-md-4 col-lg-6">
                <h3>Mappa del sito</h3>
                <ul>
                    <NuxtLink v-for="page in pages"
                              :key="page.id"
                              v-slot="{ href, navigate, isActive }"
                              custom
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
            <div class="column col-md-8 col-lg-6">
                <h3>Contatti e social</h3>
                <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                              title="Matteo Bilotta su Facebook"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-facebook"></span>
                </ActionAnchor>
                <ActionAnchor href="//github.com/Byloth"
                              title="Matteo Bilotta su GitHub"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-github"></span>
                </ActionAnchor>
                <ActionAnchor href="//www.instagram.com/i.byloth/"
                              title="Matteo Bilotta su Instagram"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-instagram"></span>
                </ActionAnchor>
                <ActionAnchor href="//www.linkedin.com/in/byloth/"
                              title="Matteo Bilotta su LinkedIn"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-linkedin-in"></span>
                </ActionAnchor>
                <ActionAnchor href="//open.spotify.com/user/21q4g5zjmgfv5qctquiqawkgq"
                              title="Matteo Bilotta su Spotify"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-spotify"></span>
                </ActionAnchor>
                <ActionAnchor href="//www.twitch.tv/bylo_th"
                              title="Matteo Bilotta su Twitch"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-twitch"></span>
                </ActionAnchor>
                <ActionAnchor href="//twitter.com/iByloth"
                              title="Matteo Bilotta su Twitter"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-twitter"></span>
                </ActionAnchor>
            </div>
        </div>
        <div class="license-info">
            <div>
                <a href="//creativecommons.org/licenses/by-sa/4.0/"
                   rel="license nofollow noopener noreferrer"
                   target="_blank"
                   title="Creative Commons Attribution-ShareAlike 4.0">
                    <CreativeCommonsIcon by sa />
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

    import ActionAnchor from "@/components/mdc/actions/action-anchor.vue";
    import CreativeCommonsIcon from "@/components/icons/creative-commons-icon.vue";

    export default Vue.extend({
        name: "Flooter",
        components: { ActionAnchor, CreativeCommonsIcon },
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

        & > .row > .column
        {
            padding: 0px 1em;

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
                        $active-color: lighten($color: variables.$primary-color, $amount: 25);

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
                margin-right: 0.25em;

                &::before,
                &::after
                {
                    background-color: #FFFFFF;
                }
            }
        }
        & > .license-info
        {
            padding: 0px 1em;
            margin-top: 1em;
            text-align: center;
        }

        @media print
        {
            display: none;
        }
    }
</style>
