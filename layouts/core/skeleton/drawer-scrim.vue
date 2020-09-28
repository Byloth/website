<template>
    <div class="mdc-drawer-scrim"
         :class="classes"
         @click="$emit('input', false)">
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "DrawerScrim",
        props: {
            value: {
                default: false,
                type: Boolean
            }
        },
        computed: {
            classes(): Record<string, boolean>
            {
                return { "mdc-drawer-scrim--open": this.value };
            }
        }
    });
</script>

<style lang="scss" scoped>
    @import "~@material/animation/variables";
    @import "~@material/drawer/variables";

    .mdc-drawer-scrim
    {
        backdrop-filter: blur(2px); // saturate(180%);
        background-color: rgba(0, 0, 0, 0.35); // $mdc-drawer-modal-scrim-color;
        display: block;
        opacity: 0;
        transition-duration: $mdc-drawer-animation-enter;
        transition-property: opacity, visibility;
        transition-timing-function: $mdc-animation-standard-curve-timing-function;
        visibility: hidden;

        &.mdc-drawer-scrim--open
        {
            opacity: 1; // $mdc-drawer-modal-scrim-opacity;
            transition-duration: $mdc-drawer-animation-exit;
            visibility: visible;
        }
    }
</style>
