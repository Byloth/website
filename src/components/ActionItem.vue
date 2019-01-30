<template>
    <a href="#" class="material-icons" v-bind:alt="description" v-bind:title="description" v-bind:aria-label="description">{{ icon }}</a>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";

    @Component
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

