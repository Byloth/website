<template>
    <div class="mdc-card-layout">
        <div class="container mdc-card">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "CardLayout" });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-card-layout
    {
        & > .container.mdc-card
        {
            border-radius: 0px;

            @media (min-width: variables.$sm-size)
            {
                border-radius: 4px;
            }
            @media print
            {
                border-radius: 0px;
                box-shadow: none;
            }
        }
    }
</style>
