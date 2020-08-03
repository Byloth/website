<template>
    <a class="mdc-list-item"
       :class="classes"
       :alt="description"
       :title="description"
       :aria-label="description"
       @click="$emit('click', $event)">
        <span class="mdc-list-item__ripple"></span>
        <span class="material-icons mdc-list-item__graphic" aria-hidden="true">{{ icon }}</span>
        <span class="mdc-list-item__text">
            <slot></slot>
        </span>
    </a>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({ name: "ListItem" })
    export default class ListItem extends Vue
    {
        @Prop({
            default: false,
            type: Boolean
        })
        public active!: boolean;

        @Prop({
            default: "label",
            type: String
        })
        public icon!: string;

        @Prop({
            required: true,
            type: String
        })
        public description!: string;

        protected get classes(): Record<string, boolean>
        {
            return { "mdc-list-item--activated": this.active };
        }
    }
</script>

<style lang="scss" scoped>
    a[title]:hover
    {
        text-decoration: none;
    }
</style>
