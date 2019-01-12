<template>
    <header class="mdc-top-app-bar mdc-top-app-bar mdc-top-app-bar--fixed">
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
    import { Component, Prop, Vue } from "vue-property-decorator";

    import TopAppBarComponent from "../mdc/components/TopAppBarComponent";

    @Component
    export default class TopAppBar extends Vue
    {
        private _mdcComponent!: TopAppBarComponent;

        @Prop({
            default: "Titolo",
            required: true,
            type: String
        })
        public title!: string;

        protected mounted(): void
        {
            this._mdcComponent = new TopAppBarComponent(this);
        }
        protected destroyed(): void
        {
            this._mdcComponent.destroy();
        }
    }
</script>

<style lang="scss" scoped="scoped">
    @import "@material/top-app-bar/mdc-top-app-bar";
</style>
