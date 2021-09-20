<template>
    <div v-if="isShown"
         class="mdc-dialog"
         :class="classes">
        <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface"
                 role="alertdialog"
                 aria-modal="true">
                <h2 v-if="title" class="mdc-dialog__title">
                    {{ title }}
                </h2>
                <div class="mdc-dialog__content">
                    <slot></slot>
                </div>
                <div class="mdc-dialog__actions">
                    <Button class="mdc-dialog__button" @click="close">
                        {{ cancelText }}
                    </Button>
                    <slot name="actions"></slot>
                </div>
            </div>
        </div>
        <div class="mdc-dialog__scrim"></div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import TransientMixin from "@/mixins/transient";

    import Button from "@/components/mdc/button.vue";

    interface AlertDialogData
    {
        isOpen: boolean;
    }

    export default Vue.extend({
        name: "AlertDialog",
        components: { Button },
        mixins: [TransientMixin({
            openClass: "mdc-dialog--open",
            enterTransitionDuration: 150,
            exitTransitionDuration: 75
        })],
        props: {
            title: {
                default: "",
                type: String
            },

            cancelText: {
                default: "Annulla",
                type: String
            },
            scrollable: {
                default: false,
                type: Boolean
            }
        },

        data: (): AlertDialogData => ({ isOpen: false }),

        computed: {
            classes(): Record<string, boolean>
            {
                return {
                    "mdc-dialog--open": this.isOpen, // SMELLS: Capire se questa cosa qui è davvero la scelta opportuna!
                    "mdc-dialog--scrollable": this.scrollable
                };
            }
        }
    });
</script>

<style lang="scss" scoped>
    .mdc-dialog
    {
        display: flex;
        z-index: 8;

        & > .mdc-dialog__container
        {
            transition: opacity 37.5ms linear,
                        transform 75ms cubic-bezier(0, 0, 0.2, 1); // CLOSING!

            & > .mdc-dialog__surface
            {
                padding-top: 1.25em;

                & > .mdc-dialog__title
                {
                    &::before
                    {
                        content: none;
                    }
                }

                & > .mdc-dialog__content
                {
                    padding-top: 0px;
                }
            }
        }
        & > .mdc-dialog__scrim
        {
            transition: opacity 75ms linear; // CLOSING!
        }

        &.mdc-dialog--open
        {
            & > .mdc-dialog__container
            {
                transition: opacity 75ms linear,
                            transform 150ms cubic-bezier(0, 0, 0.2, 1); // OPENING!
            }
            & > .mdc-dialog__scrim
            {
                transition: opacity 150ms linear; // OPENING!
            }
        }
    }
</style>
