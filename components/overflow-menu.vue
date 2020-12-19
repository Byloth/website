<template>
    <ActionItem class="mdc-top-app-bar__action-item mdc-menu-surface--anchor"
                :title="title"
                @click="toggleMenu">
        more_vert
        <Menu v-model="open">
            <MenuItem v-for="action in actions"
                      :key="action.id"
                      @click="$emit('select', action.id)">
                {{ action.title }}
            </MenuItem>
        </Menu>
    </ActionItem>
</template>

<script lang="ts">
    import Vue from "vue";

    interface OverflowMenuData { open: boolean; }

    export default Vue.extend({
        name: "OverflowMenu",
        props: {
            actions: {
                default: () => [],

                type: Array
            },
            title: {
                default: "",
                type: String
            }
        },

        data: (): OverflowMenuData => ({ open: false }),

        methods: {
            toggleMenu(): void
            {
                this.open = !this.open;
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
