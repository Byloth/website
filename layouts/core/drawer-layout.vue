<template>
    <div>
        <drawer id="drawer"
                v-model="open"
                :modal="modal" />
        <div class="mdc-drawer-app-content" :class="classes">
            <navigation-bar id="navigation-bar"
                            :toggle="toggle"
                            @drawer-toggle="toggleDrawer" />
            <jumbotron id="jumbotron" />
            <slot></slot>
            <flooter id="flooter" />
        </div>
        <drawer-scrim id="drawer-scrim"
                      :value="modal && open"
                      @input="open = $event" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import Drawer from "./skeleton/drawer.vue";
    import DrawerScrim from "./skeleton/drawer-scrim.vue";
    import Flooter from "./skeleton/flooter.vue";
    import NavigationBar from "./skeleton/navigation-bar.vue";
    import Jumbotron from "./skeleton/jumbotron.vue";

    export const MOBILE_SIZE = 600;
    export const TABLET_SIZE = 1280;

    export enum DrawerStatus
    {
        MODAL = 0,
        DISMISSABLE = 1,
        PERMANENT = 2
    }
    export interface DrawerLayoutData
    {
        _status: DrawerStatus;

        modal: boolean;
        open: boolean;
        toggle: boolean;
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
            _status: DrawerStatus.DISMISSABLE,

            modal: false,
            open: false,
            toggle: true
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

        mounted(): void
        {
            window.addEventListener("resize", this.onResizeEvent, { capture: true, passive: true });

            this.onResizeEvent();
        },
        destroyed(): void
        {
            window.removeEventListener("resize", this.onResizeEvent);
        },

        methods: {
            _setModal(): void
            {
                if (this._status !== DrawerStatus.MODAL)
                {
                    this._status = DrawerStatus.MODAL;

                    this.modal = true;
                    this.open = false;
                    this.toggle = true;
                }
            },
            _setDismissable(): void
            {
                if (this._status !== DrawerStatus.DISMISSABLE)
                {
                    this._status = DrawerStatus.DISMISSABLE;

                    this.modal = false;
                    this.open = false;
                    this.toggle = true;
                }
            },
            _setPermanent(): void
            {
                if (this._status !== DrawerStatus.PERMANENT)
                {
                    this._status = DrawerStatus.PERMANENT;

                    this.modal = false;
                    this.open = true;
                    this.toggle = false;
                }
            },

            onResizeEvent(evt?: Event): void
            {
                const windowWidth = window.innerWidth;

                if (windowWidth < MOBILE_SIZE)
                {
                    this._setModal();
                }
                else if (windowWidth < TABLET_SIZE)
                {
                    this._setDismissable();
                }
                else
                {
                    this._setPermanent();
                }
            },

            toggleDrawer(evt?: Event): void
            {
                this.open = !this.open;
            }
        }
    });
</script>

<style lang="scss" scoped>
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

        &.mdc-drawer-app-content--open
        {
            transition-duration: $mdc-drawer-animation-exit;

            & > #navigation-bar,
            & > #flooter
            {
                transition-duration: $mdc-drawer-animation-exit;
                width: calc(100% - #{$mdc-drawer-width});
            }

            // TODO: Da sistemare!
            //
            // & > #main-content > .container.mdc-card
            // {
            //     max-width: 100% !important;

            //     @media (min-width: 855px)
            //     {
            //         max-width: 550px !important;
            //     }
            //     @media (min-width: 1215px)
            //     {
            //         max-width: 800px !important;
            //     }
            //     @media (min-width: 1535px)
            //     {
            //         max-width: 960px !important;
            //     }
            //     @media (min-width: 1855px)
            //     {
            //         max-width: 1066px !important;
            //     }
            // }
        }

        .mdc-drawer.mdc-drawer--modal.mdc-drawer--open + &
        {
            margin-left: 0px;
        }
    }
</style>
