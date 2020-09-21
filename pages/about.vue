<template>
    <card-layout id="about-page">
        <main>
            <h1>This is the about page.</h1>
        </main>
    </card-layout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/pages/card-layout.vue";

    export default Vue.extend({
        name: "AboutPage",
        components: { "card-layout": CardLayout }
    });
</script>

<style lang="scss" scoped>
    #about-page
    {
        text-align: center;
    }
</style>
