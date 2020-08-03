<template>
    <div id="home-page">
        <img alt="Vue logo" src="../assets/logo.png" />
        <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import HelloWorld from "@/components/HelloWorld.vue";

    @Component({
        name: "HomePage",
        components: { "hello-world": HelloWorld }
    })
    export default class HomePage extends Vue { }
</script>

<style lang="sass" scoped>
</style>
