<template>
    <button class="material-icons mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
            :alt="description"
            :title="description"
            :aria-label="description">
        {{ icon }}
    </button>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component({ name: "ActionItem" })
    export default class ActionItem extends Vue
    {
        @Prop({
            required: true,
            type: String
        })
        public icon!: string;

        @Prop(String)
        public description?: string;
    }
</script>
