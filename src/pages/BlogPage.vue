<template>
    <div id="blog-page">
        <h1>This is the main BLog page.</h1>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "BlogPage" })
    export default class BlogPage extends Vue { }
</script>

<style lang="sass" scoped>
</style>
