<template>
    <aside class="mdc-drawer">
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
</template>

<script lang="ts">
    import { Component, Emit, Prop, Vue, Watch } from "vue-property-decorator";

    import DrawerComponent from "@/mdc/components/DrawerComponent";
    import DrawerFoundation from "@/mdc/foundation/DrawerFoundation";

    @Component
    export default class Drawer extends Vue
    {
        protected _mdcComponent!: DrawerComponent;

        @Prop({
            required: true,
            type: Boolean
        })
        public value!: boolean;

        public constructor()
        {
            super();

            this.value = false;
        }

        @Emit("input")
        protected _emitInput(evt: Event): boolean
        {
            return this._mdcComponent.open;
        }

        @Watch("value")
        protected _toggle(value: boolean, oldValue: boolean)
        {
            this._mdcComponent.open = value;
        }

        public mounted(): void
        {
            this._mdcComponent = new DrawerComponent(this.$el);
            this._mdcComponent.listen(DrawerFoundation.strings.OPEN_EVENT, this._emitInput);
            this._mdcComponent.listen(DrawerFoundation.strings.CLOSE_EVENT, this._emitInput);
        }
        public destroyed(): void
        {
            this._mdcComponent.unlisten(DrawerFoundation.strings.CLOSE_EVENT, this._emitInput);
            this._mdcComponent.unlisten(DrawerFoundation.strings.OPEN_EVENT, this._emitInput);
            this._mdcComponent.destroy();
        }
    }
</script>
