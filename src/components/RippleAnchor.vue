<template>
    <a class="mdc-icon-button mdc-ripple-radius-unbounded mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
       :alt="description"
       :title="description"
       :aria-label="description">
        <slot></slot>
    </a>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MDCRipple } from "@material/ripple";

    export interface RippleAnchorData
    {
        _ripple?: MDCRipple;
    }

    export default Vue.extend({
        name: "RippleAnchor",
        props: {
            description: {
                required: true,
                type: String
            }
        },
        data: (): RippleAnchorData => ({ }),

        mounted(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        }
    });
</script>

<style lang="scss" scoped>
    a
    {
        text-align: center;
    }
</style>
