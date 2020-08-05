<template>
    <div id="drawer-scrim"
         class="mdc-drawer-scrim"
         :class="classes"
         @click="$emit('input', false)">
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({ name: "DrawerScrim" })
    export default class DrawerScrim extends Vue
    {
        @Prop({
            default: false,
            type: Boolean
        })
        public readonly value!: boolean;

        public get classes(): Record<string, boolean>
        {
            return { "mdc-drawer-scrim--open": this.value };
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@material/animation/variables";
    @import "~@material/drawer/variables";

    #drawer-scrim
    {
        background-color: $mdc-drawer-modal-scrim-color;
        display: block;
        opacity: 0;
        transition-duration: $mdc-drawer-animation-enter;
        transition-property: opacity, visibility;
        transition-timing-function: $mdc-animation-standard-curve-timing-function;
        visibility: hidden;

        &.mdc-drawer-scrim--open
        {
            opacity: $mdc-drawer-modal-scrim-opacity;
            transition-duration: $mdc-drawer-animation-exit;
            visibility: visible;
        }
    }
</style>
