<template>
    <nav class="mdc-list">
        <slot></slot>
    </nav>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MDCList } from "@material/list";

    export interface NavigationListData
    {
        _list?: MDCList;
    }

    export default Vue.extend({
        name: "NavigationList",

        data: (): NavigationListData => ({ }),

        mounted: function(): void
        {
            this._list = MDCList.attachTo(this.$el);
            this._list.wrapFocus = true;
        }
    });
</script>
