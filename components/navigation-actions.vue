<template>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <template v-if="condensed">
            <OverflowMenu :actions="actions"
                          title="Altre opzioni"
                          @select="$emit('select', $event)" />
        </template>
        <template v-else>
            <template v-for="action in actions">
                <template v-if="action.path">
                    <ActionAnchor :key="action.id"
                                  class="mdc-top-app-bar__action-item"
                                  :href="action.path"
                                  :title="action.title"
                                  rel="nofollow noopener noreferrer"
                                  target="_blank">
                        <span class="material-icons">
                            {{ action.icon }}
                        </span>
                    </ActionAnchor>
                </template>
                <template v-else>
                    <ActionButton :key="action.id"
                                  class="mdc-top-app-bar__action-item"
                                  :title="action.title"
                                  @click="$emit('select', action)">
                        {{ action.icon }}
                    </ActionButton>
                </template>
            </template>
        </template>
    </section>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MOBILE_SIZE } from "@/core/constants";

    interface NavigationActionsData { condensed: boolean; }

    export default Vue.extend({
        name: "NavigationActions",
        props: {
            actions: {
                default: () => [],

                type: Array
            }
        },

        data: (): NavigationActionsData => ({ condensed: false }),
        mounted: function(): void
        {
            window.addEventListener("resize", this.onResizeEvent, { capture: true, passive: true });

            this.onResizeEvent();
        },
        destroyed: function(): void
        {
            window.removeEventListener("resize", this.onResizeEvent);
        },

        methods: {
            onResizeEvent(evt?: Event): void
            {
                this.condensed = (window.innerWidth < MOBILE_SIZE);
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
