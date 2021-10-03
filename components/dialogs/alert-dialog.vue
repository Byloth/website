<template>
    <div v-if="isShown"
         class="mdc-dialog"
         :class="classes">
        <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface"
                 role="alertdialog"
                 aria-modal="true">
                <div class="header">
                    <span v-if="icon"
                          class="fas icon"
                          :class="`fa-${icon}`">
                    </span>
                    <h2 v-if="title" class="mdc-dialog__title">
                        {{ title }}
                    </h2>
                </div>
                <div class="mdc-dialog__content">
                    <slot></slot>
                </div>
                <div class="mdc-dialog__actions">
                    <ButtonItem v-if="dismissable"
                                class="mdc-dialog__button"
                                @click="close">
                        {{ closeText }}
                    </ButtonItem>
                    <slot name="actions"></slot>
                </div>
            </div>
        </div>
        <div class="mdc-dialog__scrim overlay"></div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import TransientMixin from "@/mixins/transient";

    import ButtonItem from "@/components/mdc/buttons/button-item.vue";

    interface AlertDialogData
    {
        isOpen: boolean;
    }

    export default Vue.extend({
        name: "AlertDialog",
        components: { ButtonItem },
        mixins: [TransientMixin({
            openClass: "mdc-dialog--open",
            enterTransitionDuration: 150,
            exitTransitionDuration: 75
        })],
        props: {
            icon: {
                default: "",
                type: String
            },
            title: {
                default: "",
                type: String
            },

            dismissable: {
                default: false,
                type: Boolean
            },
            closeText: {
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
        z-index: 6;

        & > .mdc-dialog__container
        {
            transition: opacity 37.5ms linear,
                        transform 75ms cubic-bezier(0, 0, 0.2, 1); // CLOSING!

            & > .mdc-dialog__surface
            {
                padding-top: 1.25em;

                & > .header
                {
                    align-items: center;
                    display: flex;

                    & > .icon
                    {
                        font-size: 1.25em;
                        padding-bottom: 0.5em;
                        padding-left: 1.125em;
                    }
                    & > .mdc-dialog__title
                    {
                        flex: 1;

                        &::before
                        {
                            content: none;
                        }

                        &:not(:first-child)
                        {
                            padding-left: 0.75em;
                        }
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
