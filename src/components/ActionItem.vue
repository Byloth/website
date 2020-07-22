<template>
    <button class="material-icons mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
            :alt="description"
            :title="description"
            :aria-label="description"
            @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import { MDCRipple } from "@material/ripple";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({ name: "ActionItem" })
    export default class ActionItem extends Vue
    {
        protected _ripple!: MDCRipple;

        @Prop(String)
        public description?: string;

        public mounted(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        }
    }
</script>
