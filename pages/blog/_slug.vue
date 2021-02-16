<template>
    <UnderConstruction title="Questa è la pagina di template per gli articoli." />
</template>

<script lang="ts">
    import Vue from "vue";

    import UnderConstruction from "@/layouts/pages/under-construction.vue";

    export default Vue.extend({
        name: "ArticlePage",
        components: { UnderConstruction },

        head: { title: "Articolo" }
    });
</script>

<style lang="scss" scoped>
</style>
