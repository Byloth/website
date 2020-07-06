<template>
    <span class="twitter-icon">
        <span class="fab fa-twitter" />
    </span>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "TwitterIcon" })
    export default class TwitterIcon extends Vue { }
</script>

<style lang="scss" scoped>
    /*
        .fa-twitter
        {
            color: #1DA1F2;
        }
     */
</style>
