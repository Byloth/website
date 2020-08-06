<template>
    <div id="home-page">
        <img alt="Vue logo" src="../assets/logo.png" />
        <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import HelloWorld from "@/components/HelloWorld.vue";

    export default Vue.extend({
        name: "HomePage",
        components: { "hello-world": HelloWorld }
    });
</script>
