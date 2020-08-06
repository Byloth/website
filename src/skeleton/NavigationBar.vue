<template>
    <header id="nav-bar" class="mdc-top-app-bar mdc-top-app-bar--prominent">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <action-item v-if="toggle"
                             class="mdc-top-app-bar__navigation-icon"
                             description="Toggle navigation drawer"
                             @click="$emit('drawer-toggle', $event)">
                    menu
                </action-item>
                <span ref="title" class="mdc-top-app-bar__title">{{ title }}</span>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                <action-item class="mdc-top-app-bar__action-item"
                             description="Download">
                    file_download
                </action-item>
                <action-item class="mdc-top-app-bar__action-item"
                             description="Print this page">
                    print
                </action-item>
                <action-item class="mdc-top-app-bar__action-item"
                             description="Bookmark this page">
                    bookmark
                </action-item>
            </section>
        </div>
    </header>
</template>

<script lang="ts">
    import Vue from "vue";

    import { cssClasses } from "@material/top-app-bar";

    import ScrollAnimation from "@byloth/vue-scroll-animator/animations";
    import { ClassAnimatorBehavior } from "@byloth/vue-scroll-animator/animators/classes";

    import config from "@/config";

    import ActionItem from "@/components/ActionItem.vue";

    export interface NavigationBarData
    {
        _resizingAnimation?: ScrollAnimation;
        _movingAnimation?: ScrollAnimation;

        title: string;
    }

    export default Vue.extend({
        name: "NavigationBar",
        components: { "action-item": ActionItem },

        props: {
            toggle: {
                default: true,
                type: Boolean
            }
        },
        data: (): NavigationBarData => ({ title: config.title }),

        mounted(): void
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
        destroyed(): void
        {
            this.$destroyScrollAnimation(this._resizingAnimation!);
            this.$destroyScrollAnimation(this._movingAnimation!);
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/styles/variables";

    #nav-bar
    {
        backdrop-filter: blur(20px) saturate(180%);
        background-color: rgba(variables.$primary-color, 0.75);
        transition: box-shadow 200ms linear;
        width: 100%;

        &.mdc-top-app-bar--prominent > .mdc-top-app-bar__row
        {
            height: 100%;

            .mdc-top-app-bar__title
            {
                font-size: 34px;
                padding-bottom: 0.4em;
            }
        }
    }
</style>
