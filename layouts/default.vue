<template>
    <div id="drawer-layout">
        <Drawer id="drawer"
                v-model="isOpen"
                :modal="isModal"
                @select="closeDrawer" />
        <div class="mdc-drawer-app-content" :class="classes">
            <NavigationBar id="navigation-bar"
                           :toggler="toggler"
                           @drawer-toggle="toggleDrawer" />
            <Jumbotron id="jumbotron" />
            <div id="main-content" :style="styles">
                <Nuxt />
            </div>
            <Flooter id="flooter" ref="flooter" />
        </div>
        <MessagesHandler id="messages-handler" />
        <DrawerScrim id="drawer-scrim"
                     :value="isModal && isOpen"
                     @click="closeDrawer" />
        <ShareDialog id="share-dialog" @open="onDialogOpenEvent" />
        <ContactDialog id="contact-dialog" @open="onDialogOpenEvent" />
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MOBILE_SIZE, TABLET_SIZE } from "@/core/constants";

    import ContactDialog from "@/components/globals/contact-dialog.vue";
    import Drawer from "@/components/globals/drawer.vue";
    import DrawerScrim from "@/components/globals/drawer-scrim.vue";
    import Flooter from "@/components/globals/flooter.vue";
    import Jumbotron from "@/components/globals/jumbotron.vue";
    import MessagesHandler from "@/components/globals/messages-handler.vue";
    import NavigationBar from "@/components/globals/navigation-bar.vue";
    import ShareDialog from "@/components/globals/share-dialog.vue";

    export enum DrawerStatus
    {
        MODAL = 0,
        DISMISSABLE = 1,
        PERMANENT = 2
    }

    interface DrawerLayoutData
    {
        _body?: HTMLElement;

        dialog: boolean;
        isModal: boolean;
        isOpen: boolean;
        toggler: boolean;

        margin: number;

        status: DrawerStatus;
    }

    export default Vue.extend({
        name: "DrawerLayout",
        components: {
            ContactDialog,
            Drawer,
            DrawerScrim,
            Flooter,
            Jumbotron,
            MessagesHandler,
            NavigationBar,
            ShareDialog
        },

        data: (): DrawerLayoutData => ({
            dialog: false,
            isModal: false,
            isOpen: false,
            toggler: true,

            margin: 0,

            status: DrawerStatus.DISMISSABLE
        }),

        computed: {
            classes(): Record<string, boolean>
            {
                return { "mdc-drawer-app-content--open": !this.isModal && this.isOpen };
            },
            styles(): Record<string, string>
            {
                return { "margin-bottom": `${this.margin}px` };
            }
        },
        watch: {
            isOpen(value: boolean, oldValue: boolean): void
            {
                this.disable(!(this.isModal && value) && !this.dialog);
            },
            dialog(value: boolean, oldValue: boolean): void
            {
                this.disable(!(this.isModal && this.isOpen) && !value);
            }
        },

        mounted: function(): void
        {
            this._body = document.querySelector("body")!;

            window.addEventListener("resize", this.onResizeEvent, { capture: true, passive: true });

            this.onResizeEvent();
        },
        destroyed: function(): void
        {
            window.removeEventListener("resize", this.onResizeEvent);
        },

        methods: {
            disable(disabled: boolean): void
            {
                if (disabled === true)
                {
                    this._body!.removeAttribute("disabled");
                }
                else
                {
                    this._body!.setAttribute("disabled", "");
                }
            },

            setModal(): void
            {
                if (this.status !== DrawerStatus.MODAL)
                {
                    this.status = DrawerStatus.MODAL;

                    this.isModal = true;
                    this.isOpen = false;
                    this.toggler = true;
                }
            },
            setDismissable(): void
            {
                if (this.status !== DrawerStatus.DISMISSABLE)
                {
                    this.status = DrawerStatus.DISMISSABLE;

                    this.isModal = false;
                    this.isOpen = false;
                    this.toggler = true;
                }
            },
            setPermanent(): void
            {
                if (this.status !== DrawerStatus.PERMANENT)
                {
                    this.status = DrawerStatus.PERMANENT;

                    this.isModal = false;
                    this.isOpen = true;
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

                this.margin = (this.$refs.flooter as Vue).$el.clientHeight;
            },
            onDialogOpenEvent(value: boolean): void
            {
                this.dialog = value;
            },

            closeDrawer(evt: MouseEvent): void
            {
                if (this.status === DrawerStatus.MODAL)
                {
                    this.isOpen = false;
                }
            },
            toggleDrawer(evt: Event): void
            {
                this.isOpen = !this.isOpen;
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
            padding: 0px;
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

        @media (min-width: variables.$sm-size)
        {
            & > #main-content
            {
                padding: 0.5em;
            }
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
