<template>
    <ActionItem class="mdc-top-app-bar__action-item mdc-menu-surface--anchor"
                :title="title"
                @click="toggleMenu">
        <span class="material-icons">
            more_vert
        </span>
        <Menu v-model="isOpen">
            <MenuItem v-for="action in actions"
                      :key="action.id"
                      :href="action.path"
                      :title="action.title"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      @click="onClick(action, $event)">
                {{ action.title }}
            </MenuItem>
        </Menu>
    </ActionItem>
</template>

<script lang="ts">
    import Vue from "vue";

    import { Menu as Action } from "@/core/types";

    import ActionItem from "./mdc/action-item.vue";
    import Menu from "./mdc/menus/menu.vue";
    import MenuItem from "./mdc/menus/menu-item.vue";

    interface OverflowMenuData { isOpen: boolean; }

    export default Vue.extend({
        name: "OverflowMenu",
        components: { ActionItem, Menu, MenuItem },
        props: {
            actions: {
                default: () => [],
                type: Array
            },
            title: {
                required: true,
                type: String
            }
        },

        data: (): OverflowMenuData => ({ isOpen: false }),

        methods: {
            toggleMenu(): void
            {
                this.isOpen = !this.isOpen;
            },

            onClick(action: Action, evt: Event): void
            {
                if (!action.path)
                {
                    this.$emit("select", action, evt);
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
