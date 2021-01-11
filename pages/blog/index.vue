<template>
    <UnderConstruction title="Questa è la pagina principale del Byloth's Log." />
</template>

<script lang="ts">
    import Vue from "vue";

    import UnderConstruction from "@/layouts/pages/under-construction.vue";

    export default Vue.extend({
        name: "BlogPage",
        components: { UnderConstruction },

        head: { title: "BLog" }
    });
</script>

<style lang="scss" scoped>
</style>
