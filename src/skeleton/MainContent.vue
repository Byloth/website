<template>
    <div id="main">
        <div class="mdc-card">
            <div id="nav">
                <span v-for="page in pages" :key="page.id">
                    <router-link :to="page.path">{{ page.title }}</router-link> |
                </span>
            </div>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import config, { PageOptions } from "@/config";

    @Component({ name: "MainContent" })
    export default class MainContent extends Vue
    {
        public readonly pages: PageOptions[];

        public constructor()
        {
            super();

            this.pages = config.pages;
        }
    }
</script>

<style lang="scss" scoped>
    #main
    {
        color: #2C3E50;
        padding: 200px 8px 8px;
        text-align: center;

        & > .mdc-card
        {
            margin: auto;
            padding: 8px;
            max-width: 1158px;
        }

        @media (min-width: 600px)  /* Small */
        {
            /* ... */
        }
        @media (min-width: 960px)  /* Medium */
        {
            /* ... */
        }
        @media (min-width: 1264px)  /* Large */
        {
            /* ... */
        }
        @media (min-width: 1904px)  /* Extra-large */
        {
            /* ... */
        }
    }

    #nav
    {
        padding: 22px;

        a
        {
            color: #2C3E50;
            font-weight: bold;

            &.router-link-exact-active
            {
                color: #42B983;
            }
        }
    }
</style>
