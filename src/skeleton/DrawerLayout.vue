<template>
    <div>
        <drawer id="drawer" v-model="isDrawerOpen">
            <list-item class="mdc-list-item--activated" icon="inbox" description="Inbox" />
            <list-item icon="send" description="Outgoing" />
            <list-item icon="drafts" description="Draft" />
        </drawer>
        <div class="mdc-drawer-app-content">
            <nav-bar id="nav-bar" @drawer-toggle="toggleDrawer" />
            <div id="main">
                <div id="nav">
                    <span v-for="page in pages" :key="page.id">
                        <router-link :to="page.path">{{ page.title }}</router-link> |
                    </span>
                </div>
                <slot />
            </div>
        </div>
        <div class="mdc-drawer-scrim" />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import config, { PageOptions } from "@/config";

    import ListItem from "@/components/ListItem.vue";

    import Drawer from "./Drawer.vue";
    import NavigationBar from "./NavigationBar.vue";

    @Component({
        name: "DrawerLayout",
        components: {
            "drawer": Drawer,
            "list-item": ListItem,
            "nav-bar": NavigationBar
        }
    })
    export default class DrawerLayout extends Vue
    {
        public readonly pages: PageOptions[];

        public isDrawerOpen: boolean;

        public constructor()
        {
            super();

            this.pages = config.pages;
            this.isDrawerOpen = false;
        }

        public toggleDrawer(evt: Event): void
        {
            this.isDrawerOpen = !this.isDrawerOpen;
        }
    }
</script>

<style lang="scss" scoped="scoped">
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

            .mdc-drawer.mdc-drawer--open + &
            {
                transition-duration: $mdc-drawer-animation-exit;
                width: calc(100% - #{$mdc-drawer-width});
            }
        }

        .mdc-drawer.mdc-drawer--open + &
        {
            transition-duration: $mdc-drawer-animation-exit;
        }
    }

    #main
    {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 200px 8px 8px 8px;
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
