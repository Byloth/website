<template>
    <drawer-layout id="drawer-layout" v-model="disable">
        <router-view />
    </drawer-layout>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from "vue-property-decorator";

    import DrawerLayout from "./skeleton/DrawerLayout.vue";

    @Component({
        name: "App",
        components: { "drawer-layout": DrawerLayout }
    })
    export default class App extends Vue
    {
        protected _body!: HTMLElement;

        public disable: boolean;

        public constructor()
        {
            super();

            this.disable = false;
        }

        @Watch("disable")
        protected _onDisableChanged(value: boolean, oldValue: boolean)
        {
            if (value === true)
            {
                this._body.setAttribute("disabled", "");
            }
            else
            {
                this._body.removeAttribute("disabled");
            }
        }

        public mounted()
        {
            this._body = document.querySelector("body")!;
        }
    }
</script>

<style lang="scss">
    $mdc-theme-primary: #1976d2;
    $mdc-theme-accent: #ffd600;
    $mdc-typography-font-family: Ubuntu, Roboto, Helvetica, sans-serif;

    @import "@material/drawer/mdc-drawer";
    @import "@material/icon-button/mdc-icon-button";
    @import "@material/list/mdc-list";
    @import "@material/ripple/mdc-ripple";
    @import "@material/top-app-bar/mdc-top-app-bar";

    *
    {
        font-family: $mdc-typography-font-family;

        &::selection
        {
            background-color: rgba($mdc-theme-accent, 0.5);
        }
    }
    body
    {
        margin: 0px;
        overflow-y: scroll;

        &[disabled]
        {
            overflow: hidden;
        }
    }
</style>
