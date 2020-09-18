<template>
    <div>
        <nuxt />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "DefaultLayout" });
</script>

<style lang="scss">
    html
    {
        font-family:
            "Source Sans Pro",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            "Helvetica Neue",
            Arial,
            sans-serif;

        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after
    {
        box-sizing: border-box;
        margin: 0;
    }

    [title]
    {
        cursor: help;
        text-decoration: underline dotted;
    }
</style>
