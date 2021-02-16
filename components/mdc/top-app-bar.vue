<template>
    <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
            <slot></slot>
        </div>
    </header>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "TopAppBar" });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-top-app-bar
    {
        background-color: variables.$primary-color;
        transition: box-shadow variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
        width: 100%;

        &.mdc-top-app-bar--prominent > .mdc-top-app-bar__row
        {
            height: 100%;

            .mdc-top-app-bar__title
            {
                margin: 0px;
                padding-bottom: 0.4em;
            }
        }

        @media print
        {
            display: none;
        }
    }
</style>
