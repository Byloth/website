<template>
    <div v-if="isShown"
         class="mdc-snackbar"
         :class="classes">
        <div class="mdc-snackbar__surface"
             role="status"
             aria-relevant="additions">
            <div class="mdc-snackbar__label" aria-atomic="false">
                <slot></slot>
            </div>
            <div class="mdc-snackbar__actions" aria-atomic="true">
                <slot name="actions"></slot>
                <ActionButton v-if="dismissable"
                              class="mdc-snackbar__dismiss material-icons"
                              title="Dismiss"
                              @click="close">
                    close
                </ActionButton>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import TransientMixin from "@/mixins/transient";

    import ActionButton from "@/components/mdc/actions/action-button.vue";

    export default Vue.extend({
        name: "SnackbarDialog",
        components: { ActionButton },
        mixins: [TransientMixin({
            openClass: "mdc-snackbar--open",
            enterTransitionDuration: 150,
            exitTransitionDuration: 150
        })],
        props: {
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
            transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),
                        transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);

            & > .mdc-snackbar__label
            {
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

        @media (min-width: variables.$sm-size)
        {
            margin: 1em;
        }
    }
</style>
