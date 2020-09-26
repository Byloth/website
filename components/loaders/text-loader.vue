<template>
    <skeleton-loader class="text-loader" />
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "TextLoader" });
</script>

<style lang="scss" scoped>
    .text-loader
    {
        border-radius: 0.5em;
        height: 1em;
        margin: 1em 0px;
    }
</style>
