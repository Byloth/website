<template>
    <ActionItem class="mdc-top-app-bar__action-item mdc-menu-surface--anchor"
                :title="title"
                @click="toggleMenu">
        <span class="material-icons">
            more_vert
        </span>
        <Menu v-model="isOpen">
            <template v-for="action in actions">
                <template v-if="action.path">
                    <NuxtLink :key="action.id"
                              v-slot="{ href, navigate }"
                              custom
                              :to="action.path">
                        <MenuAnchor :href="href"
                                    rel="nofollow noopener noreferrer"
                                    target="_blank"
                                    @click="navigate">
                            {{ action.title }}
                        </MenuAnchor>
                    </NuxtLink>
                </template>
                <template v-else>
                    <MenuItem :key="action.id" @click="$emit('select', action, $event)">
                        {{ action.title }}
                    </MenuItem>
                </template>
            </template>
        </Menu>
    </ActionItem>
</template>

<script lang="ts">
    import Vue from "vue";

    import ActionItem from "./mdc/action-item.vue";
    import Menu from "./mdc/menus/menu.vue";
    import MenuAnchor from "./mdc/menus/menu-anchor.vue";
    import MenuItem from "./mdc/menus/menu-item.vue";

    interface OverflowMenuData { isOpen: boolean; }

    export default Vue.extend({
        name: "OverflowMenu",
        components: { ActionItem, Menu, MenuAnchor, MenuItem },
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
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
