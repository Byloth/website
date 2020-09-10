<template>
    <drawer-layout v-model="disable" />
</template>

<script lang="ts">
    import Vue from "vue";

    import DrawerLayout from "./skeleton/DrawerLayout.vue";

    export interface AppData
    {
        _body?: HTMLElement;

        disable: boolean;
    }

    export default Vue.extend({
        name: "App",
        components: { "drawer-layout": DrawerLayout },

        data: (): AppData => ({ disable: false }),

        watch: {
            disable(value: boolean, oldValue: boolean)
            {
                if (value === true)
                {
                    this._body!.setAttribute("disabled", "");
                }
                else
                {
                    this._body!.removeAttribute("disabled");
                }
            }
        },

        mounted(): void
        {
            this._body = document.querySelector("body")!;
        }
    });
</script>

<style lang="scss">
    @import "~@/styles/main";
</style>
