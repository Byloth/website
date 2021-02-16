<template>
    <span class="material-icons mdc-text-field__icon"
          :class="classes"
          tabindex="0"
          role="button">
        <slot></slot>
    </span>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCTextFieldIcon } from "@material/textfield";

    interface TextFieldIconData { _textFieldIcon?: MDCTextFieldIcon; }

    export default Vue.extend({
        name: "TextFieldIcon",
        props: {
            leading: {
                default: false,
                type: Boolean
            },
            trailing: {
                default: false,
                type: Boolean
            }
        },

        data: (): TextFieldIconData => ({ }),

        computed: {
            classes(): Record<string, boolean>
            {
                return {
                    "mdc-text-field__icon--leading": this.leading,
                    "mdc-text-field__icon--trailing": this.trailing
                };
            }
        },

        mounted: function(): void
        {
            this._textFieldIcon = new MDCTextFieldIcon(this.$el);
        }
    });
</script>

<style lang="scss" scoped>
</style>
