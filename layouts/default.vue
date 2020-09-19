<template>
    <drawer-layout id="drawer-layout" v-model="disable">
        <nuxt />
    </drawer-layout>
</template>

<script lang="ts">
    import Vue from "vue";

    import DrawerLayout from "./core/drawer-layout.vue";

    export interface AppData
    {
        _body?: HTMLElement;

        disable: boolean;
    }

    export default Vue.extend({
        name: "DefaultLayout",
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
