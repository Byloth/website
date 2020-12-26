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
            const children: VNode[] = this.$slots?.default?.filter((child) => child.componentOptions) || [];

            const width = 100 / this.columns;

            children.forEach((child, index) =>
            {
                const props: Record<string, any> = child.componentOptions!.propsData || { };

                props.width = width;
                props.x = index % this.columns;

                child.componentOptions!.propsData = props;
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
