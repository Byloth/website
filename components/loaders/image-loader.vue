<template>
    <SkeletonLoader class="image-loader" :class="classes">
        <div class="spacer"></div>
    </SkeletonLoader>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "ImageLoader",
        props: {
            portrait: {
                default: false,
                type: Boolean
            }
        },
        computed: {
            classes(): Record<string, boolean>
            {
                return { "portrait": this.portrait };
            }
        }
    });
</script>

<style lang="scss" scoped>
    .image-loader
    {
        & > .spacer
        {
            padding: 37.5% 0px;
        }

        &.portrait
        {
            & > .spacer
            {
                padding: 66.666% 0px;
            }
        }
    }
</style>
