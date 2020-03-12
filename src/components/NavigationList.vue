<template>
    <nav ref="list" class="mdc-list">
        <slot />
    </nav>
</template>

<script lang="ts">
    import { MDCList, strings } from "@material/list";
    import { Component, Vue, Emit } from "vue-property-decorator";

    @Component({ name: "NavigationList" })
    export default class ListItem extends Vue
    {
        protected _list!: MDCList;

        @Emit("select")
        protected _onSelectHandler(evt: Event)
        {
            return evt;
        }

        public mounted()
        {
            this._list = MDCList.attachTo(this.$el);
            this._list.wrapFocus = true;

            this._list.listen(strings.ACTION_EVENT, this._onSelectHandler);
        }
        public destroyed()
        {
            this._list.unlisten(strings.ACTION_EVENT, this._onSelectHandler);
        }
    }
</script>
