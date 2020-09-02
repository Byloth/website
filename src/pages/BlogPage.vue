<template>
    <card-layout>
        <main id="blog-page">
            <h1>This is the main BLog page.</h1>
        </main>
    </card-layout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/CardLayout.vue";

    export default Vue.extend({
        name: "BlogPage",
        components: { "card-layout": CardLayout }
    });
</script>
