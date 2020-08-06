<template>
    <div id="main-content">
        <div class="container mdc-card">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "MainContent" });
</script>

<style lang="scss" scoped>
    @import "~@material/animation/variables";
    @import "~@material/drawer/variables";

    #main-content
    {
        background-color: #F1F1F1;
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 0.25em 0.5em 0.5em #3F3F3F;
        color: #2C3E50;
        margin-bottom: 250px;
        padding: 8px;
        text-align: center;

        & > .container.mdc-card
        {
            padding: 8px;
            transition-duration: $mdc-drawer-animation-enter;
            transition-property: max-width;
            transition-timing-function: $mdc-animation-standard-curve-timing-function;

            .mdc-drawer-app-content.mdc-drawer-app-content--open > &
            {
                max-width: 100%;
                transition-duration: $mdc-drawer-animation-exit;

                @media (min-width: 855px)
                {
                    max-width: 550px;
                }
                @media (min-width: 1215px)
                {
                    max-width: 800px;
                }
                @media (min-width: 1535px)
                {
                    max-width: 960px;
                }
                @media (min-width: 1855px)
                {
                    max-width: 1070px;
                }
            }
        }
    }
</style>
