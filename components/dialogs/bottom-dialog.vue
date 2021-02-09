<template>
    <div v-if="value"
         class="bottom-dialog fullscreen"
         :class="classes">
        <div class="fullscreen overlay" @click="close"></div>
        <div class="dialog">
            <div class="handler"></div>
            <div class="content">
                <h4 v-if="title" class="title">
                    {{ title }}
                </h4>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import { TRANSITION_DURATION } from "@/core/constants";

    interface BottomDialogData { isClosing: boolean; }

    export default Vue.extend({
        name: "BottomDialog",
        props: {
            value: {
                default: false,
                type: Boolean
            },
            title: {
                default: "",
                type: String
            }
        },

        data: (): BottomDialogData => ({ isClosing: false }),

        computed: {
            classes(): Record<string, boolean>
            {
                return { "closing": this.isClosing };
            }
        },
        methods: {
            close(): Promise<void>
            {
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => any, reject: (reason?: any) => void) =>
                {
                    this.isClosing = true;

                    setTimeout(() =>
                    {
                        this.$emit("input", false);

                        this.isClosing = false;

                        resolve();
                    }, TRANSITION_DURATION);
                });
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

    .bottom-dialog
    {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 6;

        & > .overlay
        {
            animation: fade-in variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
        }
        & > .dialog
        {
            align-items: center;
            animation: slide-up variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
            background-color: #FFFFFF;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0px 9px 46px 8px rgba(0, 0, 0, 0.12);

            display: flex;
            height: max-content;
            flex-direction: column;
            max-width: 100%;
            padding-top: 1em;
            position: relative;
            width: max-content;

            & > .handler
            {
                background-color: #CDCDCD;
                border-radius: 0.125em;
                height: 0.25em;
                position: absolute;
                width: 1.5em;
            }
            & > .content
            {
                text-align: center;

                & > .title
                {
                    margin: 1em;
                }
            }
        }

        &.closing
        {
            & > .overlay
            {
                animation: fade-out variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
                backdrop-filter: blur(0px);
                opacity: 0;
            }
            & > .dialog
            {
                animation: slide-down variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
                transform: translateY(100%);
            }
        }
    }
</style>
