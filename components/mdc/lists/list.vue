<template>
    <nav class="mdc-list">
        <slot></slot>
    </nav>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCList } from "@material/list";

    interface ListData { _list?: MDCList; }

    export default Vue.extend({
        name: "List",

        data: (): ListData => ({ }),

        mounted: function(): void
        {
            this._list = MDCList.attachTo(this.$el);
            this._list.wrapFocus = true;
        }
    });
</script>
