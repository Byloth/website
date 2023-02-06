<script lang="ts" setup>
    import { useData } from "vitepress";

    import Default from "./layouts/Default.vue";
    import DoubleCols from "./layouts/DoubleCols.vue";
    import FloatingHeader from "./layouts/FloatingHeader.vue";

    const { frontmatter } = useData();
</script>

<template>
    <div v-if="frontmatter.layout !== false" id="bylotheme">
        <DoubleCols v-if="frontmatter.layout === 'double-cols'" />
        <FloatingHeader v-else-if="frontmatter.layout === 'floating-header'" />
        <Default v-else />
    </div>
    <div v-else>
    </div>
</template>

<style lang="scss">
    @import "./assets/scss/main";
</style>
