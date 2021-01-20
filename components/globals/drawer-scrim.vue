<template>
    <div class="mdc-drawer-scrim"
         :class="classes"
         @click="onClickEvent">
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
            onClickEvent(evt: MouseEvent): void
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
        backdrop-filter: blur(2.5px);
        background-color: rgba(0, 0, 0, 0.35);
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

        @media print
        {
            display: none;
        }
    }
</style>
