<template>
    <header class="mdc-top-app-bar mdc-top-app-bar--prominent">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <action-item class="mdc-top-app-bar__navigation-icon" icon="menu" />
                <span ref="title" class="mdc-top-app-bar__title">{{ title }}</span>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                <action-item class="mdc-top-app-bar__action-item" icon="file_download" description="Download" />
                <action-item class="mdc-top-app-bar__action-item" icon="print" description="Print this page" />
                <action-item class="mdc-top-app-bar__action-item" icon="bookmark" description="Bookmark this page" />
            </section>
        </div>
    </header>
</template>

<script lang="ts">
    import { Component, Emit, Vue } from "vue-property-decorator";
    import { cssClasses } from "@material/top-app-bar";

    import ScrollAnimation from "@byloth/vue-scroll-animator/animations";
    import { ClassAnimatorBehavior } from "@byloth/vue-scroll-animator/animators/classes";

    import config from "@/config";

    import ActionItem from "@/components/ActionItem.vue";

    @Component({ name: "NavigationBar", components: { "action-item": ActionItem } })
    export default class NavigationBar extends Vue
    {
        protected _scrollAnimation!: ScrollAnimation;

        public title: string;

        public constructor()
        {
            super();

            this.title = config.title;
        }

        @Emit("drawer-toggle")
        protected _toggleDrawer(evt: Event): void
        {
            // Emits the "drawer-toggle" event to the parent component.
        }

        public mounted(): void
        {
            this._scrollAnimation = this.$scrollAnimate({

                startValue: 0,
                endValue: 128,
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
        }
    }
</script>

<style lang="scss" scoped="scoped">
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
