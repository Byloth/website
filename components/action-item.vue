<template>
    <button class="material-icons mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
            :alt="title"
            :title="title"
            :aria-label="title"
            @click.passive="onClickEvent">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MDCRipple } from "@material/ripple";

    interface ActionItemData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "ActionItem",
        props: {
            title: {
                required: true,
                type: String
            }
        },

        data: (): ActionItemData => ({ }),
        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        },

        methods: {
            onClickEvent(evt?: MouseEvent)
            {
                this.$emit("click", evt);
            }
        }
    });
</script>
