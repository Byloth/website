<template>
    <a class="mdc-icon-button"
       :alt="title"
       :title="title"
       :aria-label="title">
        <slot></slot>
    </a>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MDCRipple } from "@material/ripple";

    interface ActionAnchorData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "ActionAnchor",
        props: {
            title: {
                required: true,
                type: String
            }
        },

        data: (): ActionAnchorData => ({ }),
        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        }
    });
</script>

<style lang="scss" scoped>
    .mdc-icon-button
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
