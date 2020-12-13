<template>
    <CardLayout id="about-page">
        <main>
            <h1>This is the about page.</h1>
        </main>
    </CardLayout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/pages/card-layout.vue";

    export default Vue.extend({
        name: "AboutPage",
        components: { CardLayout },

        head: { title: "Chi sono" }
    });
</script>

<style lang="scss" scoped>
    #about-page
    {
        text-align: center;
    }
</style>
