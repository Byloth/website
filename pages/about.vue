<template>
    <main id="about-page">
        <h1>This is the about page.</h1>
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "AboutPage" });
</script>

<style lang="scss" scoped>
    #about-page
    {
        margin-bottom: 250px;
        padding: 32px;
        text-align: center;
    }
</style>
