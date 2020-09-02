<template>
    <card-layout>
        <main id="about-page">
            <h1>This is the about page.</h1>
        </main>
    </card-layout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/CardLayout.vue";

    export default Vue.extend({
        name: "AboutPage",
        components: { "card-layout": CardLayout }
    });
</script>
