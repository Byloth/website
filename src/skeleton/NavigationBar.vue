<template>
    <header class="mdc-top-app-bar mdc-top-app-bar--prominent">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <action-item class="mdc-top-app-bar__navigation-icon"
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
    import { cssClasses } from "@material/top-app-bar";
    import { Component, Vue } from "vue-property-decorator";

    import ScrollAnimation from "@byloth/vue-scroll-animator/animations";
    import { ClassAnimatorBehavior } from "@byloth/vue-scroll-animator/animators/classes";

    import config from "@/config";

    import ActionItem from "@/components/ActionItem.vue";

    @Component({
        name: "NavigationBar",
        components: { "action-item": ActionItem }
    })
    export default class NavigationBar extends Vue
    {
        protected _resizingAnimation!: ScrollAnimation;
        protected _movingAnimation!: ScrollAnimation;

        public title: string;

        public constructor()
        {
            super();

            this.title = config.title;
        }

        public mounted(): void
        {
            this._resizingAnimation = this.$scrollAnimate({
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

            this._movingAnimation = this.$scrollAnimate({
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
        }
    }
</script>

<style lang="scss" scoped="scoped">
    /*
     *  Extra small             x < 600px -> Modal
     *  Small          600px <= x < 960px -> Dismissable
     *  Medium         960px <= x < 1264px* -> Dismissable
     *  Large        1264px* <= x < 1904px* -> Permanent
     *  Extra large             x <= 1904px* -> Permanent
     *
     *      * -16px on Desktop
     *
     */

    .mdc-top-app-bar
    {
        transition: box-shadow 200ms linear;

        &.mdc-top-app-bar--prominent > .mdc-top-app-bar__row
        {
            height: 192px;

            & .mdc-top-app-bar__title
            {
                font-size: 34px;
                padding-bottom: 0.4em;
            }
        }
    }
</style>
