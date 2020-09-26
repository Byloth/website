<template>
    <footer class="mdc-flooter">
        <div class="row">
            <div class="col-md-6">
                <h3>Mappa del sito</h3>
                <ul>
                    <router-link v-for="page in pages"
                                 :key="page.id"
                                 v-slot="{ href, route, navigate, isActive, isExactActive }"
                                 :exact="page.path === '/'"
                                 :to="page">
                        <li :class="[isActive && 'active']">
                            <a :href="href" @click="navigate">
                                {{ page.title }}
                            </a>
                        </li>
                    </router-link>
                </ul>
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
        <div class="license-info">
            <div>
                <a rel="license"
                   href="http://creativecommons.org/licenses/by-sa/4.0/"
                   target="_blank"
                   title="Creative Commons Attribution-ShareAlike 4.0">
                    <creative-commons-icon />
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

    export default Vue.extend({
        name: "Flooter",
        computed: {
            author(): string { return this.$store.state.config.author; },
            pages(): string { return this.$store.state.config.pages; }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    @keyframes pulse
    {
        0% { transform: scale(1); }
        15% { transform: scale(1); }
        30% { transform: scale(1.25); }
        52% { transform: scale(1); }
        68% { transform: scale(1.25); }
        90% { transform: scale(1); }
        100% { transform: scale(1); }
    }

    .mdc-flooter
    {
        background-color: #35363A;
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

            & > p > .fa-heart
            {
                animation: pulse 1.5s infinite;
            }
        }
    }
</style>
