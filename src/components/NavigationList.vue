<template>
    <nav class="mdc-list">
        <slot></slot>
    </nav>
</template>

<script lang="ts">
    import { MDCList } from "@material/list";
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "NavigationList" })
    export default class ListItem extends Vue
    {
        protected _list!: MDCList;

        public mounted()
        {
            this._list = MDCList.attachTo(this.$el);
            this._list.wrapFocus = true;
        }
    }
</script>
