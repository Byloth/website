<template>
    <CardLayout id="home-page">
        <main>
            <VueIcon />
            <NuxtIcon />
            <h1 class="title">
                Byloth's Website
            </h1>
            <h2 class="subtitle">
                An example of a Nuxt.js app <span title="I swear! It works for real! 😱">working correctly</span> using Typescript.
            </h2>
            <div class="links">
                <a href="https://nuxtjs.org/"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="button--green">
                    Documentation
                </a>
                <a href="https://github.com/nuxt/nuxt.js"
                   target="_blank"
                   rel="noopener noreferrer"
                   class="button--grey">
                    GitHub
                </a>
            </div>
        </main>
    </CardLayout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/pages/card-layout.vue";

    export default Vue.extend({
        name: "HomePage",
        components: { CardLayout },

        head: { title: "Home" }
    });
</script>

<style lang="scss" scoped>
    #home-page
    {
        main
        {
            text-align: center;

            & > .vue-icon,
            & > .nuxt-icon
            {
                width: 200px;
            }
            & > .title
            {
                display: block;
                color: #35495E;
            }
            & > .subtitle
            {
                color: #526488;
                padding-bottom: 15px;
            }
            & > .links
            {
                padding-top: 15px;

                & > .button--green
                {
                    display: inline-block;
                    border-radius: 4px;
                    border: 1px solid #3B8070;
                    color: #3B8070;
                    text-decoration: none;
                    padding: 10px 30px;

                    &:hover
                    {
                        color: #fff;
                        background-color: #3B8070;
                    }
                }
                & > .button--grey
                {
                    display: inline-block;
                    border-radius: 4px;
                    border: 1px solid #35495E;
                    color: #35495E;
                    text-decoration: none;
                    padding: 10px 30px;
                    margin-left: 15px;

                    &:hover
                    {
                        color: #fff;
                        background-color: #35495E;
                    }
                }
            }
        }
    }
</style>
