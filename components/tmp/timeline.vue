<template>
    <div class="container timeline">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Timeline",

        provide: function()
        {
            const children: number[] = [];

            return {
                getPosition: (id: number, height: number) =>
                {
                    children[id] = height;

                    const previousChildren = children.slice(0, id);

                    let straight = 0;
                    let reverse = 64;

                    for (const child of previousChildren)
                    {
                        if (reverse < straight)
                        {
                            reverse += child;
                        }
                        else
                        {
                            straight += child;
                        }
                    }

                    if (reverse < straight)
                    {
                        this.$el.style.height = `${reverse + height}px`;

                        return { reverse: true, y: reverse };
                    }
                    else
                    {
                        this.$el.style.height = `${straight + height}px`;

                        return { reverse: false, y: straight };
                    }
                }
            };
        }
    });
</script>

<style lang="scss" scoped>
    .timeline
    {
        position: relative;
    }
</style>
