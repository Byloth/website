<template>
    <button class="mdc-button"
            :class="classes"
            :alt="title"
            :title="title"
            :aria-label="title"
            @click="$emit('click', $event)">
        <div class="mdc-button__ripple"></div>
        <span v-if="icon"
              class="material-icons mdc-button__icon"
              aria-hidden="true">
            {{ icon }}
        </span>
        <span class="mdc-button__label">
            <slot></slot>
        </span>
    </button>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCRipple } from "@material/ripple";

    interface ButtonData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "Button",
        props: {
            title: {
                default: "",
                type: String
            },
            icon: {
                default: "",
                type: String
            },
            outlined: {
                default: false,
                type: Boolean
            },
            raised: {
                default: false,
                type: Boolean
            },
            unelevated: {
                default: false,
                type: Boolean
            }
        },

        data: (): ButtonData => ({ }),

        computed: {
            classes(): Record<string, boolean>
            {
                return {
                    "mdc-button--outlined": this.outlined,
                    "mdc-button--raised": this.raised,
                    "mdc-button--unelevated": this.unelevated
                };
            }
        },

        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        }
    });
</script>

<style lang="scss" scoped>
</style>
