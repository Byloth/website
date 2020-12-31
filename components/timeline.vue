<template>
    <div class="container timeline">
        <TimelineItem v-for="item, index in items"
                      :key="index"
                      :item="item"
                      :reverse="index % 2 === 1" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Timeline",
        props: {
            items: {
                default: () => [],

                type: Array
            }
        }
    });
</script>

<style lang="scss" scoped>
    .timeline
    {
        display: flex;
        flex-direction: column;
    }
</style>
