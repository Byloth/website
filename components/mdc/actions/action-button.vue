<template>
    <button class="mdc-icon-button"
            :class="classes"
            :alt="title"
            :title="title"
            :aria-label="title"
            @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCRipple } from "@material/ripple";

    interface ActionButtonData { _ripple?: MDCRipple; }

    export default Vue.extend({
        name: "ActionButton",
        props: {
            title: {
                required: true,
                type: String
            },
            dark: {
                default: false,
                type: Boolean
            }
        },

        data: (): ActionButtonData => ({ }),

        computed: {
            classes(): Record<string, boolean>
            {
                return { "mdc-icon-button--dark": this.dark };
            }
        },

        mounted: function(): void
        {
            this._ripple = new MDCRipple(this.$el);
            this._ripple.unbounded = true;
        }
    });
</script>

<style lang="scss" scoped>
    .mdc-icon-button
    {
        &.mdc-icon-button--dark
        {
            color: rgba(255, 255, 255, 0.87);

            &::before,
            &::after
            {
                background-color: rgba(255, 255, 255, 0.87);
            }
        }

        /*
         * Il codice che segue, risolve un problema di visualizzazione dovuto al mix
         *  dell'uso del MDCRipple insieme alle CSS Transitions (in particolare allo scaling).
         *
         * Se lo scaling influisce in qualche maniera alle dimensioni effettive del pulsante
         *  (e di conseguenza del ripple) la libreria MDC imposta delle dimensioni errate al
         *  ripple stesso.
         */
        &.mdc-ripple-upgraded.mdc-ripple-upgraded--unbounded
        {
            position: relative;

            &:not(.mdc-ripple-upgraded--foreground-activation),
            &:not(.mdc-ripple-upgraded--background-focused)
            {
                &::before,
                &::after
                {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 0px;
                    right: 0px;
                    transform: none;
                }
            }
        }
    }
</style>
