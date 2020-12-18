<template>
    <div :id="id"
         class="mdc-tooltip"
         role="tooltip"
         aria-hidden="true">
        <div class="mdc-tooltip__surface">
            Lorem ipsum dolor...
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MDCTooltip } from "@material/tooltip";

    interface TooltipData { _tooltip?: MDCTooltip; }

    export default Vue.extend({
        name: "Tooltip",
        props: {
            id: {
                required: true,
                type: String
            }
        },

        data: (): TooltipData => ({ }),
        mounted: function(): void
        {
            this._tooltip = new MDCTooltip(this.$el);
        }
    });
</script>

<style lang="scss" scoped>
</style>
