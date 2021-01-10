<template>
    <div>
        <Drawer id="drawer"
                v-model="open"
                :modal="modal"
                @select="onSelectEvent" />
        <div class="mdc-drawer-app-content" :class="classes">
            <NavigationBar id="navigation-bar"
                           :toggle="toggle"
                           @drawer-toggle="toggleDrawer" />
            <Jumbotron id="jumbotron" />
            <div id="main-content" :style="{ 'margin-bottom': `${height}px` }">
                <slot></slot>
            </div>
            <Flooter id="flooter" ref="flooter" />
        </div>
        <DrawerScrim id="drawer-scrim"
                     :value="modal && open"
                     @input="open = $event" />
        <ContactDialog id="contact-dialog" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Route } from "vue-router";

    import { MOBILE_SIZE, TABLET_SIZE } from "@/core/constants";

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
            onSelectEvent(evt?: MouseEvent): void
            {
                if (this.status === DrawerStatus.MODAL)
                {
                    this.open = false;
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
            background-color: variables.$chrome-scrollbar-color;
            box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 0.25em 0.5em 0.5em variables.$chrome-incognito-color;
            padding: 0.5em;
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

        @media print
        {
            & > #main-content
            {
                background-color: #FFFFFF;
                box-shadow: none;
                padding: 0px;
            }

            .mdc-drawer.mdc-drawer--open + &
            {
                margin-left: 0px;
            }
        }
    }
</style>
