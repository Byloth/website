<template>
    <header class="mdc-top-app-bar mdc-top-app-bar--prominent">
        <div class="mdc-top-app-bar__row">
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <ActionItem v-if="toggle"
                            class="mdc-top-app-bar__navigation-icon"
                            title="Toggle navigation drawer"
                            @click="$emit('drawer-toggle', $event)">
                    menu
                </ActionItem>
                <h1 ref="title" class="mdc-top-app-bar__title">
                    {{ title }}
                </h1>
            </section>
            <NavigationActions :actions="actions"
                               @select="onSelectEvent" />
        </div>
    </header>
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapState } from "vuex";

    import { cssClasses } from "@material/top-app-bar";
    import { ScrollAnimation, ClassAnimatorBehavior } from "@byloth/vue-scroll-animator";

    interface Action
    {
        id: string;
        icon: string;
        title: string;

        callback: () => void;
    }
    interface NavigationBarData
    {
        _resizingAnimation?: ScrollAnimation;
        _movingAnimation?: ScrollAnimation;

        actions: Action[];
    }

    export default Vue.extend({
        name: "NavigationBar",
        props: {
            toggle: {
                default: true,
                type: Boolean
            }
        },

        data: (): NavigationBarData => ({
            actions: [
                {
                    id: "share",
                    icon: "share",
                    title: "Condividi",

                    callback: (): void =>
                    {
                        if (navigator.share)
                        {
                            navigator.share({
                                title: document.title,
                                text: "This is an example text.",
                                url: window.location.href
                            });
                        }
                    }
                },
                {
                    id: "print",
                    icon: "print",
                    title: "Stampa",

                    callback: (): void =>
                    {
                        window.print();
                    }
                },
                {
                    id: "clone",
                    icon: "file_download",
                    title: "Download",

                    callback: (): void =>
                    {
                        window.open("https://github.com/Byloth/website", "_blank");
                    }
                }
            ]
        }),

        computed: mapState("config", { title: "title" }),

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
            onSelectEvent(selectedId: string)
            {
                const action = this.actions.filter((action) => action.id === selectedId)[0];

                action.callback();
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-top-app-bar
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
                margin: 0px;
                padding-bottom: 0.4em;
            }
        }

        @media print
        {
            display: none;
        }
    }
</style>
