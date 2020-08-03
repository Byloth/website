<template>
    <div id="about-page">
        <h1>This is the about page.</h1>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "AboutPage" })
    export default class AboutPage extends Vue { }
</script>

<style lang="sass" scoped>
</style>
