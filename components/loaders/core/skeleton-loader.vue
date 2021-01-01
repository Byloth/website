<template>
    <div class="skeleton-loader" :style="skeletonStyles">
        <slot></slot>
        <div class="wave" :style="waveStyles"></div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "SkeletonLoader",
        props: {
            delay: {
                default: 0,
                type: Number
            },
            width: {
                default: 0,
                type: Number
            }
        },
        computed: {
            skeletonStyles(): Record<string, string>
            {
                const styles: Record<string, string> = { };

                if (this.width)
                {
                    styles.width = `${this.width}%`;
                }

                return styles;
            },
            waveStyles(): Record<string, string>
            {
                const styles: Record<string, string> = { };

                if (this.delay)
                {
                    styles["animation-delay"] = `${this.delay}ms`;
                }

                return styles;
            }
        }
    });
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

        & > .wave
        {
            animation: loading 1500ms infinite;
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
