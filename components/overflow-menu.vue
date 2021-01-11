<template>
    <ActionButton class="mdc-top-app-bar__action-item mdc-menu-surface--anchor"
                  :title="title"
                  @click="toggleMenu">
        <span class="material-icons">
            more_vert
        </span>
        <Menu v-model="open">
            <template v-for="action in actions">
                <template v-if="action.path">
                    <NuxtLink :key="action.id"
                              v-slot="{ href }"
                              :to="action.path">
                        <MenuAnchor :href="href"
                                    rel="nofollow noopener noreferrer"
                                    target="_blank">
                            {{ action.title }}
                        </MenuAnchor>
                    </NuxtLink>
                </template>
                <template v-else>
                    <MenuItem :key="action.id" @click="$emit('select', action)">
                        {{ action.title }}
                    </MenuItem>
                </template>
            </template>
        </Menu>
    </ActionButton>
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
                required: true,
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
