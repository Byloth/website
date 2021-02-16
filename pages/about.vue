<template>
    <UnderConstruction title="Questa è la pagina principale di informazioni." />
</template>

<script lang="ts">
    import Vue from "vue";

    import UnderConstruction from "@/layouts/pages/under-construction.vue";

    export default Vue.extend({
        name: "AboutPage",
        components: { UnderConstruction },

        head: { title: "Chi sono" }
    });
</script>

<style lang="scss" scoped>
</style>
