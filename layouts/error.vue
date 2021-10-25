<template>
    <CardLayout id="error-page">
        <main>
            <h1>Error {{ error.statusCode }}!</h1>
            <span class="fas fa-frown-open"></span>
            <h3>
                <code>{{ error.message }}.</code>
            </h3>
            <hr />
            <p class="text-right">
                Torna alla
                <NuxtLink :to="{ name: 'index' }">
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
        name: "ErrorPage",
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
            margin: 2em;

            & > h3
            {
                font-weight: normal;
            }
            & > p
            {
                margin-bottom: 0px;
                text-align: right;
            }

            & > .fa-frown-open
            {
                font-size: 10em;
            }
        }
    }
</style>
