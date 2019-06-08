<template>
    <div>
        <drawer id="drawer" ref="drawer" @opened="drawerOpened" @closed="drawerClosed">
            <list-item class="mdc-list-item--activated" icon="inbox" description="Inbox" />
            <list-item icon="send" description="Outgoing" />
            <list-item icon="drafts" description="Draft" />
        </drawer>
        <nav-bar @drawer-toggle="toggleDrawer" />
        <div id="main">
            <div id="nav">
                <span v-for="page in pages" :key="page.id">
                    <router-link :to="page.path">{{ page.title }}</router-link> |
                </span>
            </div>
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import config, { PageOptions } from "@/config";

    import ListItem from "@/components/ListItem.vue";
    import Drawer from "@/skeleton/Drawer.vue";
    import NavigationBar from "@/skeleton/NavigationBar.vue";

    @Component({
        components: {
            "drawer": Drawer,
            "list-item": ListItem,
            "nav-bar": NavigationBar
        }
    })
    export default class DrawerLayout extends Vue
    {
        protected _drawer!: Drawer;

        public readonly pages: PageOptions[];

        public isOpen: boolean;

        public constructor()
        {
            super();

            this.pages = config.pages;
            this.isOpen = false;
        }

        public drawerOpened(evt: Event): void
        {
            this.isOpen = true;
        }
        public drawerClosed(evt: Event): void
        {
            this.isOpen = false;
        }

        public toggleDrawer(evt: Event): void
        {
            if (!(this.isOpen))
            {
                this._drawer.open();
            }
            else
            {
                this._drawer.close();
            }
        }

        public mounted(): void
        {
            this._drawer = this.$refs.drawer as Drawer;
        }
    }
</script>

<style lang="scss" scoped="scoped">
    #main
    {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 72px 8px 8px 8px;
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
