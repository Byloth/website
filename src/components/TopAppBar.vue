<template>
    <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">menu</a>
                <span class="mdc-top-app-bar__title">{{ title }}</span>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Download" alt="Download">file_download</a>
                <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Print this page" alt="Print this page">print</a>
                <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Bookmark this page" alt="Bookmark this page">bookmark</a>
            </section>
        </div>
    </header>
</template>

<script lang="ts">
    import { Component, Emit, Prop, Vue } from "vue-property-decorator";

    import TopAppBarComponent from "@/mdc/components/TopAppBarComponent";

    @Component
    export default class TopAppBar extends Vue
    {
        protected _mdcComponent!: TopAppBarComponent;

        @Prop({
            default: "Titolo",
            required: true,
            type: String
        })
        public title!: string;

        @Emit("toggle-drawer")
        protected _toggleDrawer(evt: Event)
        {
            console.debug(evt);
        }

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

<style lang="scss" scoped="scoped">
    @import "@material/top-app-bar/mdc-top-app-bar";
</style>
