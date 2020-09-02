<template>
    <card-layout>
        <main id="home-page">
            <img alt="Vue logo" src="../assets/logo.png" />
            <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
        </main>
    </card-layout>
</template>

<script lang="ts">
    import Vue from "vue";

    import HelloWorld from "@/components/HelloWorld.vue";
    import CardLayout from "@/layouts/CardLayout.vue";

    export default Vue.extend({
        name: "HomePage",
        components: {
            "card-layout": CardLayout,
            "hello-world": HelloWorld
        }
    });
</script>
