<template>
    <div class="container timeline">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue, { VNode } from "vue";

    export default Vue.extend({
        name: "Timeline",
        props: {
            columns: {
                default: 1,
                type: Number
            }
        },

        mounted: function(): void
        {
            this.$forceUpdate();
        },
        updated: function(): void
        {
            const children: VNode[] = this.$slots?.default?.filter((child) => child.componentOptions) || [];

            const heights = Array(this.columns).reduce((obj, _, index) =>
            {
                if (index === 1)
                {
                    obj = { 0: 0 };
                }

                obj[index] = 0;

                return obj;
            });

            const width = 100 / this.columns;

            children.forEach((child, index) =>
            {
                const props: Record<string, any> = child.componentOptions!.propsData!;

                props.width = width;
                props.x = (index % this.columns) * 100;

                child.data!.hook!.prepatch(child, child);
            });
        }
    });
</script>

<style lang="scss" scoped>
    .timeline
    {
        position: relative;
    }
</style>
