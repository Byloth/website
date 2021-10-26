<template>
    <div class="container timeline" :style="styles">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    const GUARD_SPACING = 150;

    interface TimelineItemComponent
    {
        isReverse: boolean;
        yCoord: number;

        $el: HTMLElement;

        $on(event: string | string[], callback: () => void): void;
        $off(event: string | string[], callback: () => void): void;
    }
    interface TimelineData
    {
        height: number | null;
        items: TimelineItemComponent[];
    }

    export default Vue.extend({
        name: "Timeline",

        provide: function()
        {
            return {
                register: (item: TimelineItemComponent) =>
                {
                    item.$on("load", this.computeYCoords);

                    this.items.push(item);
                },
                unregister: (item: TimelineItemComponent) =>
                {
                    this.items = this.items.filter((i) => i !== item);

                    item.$off("load", this.computeYCoords);
                }
            };
        },
        data: (): TimelineData => ({
            height: null,
            items: []
        }),

        computed: {
            styles(): Record<string, string>
            {
                if (this.height !== null)
                {
                    return { "min-height": `${this.height}px` };
                }

                return { };
            }
        },

        mounted: function()
        {
            window.addEventListener("resize", this.computeYCoords, { passive: true });

            this.computeYCoords();
        },
        destroyed: function()
        {
            window.removeEventListener("resize", this.computeYCoords);
        },

        methods: {
            computeYCoords(): void
            {
                let previousStraight: number | null = null;
                let currentStraight = 0;

                let previousReverse: number | null = null;
                let currentReverse = 0;

                for (const index in this.items)
                {
                    const item = this.items[index];
                    const height = item.$el.clientHeight;

                    if (currentReverse < currentStraight)
                    {
                        if (previousStraight !== null)
                        {
                            const reverseGuardSpace = currentReverse - GUARD_SPACING;

                            if (reverseGuardSpace < previousStraight)
                            {
                                const reverseDifference = previousStraight - reverseGuardSpace;

                                currentReverse += reverseDifference;
                            }
                        }

                        item.isReverse = true;
                        item.yCoord = currentReverse;

                        previousReverse = currentReverse;
                        currentReverse += height;
                    }
                    else
                    {
                        if (previousReverse !== null)
                        {
                            const straightGuardSpace = currentStraight - GUARD_SPACING;

                            if (straightGuardSpace < previousReverse)
                            {
                                const straightDifference = previousReverse - straightGuardSpace;

                                currentStraight += straightDifference;
                            }
                        }

                        item.isReverse = false;
                        item.yCoord = currentStraight;

                        previousStraight = currentStraight;
                        currentStraight += height;
                    }
                }

                this.height = Math.max(currentStraight, currentReverse);
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .timeline
    {
        display: flex;
        flex-direction: column;
        padding: 0.25em 0px;
        padding-right: 0.5em;
        position: relative;

        @media (min-width: variables.$sm-size)
        {
            padding: 0px;
        }
    }
</style>
