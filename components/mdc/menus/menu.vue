<template>
    <div class="mdc-menu mdc-menu-surface"
         title=""
         @click.stop>
        <ul class="mdc-list"
            role="menu"
            aria-hidden="true"
            aria-orientation="vertical"
            tabindex="-1">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCMenu } from "@material/menu";
    import { strings } from "@material/menu-surface";

    interface MenuData { _menu?: MDCMenu; }

    export default Vue.extend({
        name: "Menu",
        props: {
            value: {
                default: false,
                type: Boolean
            }
        },

        data: (): MenuData => ({ }),

        watch: {
            value(value: boolean, oldValue: boolean): void
            {
                this._menu!.open = value;
            }
        },

        mounted: function(): void
        {
            this._menu = new MDCMenu(this.$el);
            this._menu.listen(strings.CLOSED_EVENT, this.onCloseEvent);
            this._menu.listen(strings.OPENED_EVENT, this.onOpenEvent);
        },
        destroyed: function(): void
        {
            this._menu!.unlisten(strings.OPENED_EVENT, this.onOpenEvent);
            this._menu!.unlisten(strings.CLOSED_EVENT, this.onCloseEvent);
        },

        methods: {
            onOpenEvent(): void
            {
                this.$emit("input", true);
            },
            onCloseEvent(): void
            {
                this.$emit("input", false);
            }
        }
    });
</script>

<style lang="scss" scoped>
    .mdc-menu
    {
        text-decoration: none;
    }
</style>
