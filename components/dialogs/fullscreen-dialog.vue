<template>
    <div v-if="value"
         class="fullscreen-dialog"
         :class="classes">
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
</template>

<script lang="ts">
    import Vue from "vue";

    import { TRANSITION_DURATION } from "@/core/constants";

    interface FullscreenDialogData
    {
        // SMELLS: False positive!
        //
        // eslint-disable-next-line no-undef
        _timeoutId?: NodeJS.Timeout;

        closing: boolean;
    }

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
        watch: {
            value(value: boolean, oldValue: boolean)
            {
                this.closing = !value;
            }
        },

        destroyed: function(): void
        {
            if (this._timeoutId)
            {
                clearTimeout(this._timeoutId);
            }
        },

        methods: {
            emitDelayed(event: string, payload?: MouseEvent)
            {
                this.closing = true;

                this._timeoutId = setTimeout(() =>
                {
                    this.$emit(event, payload);
                    this.$emit("input", false);
                }, TRANSITION_DURATION);
            },

            onCancelClick(evt?: MouseEvent): void
            {
                this.emitDelayed("cancel", evt);
            },
            onDoneClick(evt?: MouseEvent): void
            {
                this.emitDelayed("done", evt);
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
    @keyframes slide-down
    {
        0% { transform: translateY(0px); }
        100% { transform: translateY(100%); }
    }

    .fullscreen-dialog
    {
        animation: slide-up variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
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

        &.closing
        {
            animation: slide-down variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
        }

        @media print
        {
            display: none;
        }
    }
</style>
