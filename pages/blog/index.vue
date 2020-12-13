<template>
    <CardLayout id="blog-page">
        <main>
            <h1>This is the main BLog page.</h1>
        </main>
    </CardLayout>
</template>

<script lang="ts">
    import Vue from "vue";

    import CardLayout from "@/layouts/pages/card-layout.vue";

    export default Vue.extend({
        name: "BlogPage",
        components: { CardLayout },

        head: { title: "BLog" }
    });
</script>

<style lang="scss" scoped>
    #blog-page
    {
        text-align: center;
    }
</style>
