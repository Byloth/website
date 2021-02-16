<template>
    <div class="mdc-text-field-helper-text"
         :class="classes"
         aria-hidden="true">
        <slot></slot>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCTextFieldHelperText } from "@material/textfield";

    interface TextFieldHelperTextData { _textFieldHelperText?: MDCTextFieldHelperText; }

    export default Vue.extend({
        name: "TextFieldHelperText",
        props: {
            persistent: {
                default: false,
                type: Boolean
            },
            validation: {
                default: false,
                type: Boolean
            }
        },

        data: (): TextFieldHelperTextData => ({ }),

        computed: {
            classes(): Record<string, boolean>
            {
                return {
                    "mdc-text-field-helper-text--persistent": this.persistent,
                    "mdc-text-field-helper-text--validation-msg": this.validation
                };
            }
        },

        mounted: function(): void
        {
            this._textFieldHelperText = new MDCTextFieldHelperText(this.$el);
        }
    });
</script>

<style lang="scss" scoped>
</style>
