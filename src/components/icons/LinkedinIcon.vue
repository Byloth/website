<template>
    <span class="linkedin-icon">
        <span class="fab fa-linkedin-in" />
    </span>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "LinkedinIcon" })
    export default class LinkedinIcon extends Vue { }
</script>

<style lang="scss" scoped>
    /*
        .fa-linkedin-in
        {
            background-color: #0077B5;
            border-radius: 0.1em;
            color: #FFFFFF;
            font-size: 0.85em;
            padding: 0.15em 0.15em 0em 0.15em;
            text-shadow: none;
        }
    */
</style>
