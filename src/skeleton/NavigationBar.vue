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
    import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

    import config from '@/config';

    import ActionItem from '@/components/ActionItem.vue';
    import TopAppBarComponent from '@/mdc/components/TopAppBarComponent';

    @Component({ components: { 'action-item': ActionItem }})
    export default class NavigationBar extends Vue
    {
        protected static NAVIGATION_EVENT: string = 'MDCTopAppBar:nav';

        protected _mdcComponent!: TopAppBarComponent;

        public title: string;

        public constructor()
        {
            super();

            this.title = config.title;
        }

        @Emit('drawer-toggle')
        protected _toggleDrawer(evt: Event): void { }

        public mounted(): void
        {
            this._mdcComponent = new TopAppBarComponent(this);
            this._mdcComponent.listen(NavigationBar.NAVIGATION_EVENT, this._toggleDrawer);
        }
        public destroyed(): void
        {
            this._mdcComponent.unlisten(NavigationBar.NAVIGATION_EVENT, this._toggleDrawer);
            this._mdcComponent.destroy();
        }
    }
</script>
