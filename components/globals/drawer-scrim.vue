<template>
    <div class="mdc-drawer-scrim overlay"
         :class="classes"
         @click="onClick">
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
        },
        methods: {
            onClick(evt: MouseEvent): void
            {
                this.$emit("click", evt);
            }
        }
    });
</script>

<style lang="scss" scoped>
    @import "~@material/animation/variables";
    @import "~@material/drawer/variables";

    .mdc-drawer-scrim
    {
        display: block;
        opacity: 0;
        transition-duration: $mdc-drawer-animation-enter;
        transition-property: opacity, visibility;
        transition-timing-function: $mdc-animation-standard-curve-timing-function;
        visibility: hidden;

        &.mdc-drawer-scrim--open
        {
            opacity: 1;
            transition-duration: $mdc-drawer-animation-exit;
            visibility: visible;
        }
    }
</style>
