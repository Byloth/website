<template>
    <ActionButton class="mdc-top-app-bar__action-item mdc-menu-surface--anchor"
                  :title="title"
                  @click="toggleMenu">
        <span class="material-icons">
            more_vert
        </span>
        <Menu v-model="isOpen">
            <template v-for="action in actions">
                <template v-if="action.path">
                    <NuxtLink :key="action.id"
                              v-slot="{ href }"
                              custom
                              :to="action.path">
                        <MenuAnchor :href="href"
                                    rel="nofollow noopener noreferrer"
                                    target="_blank">
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
    </ActionButton>
</template>

<script lang="ts">
    import Vue from "vue";

    import ActionButton from "./mdc/actions/action-button.vue";
    import Menu from "./mdc/menus/menu.vue";
    import MenuAnchor from "./mdc/menus/menu-anchor.vue";
    import MenuItem from "./mdc/menus/menu-item.vue";

    interface OverflowMenuData { isOpen: boolean; }

    export default Vue.extend({
        name: "OverflowMenu",
        components: { ActionButton, Menu, MenuAnchor, MenuItem },
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
