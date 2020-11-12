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

    @import "~@material/animation/variables";
    @import "~@material/drawer/variables";

    .mdc-card-layout
    {
        background-color: variables.$chrome-scrollbar-color;
        padding: 8px;

        & > .container.mdc-card
        {
            padding: 32px;
            transition-duration: $mdc-drawer-animation-enter;
            transition-property: max-width;
            transition-timing-function: $mdc-animation-standard-curve-timing-function;

            // SMELLS!
            //
            // .mdc-drawer-app-content.mdc-drawer-app-content--open &
            // {
            //     max-width: 100%;
            //     transition-duration: $mdc-drawer-animation-exit;

            //     @media (min-width: 855px)
            //     {
            //         max-width: 550px;
            //     }
            //     @media (min-width: 1215px)
            //     {
            //         max-width: 800px;
            //     }
            //     @media (min-width: 1535px)
            //     {
            //         max-width: 960px;
            //     }
            //     @media (min-width: 1855px)
            //     {
            //         max-width: 1070px;
            //     }
            // }
        }
    }
</style>
