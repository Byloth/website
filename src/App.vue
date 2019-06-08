<template>
    <div id="app">
        <drawer-layout id="drawer-layout">
            <template slot="menu">
                <div id="nav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </div>
            </template>
            <router-view />
        </drawer-layout>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import DrawerLayout from "@/skeleton/DrawerLayout.vue";

    @Component({ components: { "drawer-layout": DrawerLayout } })
    export default class App extends Vue { }
</script>

<style lang="scss">
    @import "@material/drawer/mdc-drawer";
    @import "@material/list/mdc-list";
    @import "@material/ripple/mdc-ripple";
    @import "@material/top-app-bar/mdc-top-app-bar";

    body
    {
        margin: 0px;
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
