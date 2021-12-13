<template>
    <li>
        <component :is="tag"
                   ref="item"
                   class="mdc-list-item"
                   role="menuitem"
                   v-bind="properties"
                   :alt="title"
                   :title="title"
                   :aria-label="title"
                   @click="$emit('click', evt)"
                   @keydown.enter="$emit('click', evt)">
            <span ref="ripple" class="mdc-list-item__ripple"></span>
            <span v-if="icon"
                  class="material-icons mdc-list-item__graphic"
                  aria-hidden="true">
                {{ icon }}
            </span>
            <span class="mdc-list-item__text">
                <slot></slot>
            </span>
        </component>
    </li>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCRipple } from "@material/ripple";

    interface MenuItemData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "MenuItem",
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

            rel: {
                default: "",
                type: String
            },
            target: {
                default: "",
                type: String
            }
        },

        data: (): MenuItemData => ({ }),

        computed: {
            properties(): Record<string, string>
            {
                if (this.href)
                {
                    return {
                        "href": this.href,
                        "rel": this.rel,
                        "target": this.target
                    };
                }

                return { };
            },
            tag(): string
            {
                return this.href ? "a" : "div";
            }
        },

        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$refs.item as Element);
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-list-item
    {
        color: variables.$not-quite-black;
        outline: none;
        text-decoration: none;

        &:hover
        {
            text-decoration: none;
        }
    }
</style>
