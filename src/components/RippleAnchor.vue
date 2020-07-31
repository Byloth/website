<template>
    <a class="mdc-icon-button mdc-ripple-radius-unbounded mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
       :alt="description"
       :title="description"
       :aria-label="description">
        <slot></slot>
    </a>
</template>

<script lang="ts">
    import { MDCRipple } from "@material/ripple";
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({ name: "RippleAnchor" })
    export default class RippleAnchor extends Vue
    {
        protected _ripple!: MDCRipple;

        @Prop({
            required: true,
            type: String
        })
        public description?: string;

        public mounted(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        }
    }
</script>

<style lang="scss" scoped>
    a
    {
        text-align: center;
    }
</style>
