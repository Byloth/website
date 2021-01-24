<template>
    <div v-if="value"
         class="fullscreen-dialog overlay"
         :class="classes">
        <div class="dialog">
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
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import { TRANSITION_DURATION } from "@/core/constants";

    interface FullscreenDialogData { closing: boolean; }

    export default Vue.extend({
        name: "FullscreenDialog",
        props: {
            value: {
                default: false,
                type: Boolean
            },
            title: {
                required: true,
                type: String
            },
            cancelTitle: {
                default: "Annulla",
                type: String
            },
            doneTitle: {
                default: "Conferma",
                type: String
            }
        },

        data: (): FullscreenDialogData => ({ closing: false }),

        computed: {
            classes(): Record<string, boolean>
            {
                return { "closing": this.closing };
            }
        },
        methods: {
            close(): Promise<void>
            {
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => any, reject: (reason?: any) => void) =>
                {
                    this.closing = true;

                    setTimeout(() =>
                    {
                        this.$emit("input", false);

                        this.closing = false;

                        resolve();
                    }, TRANSITION_DURATION);
                });
            },

            onCancelClick(evt: MouseEvent): void
            {
                this.$emit("cancel", this.close, evt);
            },
            onDoneClick(evt: MouseEvent): void
            {
                this.$emit("done", this.close, evt);
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    @keyframes fade-in
    {
        0%
        {
            backdrop-filter: blur(0px);
            opacity: 0;
        }
        100%
        {
            backdrop-filter: blur(2.5px);
            opacity: 1;
        }
    }
    @keyframes fade-out
    {
        0%
        {
            backdrop-filter: blur(2.5px);
            opacity: 1;
        }
        100%
        {
            backdrop-filter: blur(0px);
            opacity: 0;
        }
    }

    @keyframes slide-up
    {
        0% { transform: translateY(100%); }
        100% { transform: translateY(0%); }
    }
    @keyframes slide-down
    {
        0% { transform: translateY(0%); }
        100% { transform: translateY(100%); }
    }

    .fullscreen-dialog
    {
        backdrop-filter: none;
        background: none;
        display: flex;
        flex-direction: column;
        z-index: 6;

        & > .dialog
        {
            animation: slide-up variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
            display: flex;
            flex: 1;
            flex-direction: column;

            & > .mdc-top-app-bar
            {
                backdrop-filter: none;
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
                background-color: #FFFFFF;
                flex: 1;
                overflow-y: auto;
                padding: 1em;
                padding-bottom: 0px;
            }
        }

        &.closing
        {
            & > .dialog
            {
                animation: slide-down variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
            }
        }

        @media (min-width: variables.$md-size)
        {
            @keyframes slide-up
            {
                0% { transform: translateY(25%); }
                100% { transform: translateY(0%); }
            }
            @keyframes slide-down
            {
                0% { transform: translateY(0%); }
                100% { transform: translateY(25%); }
            }

            align-items: center;
            animation: fade-in variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
            backdrop-filter: blur(2.5px);
            background-color: rgba(0, 0, 0, 0.35);
            justify-content: center;

            & > .dialog
            {
                border-radius: 4px;
                box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                            0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                            0px 9px 46px 8px rgba(0, 0, 0, 0.12);

                flex: unset;
                height: max-content;
                overflow: hidden;
                width: max-content;
            }

            &.closing
            {
                animation: fade-out variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
            }
        }
        @media print
        {
            display: none;
        }
    }
</style>
