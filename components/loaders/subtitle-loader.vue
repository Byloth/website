<template>
    <skeleton-loader class="subtitle-loader" />
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "SubtitleLoader" });
</script>

<style lang="scss" scoped>
    .subtitle-loader
    {
        border-radius: 0.75em;
        height: 1.5em;
        margin: 0.83em 0px;
    }
</style>
