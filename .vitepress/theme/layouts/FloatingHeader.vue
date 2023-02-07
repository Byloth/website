<script lang="ts" setup>
    import { onMounted, ref } from "vue";

    import { useScrollAnimator, AnimatorThreshold } from "@byloth/vue-scroll-animator";

    const MULTIPLIER = (136 / 127);

    const header = ref<HTMLDivElement | null>(null);
    const scrollAnimate = useScrollAnimator();

    onMounted(() =>
    {
        if (!header.value) { return; }
        const target = header.value;

        scrollAnimate({
            target: target,
            mediaQuery: "screen and (max-width: 599px)",
            startValue: 0,
            endValue: 136,
            classes: [{
                names: ["shadowed"],
                threshold: AnimatorThreshold.FromEnd
            }],
            styles: [{
                startValue: 192,
                endValue: 56,

                computeStyle: (value) => ({
                    backgroundColor: `rgba(255, ${Math.floor(value * MULTIPLIER)}, 0, 0.25)`,
                    height: `${value}px`
                })
            }]
        });
        scrollAnimate({
            target: target,
            mediaQuery: "screen and (max-width: 599px)",
            startValue: 137,
            boundary: 66,
            styles: [{
                startValue: 0,
                endValue: -66,

                computeStyle: (value) => ({ top: `${value}px` })
            }]
        });

        scrollAnimate({
            target: target,
            mediaQuery: "screen and (min-width: 600px)",
            startValue: 0,
            endValue: 128,
            classes: [{
                names: ["shadowed"],
                threshold: AnimatorThreshold.FromEnd
            }],
            styles: [{
                startValue: 192,
                endValue: 64,
                mediaQuery: "screen and (min-width: 600px)",

                computeStyle: (value) => ({
                    backgroundColor: `rgba(0, ${Math.floor(value * MULTIPLIER)}, 255, 0.25)`,
                    height: `${value}px`
                })
            }]
        });
        scrollAnimate({
            target: target,
            mediaQuery: "screen and (min-width: 600px)",
            startValue: 129,
            boundary: 74,
            styles: [{
                startValue: 0,
                endValue: -74,

                computeStyle: (value) => ({ top: `${value}px` })
            }]
        });
    });
</script>

<template>
    <div ref="header" class="header"></div>
    <div class="content"></div>
</template>

<style lang="scss" scoped>
    .header
    {
        background-color: rgba(255, 127, 0, 0.25);
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0);
        position: fixed;
        height: 192px;
        top: 0px;
        left: 0px;
        right: 0px;
        transition: box-shadow 200ms ease-in-out;

        &.shadowed
        {
            box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.125);
        }

        @media only screen and (min-width: 600px)
        {
            background-color: rgba(0, 127, 255, 0.25);
        }
    }
    .content
    {
        height: 200vh;
    }
</style>
