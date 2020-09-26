<template>
    <div class="skeleton-loader"></div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "SkeletonLoader" });
</script>

<style lang="scss" scoped>
    @keyframes loading
    {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }

    .skeleton-loader
    {
        background: rgba(0, 0, 0, 0.125);
        overflow: hidden;
        position: relative;
        width: 100%;

        &:after
        {
            animation: loading 1.5s infinite;
            background: linear-gradient(90deg,
                                      hsla(0, 0%, 100%, 0),
                                      hsla(0, 0%, 100%, 0.3),
                                      hsla(0, 0%, 100%, 0));

            content: "";
            height: 100%;
            left: 0px;
            position: absolute;
            right: 0px;
            top: 0px;
            z-index: 1;
        }
    }
</style>
