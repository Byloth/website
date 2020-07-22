<template>
    <a class="mdc-list-item" href="#">
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
            default: "bookmark",
            type: String
        })
        public icon!: string;
    }
</script>
