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
    import Vue from "vue";

    import { MDCRipple } from "@material/ripple";

    export interface ActionItemData
    {
        _ripple?: MDCRipple;
    }

    export default Vue.extend({
        name: "ActionItem",
        props: {
            description: {
                required: true,
                type: String
            }
        },
        data: (): ActionItemData => ({ }),

        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        }
    });
</script>
