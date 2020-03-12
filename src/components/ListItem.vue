<template>
    <a class="mdc-list-item" href="#">
        <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{{ icon }}</i>
        <span class="mdc-list-item__text">
            <slot />
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
