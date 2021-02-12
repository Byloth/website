<template>
    <div v-if="value"
         class="banner-dialog"
         :class="classes">
        <div class="content">
            <Avatar :icon="icon" />
            <div class="details">
                <slot></slot>
            </div>
        </div>
        <div class="actions">
            <Button v-for="action in actions"
                    :key="action.id"
                    @click="$emit(action.id, close, $event)">
                {{ action.text }}
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import { TRANSITION_DURATION } from "@/core/constants";

    interface BannerDialogData { isClosing: boolean; }

    export default Vue.extend({
        name: "BannerDialog",
        props: {
            value: {
                default: false,
                type: Boolean
            },
            icon: {
                default: "exclamation",
                type: String
            },
            actions: {
                default: () => [],

                type: Array
            }
        },

        data: (): BannerDialogData => ({ isClosing: false }),

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

    @keyframes slide-up
    {
        0%
        {
            opacity: 1;
            transform: translateY(0%);
        }
        100%
        {
            opacity: 0;
            transform: translateY(-100%);
        }
    }
    @keyframes slide-down
    {
        0%
        {
            opacity: 0;
            transform: translateY(-100%);
        }
        100%
        {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    .banner-dialog
    {
        animation: slide-down variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
        background-color: #FFFFFF;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        color: #000000;
        padding: 1em;

        & > .content
        {
            align-items: center;
            color: #000000;
            border-top-left-radius: var(--mdc-shape-medium, 4px);
            border-top-right-radius: var(--mdc-shape-medium, 4px);
            display: flex;
            flex-direction: row;
            padding-bottom: 1em;

            & > .avatar
            {
                padding-right: 1em;
            }
            & > .details
            {
                flex: 1;
            }
        }
        & > .actions
        {
            text-align: right;

            & > .mdc-button
            {
                margin-left: 0.5em;
            }
        }

        &.closing
        {
            animation: slide-up variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
            opacity: 0;
            transform: translateY(-100px);
            transition-delay: 1.5s;
        }
    }
</style>
