<template>
    <div class="mdc-card timeline-item" :style="styles">
        <slot></slot>
        <div class="mdc-card-wrapper__text-section">
            <div class="demo-card__title">Card title</div>
            <div class="demo-card__subhead">Secondary text</div>
        </div>
        <div class="mdc-card-wrapper__text-section">
            <div class="demo-card__supporting-text">
                Greyhound divisively hello coldly wonderfully marginally far upon
                excluding.
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "TimelineItem",
        props: {
            width: {
                default: 100,
                type: Number
            },
            x: {
                default: 0,
                type: Number
            },
            y: {
                default: 0,
                type: Number
            }
        },
        computed: {
            styles(): Record<string, string>
            {
                return {
                    transform: `translateX(${this.x}%) translateY(${this.y}px)`,
                    width: `${this.width}%`
                };
            }
        }
    });
</script>

<style lang="scss" scoped>
    .timeline-item
    {
        padding: 1em;
        position: absolute;
    }
</style>
