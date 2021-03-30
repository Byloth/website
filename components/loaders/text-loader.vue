<template>
    <SkeletonLoader class="text-loader"
                    :delay="delay"
                    :width="width" />
</template>

<script lang="ts">
    import Vue from "vue";

    import SkeletonLoader from "./core/skeleton-loader.vue";

    export default Vue.extend({
        name: "TextLoader",
        components: { SkeletonLoader },
        props: {
            delay: {
                default: 0,
                type: Number
            },
            width: {
                default: 0,
                type: Number
            }
        }
    });
</script>

<style lang="scss" scoped>
    .text-loader
    {
        border-radius: 0.5em;
        height: 1em;
        margin: 1em 0px;
    }
</style>
