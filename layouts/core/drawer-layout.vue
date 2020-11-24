<template>
    <div>
        <drawer id="drawer"
                v-model="open"
                :modal="modal"
                @navigate="onNavigateEvent" />
        <div class="mdc-drawer-app-content" :class="classes">
            <navigation-bar id="navigation-bar"
                            :toggle="toggle"
                            @drawer-toggle="toggleDrawer" />
            <jumbotron id="jumbotron" />
            <div id="main-content" :style="{ 'margin-bottom': `${height}px` }">
                <slot></slot>
            </div>
            <flooter id="flooter" ref="flooter" />
        </div>
        <drawer-scrim id="drawer-scrim"
                      :value="modal && open"
                      @input="open = $event" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Route } from "vue-router";

    import { MOBILE_SIZE, TABLET_SIZE } from "@/core/constants";

    import Drawer from "./skeleton/drawer.vue";
    import DrawerScrim from "./skeleton/drawer-scrim.vue";
    import Flooter from "./skeleton/flooter.vue";
    import NavigationBar from "./skeleton/navigation-bar.vue";
    import Jumbotron from "./skeleton/jumbotron.vue";

    export enum DrawerStatus
    {
        MODAL = 0,
        DISMISSABLE = 1,
        PERMANENT = 2
    }

    interface DrawerLayoutData
    {
        modal: boolean;
        open: boolean;
        toggle: boolean;

        height: number;

        status: DrawerStatus;
    }

    export default Vue.extend({
        name: "DrawerLayout",
        components: {
            "drawer": Drawer,
            "drawer-scrim": DrawerScrim,
            "flooter": Flooter,
            "navigation-bar": NavigationBar,
            "jumbotron": Jumbotron
        },
        props: {
            value: {
                default: false,
                type: Boolean
            }
        },

        data: (): DrawerLayoutData => ({
            modal: false,
            open: false,
            toggle: true,

            height: 0,

            status: DrawerStatus.DISMISSABLE
        }),

        computed: {
            classes(): Record<string, boolean>
            {
                return { "mdc-drawer-app-content--open": (this.open && !this.modal) };
            }
        },
        watch: {
            open(value: boolean, oldValue: boolean): void
            {
                this.$emit("input", (this.modal === true) && this.open);
            }
        },

        mounted: function(): void
        {
            window.addEventListener("resize", this.onResizeEvent, { capture: true, passive: true });

            this.onResizeEvent();
        },
        destroyed: function(): void
        {
            window.removeEventListener("resize", this.onResizeEvent);
        },

        methods: {
            setModal(): void
            {
                if (this.status !== DrawerStatus.MODAL)
                {
                    this.status = DrawerStatus.MODAL;

                    this.modal = true;
                    this.open = false;
                    this.toggle = true;
                }
            },
            setDismissable(): void
            {
                if (this.status !== DrawerStatus.DISMISSABLE)
                {
                    this.status = DrawerStatus.DISMISSABLE;

                    this.modal = false;
                    this.open = false;
                    this.toggle = true;
                }
            },
            setPermanent(): void
            {
                if (this.status !== DrawerStatus.PERMANENT)
                {
                    this.status = DrawerStatus.PERMANENT;

                    this.modal = false;
                    this.open = true;
                    this.toggle = false;
                }
            },

            onNavigateEvent(route: Route): void
            {
                if (this.status === DrawerStatus.MODAL)
                {
                    this.open = false;
                }
            },
            onResizeEvent(evt?: Event): void
            {
                const windowWidth = window.innerWidth;

                if (windowWidth < MOBILE_SIZE)
                {
                    this.setModal();
                }
                else if (windowWidth < TABLET_SIZE)
                {
                    this.setDismissable();
                }
                else
                {
                    this.setPermanent();
                }

                this.height = (this.$refs.flooter as Vue).$el.clientHeight;
            },

            toggleDrawer(evt?: Event): void
            {
                this.open = !this.open;
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    @import "~@material/animation/variables";
    @import "~@material/drawer/variables";

    .mdc-drawer-app-content
    {
        transition-duration: $mdc-drawer-animation-enter;
        transition-property: margin;
        transition-timing-function: $mdc-animation-standard-curve-timing-function;

        & > #navigation-bar,
        & > #flooter
        {
            transition-duration: $mdc-drawer-animation-enter;
            transition-property: width;
            transition-timing-function: $mdc-animation-standard-curve-timing-function;
        }

        & > #main-content
        {
            box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 0.25em 0.5em 0.5em variables.$chrome-incognito-color;
        }

        &.mdc-drawer-app-content--open
        {
            transition-duration: $mdc-drawer-animation-exit;

            & > #navigation-bar,
            & > #flooter
            {
                transition-duration: $mdc-drawer-animation-exit;
                width: calc(100% - #{$mdc-drawer-width});
            }
        }

        .mdc-drawer.mdc-drawer--modal.mdc-drawer--open + &
        {
            margin-left: 0px;
        }
    }
</style>
