<template>
    <skeleton-loader class="title-loader" />
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "TitleLoader" });
</script>

<style lang="scss" scoped>
    .title-loader
    {
        border-radius: 1em;
        height: 2em;
        margin: 0.67em 0px;
    }
</style>
