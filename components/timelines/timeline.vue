<template>
    <div class="container timeline">
        <template v-if="items.length > 0">
            <TimelineItem v-for="item, index in items"
                          :key="index"
                          :item="item"
                          :reverse="index % 2 === 1" />
        </template>
        <template v-else>
            <TimelineItemLoader />
            <TimelineItemLoader image reverse />
            <TimelineItemLoader />
        </template>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import TimelineItemLoader from "@/components/loaders/timeline-item-loader.vue";

    import TimelineItem from "./timeline-item.vue";

    export default Vue.extend({
        name: "Timeline",
        components: { TimelineItemLoader, TimelineItem },
        props: {
            items: {
                default: () => [],
                type: Array
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

        @media (min-width: variables.$sm-size)
        {
            padding: 0px;
        }
    }
</style>
