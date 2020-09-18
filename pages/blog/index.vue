<template>
    <main id="blog-page">
        <h1>This is the main BLog page.</h1>
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "BlogPage" });
</script>

<style lang="scss" scoped>
    #blog-page
    {
        margin-bottom: 250px;
        padding: 32px;
        text-align: center;
    }
</style>
