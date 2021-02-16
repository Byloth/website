<template>
    <CardLayout>
        <main class="under-construction">
            <h1>{{ title }}</h1>
            <span class="material-icons">engineering</span>
            <h3>
                Purtroppo, risulta essere ancora in costruzione... Ritorna tra un po'!
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

    import CardLayout from "./card-layout.vue";

    export default Vue.extend({
        name: "UnderConstruction",
        components: { CardLayout },
        props: {
            title: {
                required: true,
                type: String
            }
        }
    });
</script>

<style lang="scss" scoped>
    .under-construction
    {
        text-align: center;

        & > h3
        {
            font-weight: normal;
        }
        & > hr
        {
            border: none;
            border-top: 1px solid rgba(0, 0, 0, 0.2);
        }
        & > p
        {
            margin-bottom: 0px;
            text-align: right;
        }

        & > .material-icons
        {
            font-size: 10em;
        }
    }
</style>
