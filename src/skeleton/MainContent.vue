<template>
    <div id="main">
        <div class="mdc-card">
            <div id="nav">
                <span v-for="page in pages" :key="page.id">
                    <router-link :to="page.path">{{ page.title }}</router-link> |
                </span>
            </div>
            <slot></slot>
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
        background-color: #F1F1F1;
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 0.25em 0.5em 0.5em #3F3F3F;
        color: #2C3E50;
        margin-bottom: 250px;
        padding: 8px;
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
