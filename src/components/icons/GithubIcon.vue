<template>
    <span class="github-icon">
        <span class="fab fa-github" />
    </span>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "GithubIcon" })
    export default class GithubIcon extends Vue { }
</script>

<style lang="scss" scoped>
    /*
        .fa-github
        {
            background-color: #FFFFFF;
            border-radius: 50%;
            color: #000000;
            text-shadow: none;
        }
     */
</style>
