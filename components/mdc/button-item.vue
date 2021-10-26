<template>
    <component :is="tag"
               class="mdc-button"
               v-bind="properties"
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
    </component>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCRipple } from "@material/ripple";

    interface ButtonData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "ButtonItem",
        props: {
            href: {
                default: "",
                type: String
            },

            title: {
                default: "",
                type: String
            },
            icon: {
                default: "",
                type: String
            },

            // Colors
            //
            secondary: {
                default: false,
                type: Boolean
            },

            // Styles
            //
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
                    "mdc-button--secondary": this.secondary,

                    "mdc-button--outlined": this.outlined,
                    "mdc-button--raised": this.raised,
                    "mdc-button--unelevated": this.unelevated
                };
            },
            properties(): Record<string, string>
            {
                if (this.href)
                {
                    return { "href": this.href };
                }

                return { };
            },
            tag(): string
            {
                if (this.href)
                {
                    return "a";
                }

                return "button";
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
    .mdc-button
    {
        &:hover
        {
            text-decoration: none;
        }
    }
</style>
