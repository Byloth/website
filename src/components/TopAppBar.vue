<template>
    <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <action-item class="mdc-top-app-bar__navigation-icon" icon="menu" />
                <span class="mdc-top-app-bar__title">{{ title }}</span>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                <action-item class="mdc-top-app-bar__action-item" icon="file_download" description="Download" />
                <action-item class="mdc-top-app-bar__action-item" icon="print" description="Print this page" />
                <action-item class="mdc-top-app-bar__action-item" icon="bookmark" description="Bookmark this page" />
            </section>
        </div>
    </header>
</template>

<script lang="ts">
    import { Component, Emit, Prop, Vue } from "vue-property-decorator";

    import ActionItem from "@/components/ActionItem.vue";
    import TopAppBarComponent from "@/mdc/components/TopAppBarComponent";

    @Component({ components: { "action-item": ActionItem } })
    export default class TopAppBar extends Vue
    {
        protected _mdcComponent!: TopAppBarComponent;

        @Prop({
            default: "Titolo",
            required: true,
            type: String
        })
        public title!: string;

        @Emit("drawer-toggle")
        protected _toggleDrawer(evt: Event): void { }

        public mounted(): void
        {
            this._mdcComponent = new TopAppBarComponent(this);
            this._mdcComponent.listen("MDCTopAppBar:nav", this._toggleDrawer);
        }
        public destroyed(): void
        {
            this._mdcComponent.unlisten("MDCTopAppBar:nav", this._toggleDrawer);
            this._mdcComponent.destroy();
        }
    }
</script>
