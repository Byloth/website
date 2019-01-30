<template>
    <aside class="mdc-drawer mdc-drawer--modal">
        <div class="mdc-drawer__content">
            <nav class="mdc-list">
                <slot />
            </nav>
        </div>
    </aside>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component
    export default class Drawer extends Vue { }
</script>
