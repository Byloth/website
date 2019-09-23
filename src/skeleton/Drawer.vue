<template>
    <div>
        <aside class="mdc-drawer mdc-drawer--modal">
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
        <div class="mdc-drawer-scrim" />
    </div>
</template>

<script lang="ts">
    import { MDCDrawer } from "@material/drawer/index";
    import { Component, Emit, Prop, Vue } from "vue-property-decorator";

    import DrawerFoundation from "../mdc/foundation/DrawerFoundation";

    @Component
    export default class Drawer extends Vue
    {
        protected _mdcComponent!: MDCDrawer;

        public isOpen: boolean;

        public constructor()
        {
            super();

            this.isOpen = false;
        }

        @Emit("opened")
        protected _opened(evt: Event): void
        {
            this.isOpen = true;
        }

        @Emit("closed")
        protected _closed(evt: Event): void
        {
            this.isOpen = false;
        }

        public open(): void
        {
            this._mdcComponent.open = true;
        }
        public close(): void
        {
            this._mdcComponent.open = false;
        }

        public mounted(): void
        {
            const drawer = this.$el.querySelector(".mdc-drawer");

            if (drawer === null)
            {
                throw new Error("It wasn't possible to find a '.mdc-drawer' child.");
            }

            this._mdcComponent = new MDCDrawer(drawer);
            this._mdcComponent.listen(DrawerFoundation.strings.OPEN_EVENT, this._opened);
            this._mdcComponent.listen(DrawerFoundation.strings.CLOSE_EVENT, this._closed);
        }
        public destroyed(): void
        {
            this._mdcComponent.unlisten(DrawerFoundation.strings.CLOSE_EVENT, this._closed);
            this._mdcComponent.unlisten(DrawerFoundation.strings.OPEN_EVENT, this._opened);
            this._mdcComponent.destroy();
        }
    }
</script>
