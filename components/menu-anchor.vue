<template>
    <li class="mdc-list-item" role="menuitem">
        <a :href="href"
           :rel="rel"
           :target="target">
            <span ref="ripple" class="mdc-list-item__ripple"></span>
            <span v-if="icon"
                  class="material-icons mdc-list-item__graphic"
                  aria-hidden="true">
                {{ icon }}
            </span>
            <span class="mdc-list-item__text">
                <slot></slot>
            </span>
        </a>
    </li>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MDCRipple } from "@material/ripple";

    interface MenuAnchorData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "MenuAnchor",
        props: {
            href: {
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

        data: (): MenuAnchorData => ({ }),
        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-list-item
    {
        & > a
        {
            color: variables.$not-quite-black;
            outline: none;
            text-decoration: none;
        }
    }
</style>
