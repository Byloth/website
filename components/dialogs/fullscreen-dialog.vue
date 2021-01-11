<template>
    <transition name="slide-up">
        <div v-if="value" class="fullscreen-dialog">
            <TopAppBar>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <ActionButton class="mdc-top-app-bar__action-item"
                                  :title="cancelTitle"
                                  @click="onCancelClick">
                        <span class="material-icons">
                            close
                        </span>
                    </ActionButton>
                    <h1 ref="title" class="mdc-top-app-bar__title">
                        {{ title }}
                    </h1>
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                    <Button unelevated @click="onDoneClick">
                        {{ doneTitle }}
                    </Button>
                </section>
            </TopAppBar>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "FullscreenDialog",
        props: {
            cancelTitle: {
                default: "Annulla",
                type: String
            },
            doneTitle: {
                default: "Conferma",
                type: String
            },
            title: {
                required: true,
                type: String
            },
            value: {
                default: false,
                type: Boolean
            }
        },
        methods: {
            onCancelClick(evt?: MouseEvent): void
            {
                this.$emit("cancel", evt);
                this.$emit("input", false);
            },
            onDoneClick(evt?: MouseEvent): void
            {
                this.$emit("done", evt);
                this.$emit("input", false);
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    @keyframes slide-up
    {
        0% { transform: translateY(100%); }
        100% { transform: translateY(0px); }
    }

    .fullscreen-dialog
    {
        bottom: 0px;
        display: flex;
        flex-direction: column;
        left: 0px;
        position: fixed;
        right: 0px;
        top: 0px;
        z-index: 6;

        & > .mdc-top-app-bar
        {
            background-color: variables.$primary-color;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 10px 0px rgba(0, 0, 0, 0.12);

            position: static;

            .mdc-top-app-bar__section > .mdc-button
            {
                height: calc(100% + 8px);

                &::v-deep > .mdc-button__ripple
                {
                    border-radius: 0px;
                }

                @media (min-width: 600px)
                {
                    height: calc(100% + 16px);
                }
            }
        }
        & > .content
        {
            background-color: variables.$chrome-scrollbar-color;
            backdrop-filter: blur(20px) saturate(180%);
            flex: 1;
            padding: 0.5em;
        }

        &.slide-up-enter-active
        {
            animation: slide-up variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
        }
        &.slide-up-leave-active
        {
            animation: slide-up variables.$mdc-transition-duration variables.$mdc-transition-timing-function reverse;
        }

        @media print
        {
            display: none;
        }
    }
</style>
