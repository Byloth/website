<template>
    <div class="navigation-bar">
        <TopAppBar ref="top-app-bar" class="mdc-top-app-bar--prominent">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <ActionButton v-if="toggler"
                              class="mdc-top-app-bar__navigation-icon"
                              title="Apri / Chiudi la barra di navigazione"
                              @click="$emit('drawer-toggle', $event)">
                    <span class="material-icons">
                        menu
                    </span>
                </ActionButton>
                <h1 ref="title" class="mdc-top-app-bar__title">
                    {{ title }}
                </h1>
            </section>
            <NavigationActions :actions="actions" @select="onSelectEvent" />
        </TopAppBar>
        <CookieBanner />
    </div>
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
            toggler: {
                default: true,
                type: Boolean
            }
        },

        data: (): NavigationBarData => ({ }),

        computed: mapState("config", {
            title: "title",
            actions: "actions"
        }),

        mounted: function(): void
        {
            const topAppBar: HTMLElement = (this.$refs["top-app-bar"] as Vue).$el as HTMLElement;
            const title: HTMLElement = this.$refs.title as HTMLElement;

            this._resizingAnimation = this.$initScrollAnimation({
                startingValue: 0,
                endingValue: 128,
                classes: [{

                    target: topAppBar,
                    classesName: [cssClasses.FIXED_SCROLLED_CLASS],
                    behavior: ClassAnimatorBehavior.FROM_END
                }],
                cssProperties: [
                    {
                        target: topAppBar,
                        name: "height",
                        startValue: 192,
                        endValue: 56,
                        maxWidth: 599
                    },
                    {
                        target: topAppBar,
                        name: "height",
                        startValue: 192,
                        endValue: 64,
                        minWidth: 600
                    },
                    {
                        target: title,
                        name: "font-size",
                        startValue: 34,
                        endValue: 20
                    },
                    {
                        target: title,
                        name: "margin-left",
                        startValue: -48,
                        endValue: 0,
                        maxWidth: 1279
                    },
                    {
                        target: title,
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
    @use "~@/assets/scss/variables";

    .navigation-bar
    {
        position: fixed;
        width: 100%;
        z-index: 2;

        & > .mdc-top-app-bar
        {
            backdrop-filter: blur(20px) saturate(180%);
            background-color: rgba(variables.$primary-color, 0.75);
            position: relative;
        }

        & > .cookie-banner
        {
            backdrop-filter: blur(20px) saturate(180%);
            background-color: rgba(#FFFFFF, 0.75);
            padding-top: calc(1em + 10px);
            position: relative;
        }
    }
</style>
