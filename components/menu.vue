<template>
    <div class="mdc-menu mdc-menu-surface">
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

    interface MenuData { _menu?: MDCMenu; }

    export default Vue.extend({
        name: "Menu",

        data: (): MenuData => ({ }),
        mounted: function(): void
        {
            this._menu = new MDCMenu(this.$el);
        }
    });
</script>

<style lang="scss" scoped>
</style>
