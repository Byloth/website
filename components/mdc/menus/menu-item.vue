<template>
    <li class="mdc-list-item"
        role="menuitem"
        @click="$emit('click', $event)"
        @keydown.enter="$emit('click', $event)">
        <span ref="ripple" class="mdc-list-item__ripple"></span>
        <span v-if="icon"
              class="material-icons mdc-list-item__graphic"
              aria-hidden="true">
            {{ icon }}
        </span>
        <span class="mdc-list-item__text">
            <slot></slot>
        </span>
    </li>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCRipple } from "@material/ripple";

    interface MenuItemData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "MenuItem",
        props: {
            icon: {
                default: "",
                type: String
            }
        },

        data: (): MenuItemData => ({ }),
        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
        }
    });
</script>

<style lang="scss" scoped>
</style>
