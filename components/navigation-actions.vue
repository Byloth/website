<template>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <template v-if="condensed">
            <OverflowMenu :actions="actions"
                          title="Altre opzioni"
                          @select="$emit('select', $event)" />
        </template>
        <template v-else>
            <ActionItem v-for="action in actions"
                        :key="action.id"
                        class="mdc-top-app-bar__action-item"
                        :title="action.title"
                        @click="$emit('select', action.id)">
                {{ action.icon }}
            </ActionItem>
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
                const windowWidth = window.innerWidth;

                if (windowWidth < MOBILE_SIZE)
                {
                    this.condensed = true;
                }
                else
                {
                    this.condensed = false;
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
