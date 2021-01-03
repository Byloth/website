<template>
    <a class="mdc-icon-button mdc-ripple-radius-unbounded mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
       :alt="title"
       :title="title"
       :aria-label="title">
        <slot></slot>
    </a>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MDCRipple } from "@material/ripple";

    interface RippleAnchorData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "RippleAnchor",
        props: {
            title: {
                required: true,
                type: String
            }
        },

        data: (): RippleAnchorData => ({ }),
        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        }
    });
</script>

<style lang="scss" scoped>
    a
    {
        align-items: center;
        display: inline-flex;
        justify-content: center;

        &:hover
        {
            text-decoration: none;
        }
    }
</style>
