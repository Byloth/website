<template>
    <aside class="mdc-drawer" :class="classes">
        <div class="mdc-drawer__header">
            <h3 class="mdc-drawer__title">Mail</h3>
            <h6 class="mdc-drawer__subtitle">email@material.io</h6>
        </div>
        <div class="mdc-drawer__content">
            <nav-list>
                <slot />
                <hr class="mdc-list-divider">
                <h6 class="mdc-list-group__subheader">
                    Labels
                </h6>
                <list-item>
                    Family
                </list-item>
                <list-item>
                    Friends
                </list-item>
                <list-item>
                    Work
                </list-item>
            </nav-list>
        </div>
    </aside>
</template>

<script lang="ts">
    import { cssClasses } from "@material/drawer";
    import { Component, Prop, Vue } from "vue-property-decorator";

    import ListItem from "@/components/ListItem.vue";
    import NavigationList from "@/components/NavigationList.vue";

    @Component({
        name: "Drawer",
        components: {
            "list-item": ListItem,
            "nav-list": NavigationList
        }
    })
    export default class Drawer extends Vue
    {
        @Prop(Boolean)
        public value: boolean;

        protected get classes(): Record<string, boolean>
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
