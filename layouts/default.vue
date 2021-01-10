<template>
    <DrawerLayout id="drawer-layout" @disable="onDisableEvent">
        <Nuxt />
    </DrawerLayout>
</template>

<script lang="ts">
    import Vue from "vue";

    import DrawerLayout from "./core/drawer-layout.vue";

    interface DefaultLayoutData { _body?: HTMLElement; }

    export default Vue.extend({
        name: "DefaultLayout",
        components: { DrawerLayout },

        data: (): DefaultLayoutData => ({ }),
        mounted: function(): void
        {
            if (process.browser)
            {
                this._body = document.querySelector("body")!;
            }
        },

        methods: {
            onDisableEvent(disabled: boolean): void
            {
                if (disabled === true)
                {
                    this._body!.removeAttribute("disabled");
                }
                else
                {
                    this._body!.setAttribute("disabled", "");
                }
            }
        }
    });
</script>
