<template>
    <UnderConstruction title="Questa è la pagina principale dedicata agli eventi." />
</template>

<script lang="ts">
    import Vue from "vue";

    import UnderConstruction from "@/layouts/pages/under-construction.vue";

    export default Vue.extend({
        name: "EventsPage",
        components: { UnderConstruction },

        head: { title: "Eventi" }
    });
</script>

<style lang="scss" scoped>
</style>
