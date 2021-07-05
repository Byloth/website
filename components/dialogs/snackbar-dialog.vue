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
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import TransientMixin from "@/mixins/transient";

    export default Vue.extend({
        name: "SnackbarDialog",
        mixins: [TransientMixin({
            openClass: "mdc-snackbar--open",
            enterTransitionDuration: 150,
            exitTransitionDuration: 150
        })]
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

            // TODO: Capire se è una roba sensata dare i colori così...
            //
            & > .mdc-snackbar__actions > .mdc-snackbar__action
            {
                color: variables.$secondary-color;

                & > .mdc-button__ripple
                {
                    &::before,
                    &::after
                    {
                        background-color: variables.$secondary-color;
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
