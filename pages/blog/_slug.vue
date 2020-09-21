<template>
    <card-layout id="article-page">
        <main>
            <h1>This is an article page.</h1>
        </main>
    </card-layout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/pages/card-layout.vue";

    export default Vue.extend({
        name: "ArticlePage",
        components: { "card-layout": CardLayout }
    });
</script>

<style lang="scss" scoped>
    #article-page
    {
        text-align: center;
    }
</style>
