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
            <div id="jumbotron" v-if="dailyMessage.isLoaded">
                <blockquote>
                    <template v-if="dailyMessage.typeId === 0">
                        <h2 v-html="dailyMessage.text" />
                    </template>
                    <template v-else-if="dailyMessage.typeId === 1">
                        <h2 v-html="dailyMessage.text" />
                        <footer>
                            <cite>{{ dailyMessage.author }}</cite>
                            <template v-if="dailyMessage.source">
                                di “{{ dailyMessage.source }}”
                            </template>
                        </footer>
                    </template>
                    <template v-else-if="dailyMessage.typeId === 2">
                        <h2 v-html="dailyMessage.text" />
                        <footer>
                            traduzione di “{{ dailyMessage.source }}”
                        </footer>
                    </template>
                    <template v-else-if="dailyMessage.typeId === 3">
                        <h2 v-html="dailyMessage.text" />
                    </template>
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

    import { DailyMessage } from "@/models";

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

        public dailyMessage: DailyMessage;

        @Prop({
            default: false,
            type: Boolean
        })
        public value!: boolean;

        public get classes(): Record<string, boolean>
        {
            return { "mdc-drawer-app-content--open": (this.open && !this.modal) };
        }

        public constructor()
        {
            super();

            this._status = DrawerStatus.DISMISSABLE;

            this.pages = config.pages;

            this.modal = false;
            this.open = false;
            this.toggle = true;

            this.dailyMessage = DailyMessage.Empty;
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

        public created(): void
        {
            DailyMessage.GetRandomOne()
                .then((dailyMessage) =>
                {
                    this.dailyMessage = dailyMessage;

                    if (this.dailyMessage.script)
                    {
                        // eslint-disable-next-line no-eval
                        eval(this.dailyMessage.script);
                    }
                });
        }
        public mounted(): void
        {
            window.addEventListener("resize", this._onResizeEvent, { passive: true });

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
        display: flex;
        min-height: 114px;
        padding: 200px 8px 8px 16px;

        & > blockquote
        {
            border-left: 0.333em solid lighten($mdc-theme-primary, 15);
            padding: 0px 20px;

            &::before
            {
                color: lighten($mdc-theme-primary, 20);
                content: "“";
                font-size: 3em;
                left: 18px;
                position: absolute;
            }

            & > h2
            {
                margin-top: 0px;
            }

            & > footer
            {
                padding: 0px 0px 1em 1em;

                &::before
                {
                    content: "— ";
                }
            }
        }

        @media (max-width: 599px)
        {
            padding: 200px 8px 8px 10px;

            & > blockquote
            {
                padding: 0px 18px;

                &::before
                {
                    left: 15px;
                }
            }
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
