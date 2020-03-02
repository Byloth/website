<template>
    <aside class="mdc-drawer" :class="classes">
        <div class="mdc-drawer__header">
            <h3 class="mdc-drawer__title">Mail</h3>
            <h6 class="mdc-drawer__subtitle">email@material.io</h6>
        </div>
        <div class="mdc-drawer__content">
            <nav class="mdc-list">
                <slot />
                <hr class="mdc-list-divider">
                <h6 class="mdc-list-group__subheader">Labels</h6>
                <a class="mdc-list-item" href="#">
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
                    <span class="mdc-list-item__text">Family</span>
                </a>
                <a class="mdc-list-item" href="#">
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
                    <span class="mdc-list-item__text">Friends</span>
                </a>
                <a class="mdc-list-item" href="#">
                    <i class="material-icons mdc-list-item__graphic" aria-hidden="true">bookmark</i>
                    <span class="mdc-list-item__text">Work</span>
                </a>
            </nav>
        </div>
    </aside>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { cssClasses } from "@material/drawer";

    @Component({ name: "Drawer" })
    export default class Drawer extends Vue
    {
        @Prop(Boolean)
        public value: boolean;

        protected get classes()
        {
            return { [cssClasses.OPEN]: this.value };
        }

        public constructor()
        {
            super();

            this.value = false;
        }
    }
</script>

<style lang="scss" scoped="scoped">
    @import "@material/animation/variables";
    @import "@material/drawer/variables";

    .mdc-drawer
    {
        margin-left: -$mdc-drawer-width;
        position: fixed;
        transition-duration: $mdc-drawer-animation-enter;
        transition-property: margin;
        transition-timing-function: $mdc-animation-standard-curve-timing-function;

        &.mdc-drawer--open
        {
            margin-left: 0px;
            transition-duration: $mdc-drawer-animation-exit;
        }
    }
</style>
