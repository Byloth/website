<template>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <ActionItem class="mdc-top-app-bar__action-item" title="Actions">
            more_vert
        </ActionItem>
        <Menu>
            <MenuItem>A Menu Item</MenuItem>
            <MenuItem>Another Menu Item</MenuItem>
        </Menu>
        <ActionItem v-for="action in actions"
                    :key="action.id"
                    class="mdc-top-app-bar__action-item"
                    :title="action.title"
                    @click="$emit('select', action.id)">
            {{ action.icon }}
        </ActionItem>
    </section>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "NavigationActions",
        props: {
            actions: {
                default: () => [],

                type: Array
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
