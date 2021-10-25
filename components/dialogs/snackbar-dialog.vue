<template>
    <div v-if="isShown"
         class="mdc-snackbar"
         :class="classes">
        <div class="mdc-snackbar__surface"
             role="status"
             aria-relevant="additions">
            <div class="header">
                <span v-if="icon"
                      class="fas icon"
                      :class="`fa-${icon}`">
                </span>
                <h4 v-if="title">
                    {{ title }}
                </h4>
            </div>
            <div class="content">
                <div class="mdc-snackbar__label" aria-atomic="false">
                    <slot></slot>
                </div>
                <div class="mdc-snackbar__actions" aria-atomic="true">
                    <slot name="actions"></slot>
                    <ActionItem v-if="dismissable"
                                class="mdc-snackbar__dismiss material-icons"
                                title="Dismiss"
                                @click="close">
                        close
                    </ActionItem>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import TransientMixin from "@/mixins/transient";

    import ActionItem from "@/components/mdc/action-item.vue";

    export default Vue.extend({
        name: "SnackbarDialog",
        components: { ActionItem },
        mixins: [TransientMixin({
            openClass: "mdc-snackbar--open",
            enterTransitionDuration: 150,
            exitTransitionDuration: 150
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
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-snackbar
    {
        display: flex;
        left: initial;

        & > .mdc-snackbar__surface
        {
            backdrop-filter: blur(20px) saturate(180%);
            background-color: rgba(variables.$primary-color, 0.75);
            color: #FFFFFF;
            flex-direction: column;
            transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
                        transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);

            & > .header
            {
                align-items: center;
                display: flex;
                flex-direction: row;
                width: 100%;

                & > h4
                {
                    flex: 1;
                    margin: 0px;
                    padding: 1em 1em 0px;
                }
                & > .icon
                {
                    font-size: 1.25em;
                    padding-left: 1em;
                    padding-top: 0.75em;
                }
            }
            & > .content
            {
                display: flex;
                flex-direction: row;
                width: 100%;

                & > .mdc-snackbar__label
                {
                    flex: 1;

                    // TODO: Dopo aver eseguito l'aggiornamento di MDC alla versione 11,
                    //        testare ed eventualmente rimuovere questa regola.
                    //
                    position: relative;
                }
                & > .mdc-snackbar__actions
                {
                    & > .mdc-snackbar__dismiss
                    {
                        color: rgba(255, 255, 255, 0.87);

                        &::before,
                        &::after
                        {
                            background-color: rgba(255, 255, 255, 0.87);
                        }
                    }

                    &::v-deep > .mdc-button
                    {
                        --mdc-theme-primary: #{variables.$secondary-color};

                        &.mdc-button--secondary
                        {
                            --mdc-theme-primary: #FFFFFF;
                        }
                    }
                }
            }
        }

        @media (min-width: variables.$sm-size)
        {
            margin: 1em;
        }
    }
</style>
