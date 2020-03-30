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
    @import "@/styles/base";
</style>
