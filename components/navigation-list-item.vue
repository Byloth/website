<template>
    <a class="mdc-list-item"
       :class="classes"
       :alt="title"
       :title="title"
       :aria-label="title"
       @click="$emit('click', $event)">
        <span class="mdc-list-item__ripple"></span>
        <span class="material-icons mdc-list-item__graphic" aria-hidden="true">
            {{ icon }}
        </span>
        <span class="mdc-list-item__text">
            <slot></slot>
        </span>
    </a>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "NavigationListItem",
        props: {
            active: {
                default: false,
                type: Boolean
            },
            icon: {
                default: "label",
                type: String
            },
            title: {
                required: true,
                type: String
            }
        },
        computed: {
            classes(): Record<string, boolean>
            {
                return { "mdc-list-item--activated": this.active };
            }
        }
    });
</script>

<style lang="scss" scoped>
    a[title]:hover
    {
        text-decoration: none;
    }
</style>
