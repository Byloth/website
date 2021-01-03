<template>
    <li class="mdc-list-item" role="menuitem">
        <a :href="href">
            <span class="mdc-list-item__ripple"></span>
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
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
