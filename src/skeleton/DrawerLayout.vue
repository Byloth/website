<template>
    <div>
        <drawer id="drawer" :modal="modal" v-model="open">
            <list-item class="mdc-list-item--activated" icon="inbox">
                Inbox
            </list-item>
            <list-item icon="send">
                Outgoing
            </list-item>
            <list-item icon="drafts">
                Draft
            </list-item>
        </drawer>
        <div class="mdc-drawer-app-content" :class="classes">
            <nav-bar id="nav-bar" :toggle="toggle" @drawer-toggle="toggleDrawer" />
            <div id="jumbotron">
                <blockquote>
                    <h2><q>Niente è reale; tutto è lecito.</q></h2>
                    <footer>
                        <cite>
                            Altaïr Ibn-La'Ahad
                        </cite>
                    </footer>
                </blockquote>
            </div>
            <div id="main">
                <div id="nav">
                    <span v-for="page in pages" :key="page.id">
                        <router-link :to="page.path">{{ page.title }}</router-link> |
                    </span>
                </div>
                <slot />
            </div>
        </div>
        <drawer-scrim id="drawer-scrim" :value="modal && open" @input="open = $event" />
    </div>
</template>

<script lang="ts">
    import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";

    import config, { PageOptions } from "@/config";

    import ListItem from "@/components/ListItem.vue";

    import Drawer from "./Drawer.vue";
    import DrawerScrim from "./DrawerScrim.vue";
    import NavigationBar from "./NavigationBar.vue";

    enum DrawerStatus
    {
        MODAL = 0,
        DISMISSABLE = 1,
        PERMANENT = 2
    }

    @Component({
        name: "DrawerLayout",
        components: {
            "drawer": Drawer,
            "drawer-scrim": DrawerScrim,
            "list-item": ListItem,
            "nav-bar": NavigationBar
        }
    })
    export default class DrawerLayout extends Vue
    {
        public static readonly MOBILE_SIZE: number = 600;
        public static readonly TABLET_SIZE: number = 1264;

        protected _status: DrawerStatus;

        public readonly pages: PageOptions[];

        public modal: boolean;
        public open: boolean;
        public toggle: boolean;

        @Prop({
            default: false,
            type: Boolean
        })
        public value!: boolean;

        public get classes(): Record<string, boolean>
        {
            return {
                "mdc-drawer-app-content--open": (this.open && !this.modal)
            };
        }

        public constructor()
        {
            super();

            this._status = DrawerStatus.DISMISSABLE;

            this.pages = config.pages;

            this.modal = false;
            this.open = false;
            this.toggle = true;
        }

        protected _setModal()
        {
            if (this._status !== DrawerStatus.MODAL)
            {
                this._status = DrawerStatus.MODAL;

                this.modal = true;
                this.open = false;
                this.toggle = true;
            }
        }
        protected _setDismissable()
        {
            if (this._status !== DrawerStatus.DISMISSABLE)
            {
                this._status = DrawerStatus.DISMISSABLE;

                this.modal = false;
                this.open = false;
                this.toggle = true;
            }
        }
        protected _setPermanent()
        {
            if (this._status !== DrawerStatus.PERMANENT)
            {
                this._status = DrawerStatus.PERMANENT;

                this.modal = false;
                this.open = true;
                this.toggle = false;
            }
        }

        protected _onResizeEvent(evt?: Event)
        {
            const windowWidth = window.innerWidth;

            if (windowWidth < DrawerLayout.MOBILE_SIZE)
            {
                this._setModal();
            }
            else if (windowWidth < DrawerLayout.TABLET_SIZE)
            {
                this._setDismissable();
            }
            else
            {
                this._setPermanent();
            }
        }

        @Watch("open")
        @Emit("input")
        protected _onOpenChanged(value: boolean, oldValue: boolean)
        {
            if (this.modal)
            {
                return this.open;
            }

            return false;
        }

        public mounted(): void
        {
            window.addEventListener("resize", this._onResizeEvent);

            this._onResizeEvent();
        }
        public destroyed(): void
        {
            window.removeEventListener("resize", this._onResizeEvent);
        }

        public toggleDrawer(evt?: Event): void
        {
            this.open = !this.open;
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/base";

    @import "@material/animation/variables";
    @import "@material/drawer/variables";

    .mdc-drawer-app-content
    {
        transition-duration: $mdc-drawer-animation-enter;
        transition-property: margin;
        transition-timing-function: $mdc-animation-standard-curve-timing-function;

        & > #nav-bar
        {
            transition-duration: $mdc-drawer-animation-enter;
            transition-property: width;
            transition-timing-function: $mdc-animation-standard-curve-timing-function;
        }

        &.mdc-drawer-app-content--open
        {
            transition-duration: $mdc-drawer-animation-exit;

            & > #nav-bar
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

    #jumbotron
    {
        background: #004BA0;
        color: #FFFFFF;
        padding: 200px 8px 8px 8px;

        cite::before
        {
            content: "—";
        }
    }

    #main
    {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 8px;
    }

    #nav
    {
        padding: 30px;

        a
        {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active
            {
                color: #42b983;
            }
        }
    }
</style>
