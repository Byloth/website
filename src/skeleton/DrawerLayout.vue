<template>
    <div id="drawer-layout">
        <top-app-bar title="Byloth's Website" v-on:drawer-toggle="toggleDrawer" />
        <drawer ref="drawer">
            <list-item class="mdc-list-item--activated" icon="inbox" description="Inbox" />
            <list-item icon="send" description="Outgoing" />
            <list-item icon="drafts" description="Draft" />
        </drawer>
        <div class="mdc-drawer-scrim" />
        <div id="main">
            <slot name="menu" />
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { MDCDrawer } from "@material/drawer/index";
    import { Component, Vue } from "vue-property-decorator";

    import Drawer from "@/components/Drawer.vue";
    import ListItem from "@/components/ListItem.vue";
    import TopAppBar from "@/components/TopAppBar.vue";

    @Component({
        components: {
            "drawer": Drawer,
            "list-item": ListItem,
            "top-app-bar": TopAppBar
        }
    })
    export default class DrawerLayout extends Vue
    {
        protected _mdcComponent!: MDCDrawer;

        public constructor()
        {
            super();
        }

        public toggleDrawer(evt: Event): void
        {
            this._mdcComponent.open = !this._mdcComponent.open;
        }

        public mounted(): void
        {
            const drawer: Vue = this.$refs.drawer as Vue;

            this._mdcComponent = new MDCDrawer(drawer.$el);
        }
        public destroyed(): void
        {
            this._mdcComponent.destroy();
        }
    }
</script>

<style lang="scss">
    body
    {
        margin: 0px;
    }

    #app
    {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #main
    {
        padding: 72px 8px 8px 8px;
    }
</style>
