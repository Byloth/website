<template>
    <div class="mdc-snackbar mdc-snackbar--open">
        <div class="mdc-snackbar__surface"
             role="status"
             aria-relevant="additions">
            <div class="mdc-snackbar__label" aria-atomic="false">
                Can't send photo. Retry in 5 seconds.
            </div>
            <div class="mdc-snackbar__actions" aria-atomic="true">
                <button type="button" class="mdc-button mdc-snackbar__action">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Retry</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "SnackbarDialog"
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-snackbar
    {
        // bottom: 0px;
        // justify-content: flex-end;
        left: initial;
        // margin: 0px;
        // margin-top: calc(1em - 48px);
        // padding: 0.5em;
        // position: sticky;

        & > .mdc-snackbar__surface
        {
            backdrop-filter: blur(20px) saturate(180%);
            // background-color: rgba(0, 0, 0, 0.75);
            background-color: rgba(variables.$success-color, 0.75);
        }

        // @media (min-width: variables.$sm-size)
        // {
        //     bottom: 0.5em;
        // }
    }
</style>
