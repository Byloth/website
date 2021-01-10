<template>
    <a class="mdc-list-item"
       :class="classes"
       :alt="title"
       :title="title"
       :aria-label="title"
       @click="$emit('click', $event)">
        <span class="mdc-list-item__ripple"></span>
        <template v-if="fa">
            <span class="fab mdc-list-item__graphic"
                  :class="`fa-${icon}`"
                  aria-hidden="true">
            </span>
        </template>
        <template v-else>
            <span class="material-icons mdc-list-item__graphic" aria-hidden="true">
                {{ icon }}
            </span>
        </template>
        <span class="mdc-list-item__text">
            <slot></slot>
        </span>
    </a>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "ListItem",
        props: {
            active: {
                default: false,
                type: Boolean
            },
            fa: {
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
    .mdc-list-item
    {
        & > .fab
        {
            font-size: 24px;
        }

        &[title]:hover
        {
            text-decoration: none;
        }
    }
</style>
