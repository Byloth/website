<template>
    <button class="mdc-icon-button"
            :alt="title"
            :title="title"
            :aria-label="title"
            @click="onClickEvent">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCRipple } from "@material/ripple";

    interface ActionButtonData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "ActionButton",
        props: {
            title: {
                required: true,
                type: String
            }
        },

        data: (): ActionButtonData => ({ }),
        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        },

        methods: {
            onClickEvent(evt: MouseEvent)
            {
                this.$emit("click", evt);
            }
        }
    });
</script>
