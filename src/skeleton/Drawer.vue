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
        @Prop({
            default: false,
            type: Boolean
        })
        public modal!: boolean;

        @Prop({
            default: false,
            type: Boolean
        })
        public value!: boolean;

        protected get classes(): Record<string, boolean>
        {
            return {
                "mdc-drawer--modal": this.modal,
                [cssClasses.OPEN]: this.value
            };
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
        transition-property: box-shadow, margin;
        transition-timing-function: $mdc-animation-standard-curve-timing-function;

        &.mdc-drawer--modal
        {
            box-shadow: none;
            display: flex;

            &.mdc-drawer--open
            {
                box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
                            0px 16px 24px 2px rgba(0, 0, 0, 0.14),
                            0px 6px 30px 5px rgba(0, 0, 0, 0.12);
            }
        }

        &.mdc-drawer--open
        {
            margin-left: 0px;
            transition-duration: $mdc-drawer-animation-exit;
        }
    }
</style>
