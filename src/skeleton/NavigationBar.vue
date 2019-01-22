<template>
    <div id="navigation-bar">
        <top-app-bar title="Byloth's Website" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import TopAppBar from "@/components/TopAppBar.vue";

    @Component({ components: { "top-app-bar": TopAppBar } })
    export default class NavigationBar extends Vue { }
</script>
