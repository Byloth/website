<template>
    <main id="home-page">
        <div>
            <nuxt-logo />
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
        </div>
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "HomePage" });
</script>

<style lang="scss" scoped>
    #home-page
    {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        & > div
        {
            & > .title
            {
                font-family:
                    "Quicksand",
                    "Source Sans Pro",
                    -apple-system,
                    BlinkMacSystemFont,
                    "Segoe UI",
                    Roboto,
                    "Helvetica Neue",
                    Arial,
                    sans-serif;

                display: block;
                font-weight: 300;
                font-size: 100px;
                color: #35495e;
                letter-spacing: 1px;
            }
            & > .subtitle
            {
                font-weight: 300;
                font-size: 42px;
                color: #526488;
                word-spacing: 5px;
                padding-bottom: 15px;
            }
            & > .links
            {
                padding-top: 15px;

                & > .button--green
                {
                    display: inline-block;
                    border-radius: 4px;
                    border: 1px solid #3b8070;
                    color: #3b8070;
                    text-decoration: none;
                    padding: 10px 30px;

                    &:hover
                    {
                        color: #fff;
                        background-color: #3b8070;
                    }
                }
                & > .button--grey
                {
                    display: inline-block;
                    border-radius: 4px;
                    border: 1px solid #35495e;
                    color: #35495e;
                    text-decoration: none;
                    padding: 10px 30px;
                    margin-left: 15px;

                    &:hover
                    {
                        color: #fff;
                        background-color: #35495e;
                    }
                }
            }
        }
    }
</style>
