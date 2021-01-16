<template>
    <label class="mdc-text-field mdc-text-field--textarea mdc-text-field--no-label"
           :class="classes">
        <template v-if="outlined">
            <span class="mdc-notched-outline">
                <span class="mdc-notched-outline__leading"></span>
                <span class="mdc-notched-outline__trailing"></span>
            </span>
        </template>
        <template v-else>
            <span class="mdc-text-field__ripple"></span>
        </template>
        <span class="mdc-text-field__resizer">
            <textarea class="mdc-text-field__input"
                      :rows="rows"
                      :cols="cols"
                      :aria-label="label"></textarea>
        </span>
        <span v-if="!outlined" class="mdc-line-ripple"></span>
    </label>
</template>

<script lang="ts">
    import Vue from "vue";

    import { MDCTextField } from "@material/textfield";

    interface TextareaFieldData { _textareaField?: MDCTextField; }

    export default Vue.extend({
        name: "TextareaField",
        props: {
            row: {
                default: 8,
                type: Number
            },
            cols: {
                default: 40,
                type: Number
            },
            label: {
                default: "",
                type: String
            },
            outlined: {
                default: false,
                type: Boolean
            }
        },

        data: (): TextareaFieldData => ({ }),

        computed: {
            classes(): Record<string, boolean>
            {
                return {
                    "mdc-text-field--filled": !this.outlined,
                    "mdc-text-field--outlined": this.outlined
                };
            }
        },

        mounted: function(): void
        {
            this._textareaField = new MDCTextField(this.$el);
        }
    });
</script>

<style lang="scss" scoped>
</style>
