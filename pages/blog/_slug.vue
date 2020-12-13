<template>
    <CardLayout id="article-page">
        <main>
            <h1>This is an article page.</h1>
        </main>
    </CardLayout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/pages/card-layout.vue";

    export default Vue.extend({
        name: "ArticlePage",
        components: { CardLayout },

        head: { title: "Articolo" }
    });
</script>

<style lang="scss" scoped>
    #article-page
    {
        text-align: center;
    }
</style>
