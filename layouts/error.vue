<template>
    <CardLayout id="error-page">
        <main>
            <h1>
                Error {{ error.statusCode }}!
                <span class="fas fa-frown-open"></span>
            </h1>
            <h2>
                <code>{{ error.message }}.</code>
            </h2>
            <hr />
            <p>
                Ritorna alla
                <NuxtLink to="/">
                    home
                </NuxtLink>
            </p>
        </main>
    </CardLayout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "./pages/card-layout.vue";

    export default Vue.extend({
        name: "ErrorLayout",
        components: { CardLayout },
        props: {
            error: {
                default: () => ({ }),

                type: Object
            }
        },
        head: {
            title: "Byloth's Website",
            titleTemplate: "%s"
        }
    });
</script>

<style lang="scss" scoped>
    #error-page
    {
        text-align: center;

        main
        {
            & > h1 > .fa-frown-open
            {
                color: #FFFFFF;
                margin-left: 0.25em;
                text-shadow: 0px -1px 0px #000000, 1px -1px 0px #000000, 1px 0px 0px #000000, 1px 1px 0px #000000,
                            0px 1px 0px #000000, -1px 1px 0px #000000, -1px 0px 0px #000000, -1px -1px 0px #000000;
            }
            & > p
            {
                margin-bottom: 0px;
                text-align: right;
            }
        }
    }
</style>
