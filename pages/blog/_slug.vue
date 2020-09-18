<template>
    <main id="article-page">
        <h1>This is an article page.</h1>
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "ArticlePage" });
</script>

<style lang="scss" scoped>
    #article-page
    {
        margin-bottom: 250px;
        padding: 32px;
        text-align: center;
    }
</style>
