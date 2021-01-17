<template>
    <div>
        <Drawer id="drawer"
                v-model="open"
                :modal="modal"
                @select="closeDrawer" />
        <div class="mdc-drawer-app-content" :class="classes">
            <NavigationBar id="navigation-bar"
                           :toggler="toggler"
                           @drawer-toggle="toggleDrawer" />
            <Jumbotron id="jumbotron" />
            <div id="main-content" :style="styles">
                <slot></slot>
            </div>
            <Flooter id="flooter" ref="flooter" />
        </div>
        <DrawerScrim id="drawer-scrim"
                     :value="modal && open"
                     @click="closeDrawer" />
        <ContactDialog id="contact-dialog" @open="onDialogOpenEvent" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MOBILE_SIZE, TABLET_SIZE } from "@/core/constants";

    export enum DrawerStatus
    {
        MODAL = 0,
        DISMISSABLE = 1,
        PERMANENT = 2
    }

    interface DrawerLayoutData
    {
        dialog: boolean;
        modal: boolean;
        open: boolean;
        toggler: boolean;

        margin: number;

        status: DrawerStatus;
    }

    export default Vue.extend({
        name: "DrawerLayout",

        data: (): DrawerLayoutData => ({
            dialog: false,
            modal: false,
            open: false,
            toggler: true,

            margin: 0,

            status: DrawerStatus.DISMISSABLE
        }),

        computed: {
            classes(): Record<string, boolean>
            {
                return { "mdc-drawer-app-content--open": !this.modal && this.open };
            },
            styles(): Record<string, string>
            {
                return { "margin-bottom": `${this.margin}px` };
            }
        },
        watch: {
            open(value: boolean, oldValue: boolean): void
            {
                this.$emit("disable", !(this.modal && value) && !this.dialog);
            },
            dialog(value: boolean, oldValue: boolean): void
            {
                this.$emit("disable", !(this.modal && this.open) && !value);
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
                    this.toggler = true;
                }
            },
            setDismissable(): void
            {
                if (this.status !== DrawerStatus.DISMISSABLE)
                {
                    this.status = DrawerStatus.DISMISSABLE;

                    this.modal = false;
                    this.open = false;
                    this.toggler = true;
                }
            },
            setPermanent(): void
            {
                if (this.status !== DrawerStatus.PERMANENT)
                {
                    this.status = DrawerStatus.PERMANENT;

                    this.modal = false;
                    this.open = true;
                    this.toggler = false;
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

                this.margin = (this.$refs.flooter as Element).clientHeight;
            },
            onDialogOpenEvent(value: boolean): void
            {
                this.dialog = value;
            },

            closeDrawer(evt: MouseEvent): void
            {
                if (this.status === DrawerStatus.MODAL)
                {
                    this.open = false;
                }
            },
            toggleDrawer(evt: Event): void
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
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
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
