<template>
    <header class="mdc-top-app-bar mdc-top-app-bar--prominent">
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

    import config from "../config";

    import ActionItem from "../components/ActionItem.vue";
    import TopAppBarComponent from "../mdc/components/TopAppBarComponent";
    import TopAppBarFoundation from "../mdc/foundation/TopAppBarFoundation";

    @Component({ components: { "action-item": ActionItem }})
    export default class NavigationBar extends Vue
    {
        protected _mdcComponent!: TopAppBarComponent;

        public title: string;

        public constructor()
        {
            super();

            this.title = config.title;
        }

        @Emit("drawer-toggle")
        protected _toggleDrawer(evt: Event): void { }

        public mounted(): void
        {
            this.$scrollAnimate({
                startValue: 0,
                endValue: 128,
                changes: [{
                    property: "height",
                    startValue: 192,
                    endValue: 64
                }]
            });

            this._mdcComponent = new TopAppBarComponent(this);
            this._mdcComponent.listen(TopAppBarFoundation.strings.NAVIGATION_EVENT, this._toggleDrawer);
        }
        public destroyed(): void
        {
            this._mdcComponent.unlisten(TopAppBarFoundation.strings.NAVIGATION_EVENT, this._toggleDrawer);
            this._mdcComponent.destroy();
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .mdc-top-app-bar
    {
        transition: box-shadow 200ms linear;

        &.mdc-top-app-bar--prominent .mdc-top-app-bar__row
        {
            height: 192px;
                // -> 64px
        }

        &.mdc-top-app-bar--prominent .mdc-top-app-bar__title
        {
            font-size: 34px;
                // -> 20px

            padding-bottom: 0.4em; // 13.6px;
                // -> 0.1em - 2px;
        }
    }
</style>
