<template>
    <div id="app">
        <drawer-layout id="drawer-layout">
            <router-view />
        </drawer-layout>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import DrawerLayout from "./skeleton/DrawerLayout.vue";

    @Component({ components: { "drawer-layout": DrawerLayout } })
    export default class App extends Vue { }
</script>

<style lang="scss">
    $mdc-typography-font-family: Ubuntu, Roboto, Helvetica, sans-serif;

    @import "@material/drawer/mdc-drawer";
    @import "@material/list/mdc-list";
    @import "@material/ripple/mdc-ripple";
    @import "@material/top-app-bar/mdc-top-app-bar";

    *
    {
        font-family: $mdc-typography-font-family;
    }
    body
    {
        margin: 0px;
        overflow-y: scroll;

        // TODO: Remove this... It's temporary!
        //
            height: 2048px;
    }
</style>
