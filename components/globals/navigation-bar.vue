<template>
    <TopAppBar class="mdc-top-app-bar--prominent">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <ActionButton v-if="toggle"
                          class="mdc-top-app-bar__navigation-icon"
                          title="Toggle navigation drawer"
                          @click="$emit('drawer-toggle', $event)">
                menu
            </ActionButton>
            <h1 ref="title" class="mdc-top-app-bar__title">
                {{ title }}
            </h1>
        </section>
        <NavigationActions :actions="actions" @select="onSelectEvent" />
    </TopAppBar>
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapState } from "vuex";

    import { cssClasses } from "@material/top-app-bar";
    import { ScrollAnimation, ClassAnimatorBehavior } from "@byloth/vue-scroll-animator";

    import { Action } from "@/core/types";

    interface NavigationBarData
    {
        _resizingAnimation?: ScrollAnimation;
        _movingAnimation?: ScrollAnimation;
    }

    export default Vue.extend({
        name: "NavigationBar",
        props: {
            toggle: {
                default: true,
                type: Boolean
            }
        },

        data: (): NavigationBarData => ({ }),

        computed: mapState({
            title: "title",
            actions: "actions"
        }),

        mounted: function(): void
        {
            this._resizingAnimation = this.$initScrollAnimation({
                startingValue: 0,
                endingValue: 128,
                classes: [{

                    classesName: [cssClasses.FIXED_SCROLLED_CLASS],
                    behavior: ClassAnimatorBehavior.FROM_END
                }],
                cssProperties: [
                    {
                        name: "height",
                        startValue: 192,
                        endValue: 56,
                        maxWidth: 599
                    },
                    {
                        name: "height",
                        startValue: 192,
                        endValue: 64,
                        minWidth: 600
                    },
                    {
                        target: this.$refs.title as HTMLElement,
                        name: "font-size",
                        startValue: 34,
                        endValue: 20
                    },
                    {
                        target: this.$refs.title as HTMLElement,
                        name: "margin-left",
                        startValue: -48,
                        endValue: 0,
                        maxWidth: 1279
                    },
                    {
                        target: this.$refs.title as HTMLElement,
                        name: "margin-left",
                        startValue: 0,
                        endValue: 0,
                        minWidth: 1280
                    }
                ]
            });
            this._movingAnimation = this.$initScrollAnimation({
                startingValue: 129,
                maxDifference: 74,
                cssProperties: [
                    {
                        name: "margin-top",
                        startValue: 0,
                        endValue: -66,
                        maxWidth: 599
                    },
                    {
                        name: "margin-top",
                        startValue: 0,
                        endValue: -74,
                        minWidth: 600
                    }
                ]
            });
        },
        destroyed: function(): void
        {
            this.$destroyScrollAnimation(this._movingAnimation!);
            this.$destroyScrollAnimation(this._resizingAnimation!);
        },

        methods: {
            onSelectEvent(action: Action): void
            {
                this.$store.dispatch(action.name);
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
