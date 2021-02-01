<template>
    <div class="textarea-field">
        <label ref="mdc-textarea-field"
               class="mdc-text-field mdc-text-field--textarea"
               :class="classes">
            <template v-if="outlined">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span v-if="label" class="mdc-notched-outline__notch">
                        <span :id="`${id}-label`" class="mdc-floating-label">
                            {{ label }}
                        </span>
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
            </template>
            <template v-else>
                <span class="mdc-text-field__ripple"></span>
                <span v-if="label"
                      :id="`${id}-label`"
                      class="mdc-floating-label">
                    {{ label }}
                </span>
            </template>
            <span class="mdc-text-field__resizer">
                <textarea :id="id"
                          ref="textarea"
                          class="mdc-text-field__input"
                          :aria-labelledby="label ? `${id}-label` : ''"
                          :aria-controls="help ? `${id}-helper` : ''"
                          :aria-describedby="help ? `${id}-helper` : ''"
                          :rows="rows"
                          :disabled="disabled"
                          :readonly="readonly"
                          :value="value"
                          @input="onInputEvent"></textarea>
            </span>
            <span v-if="!outlined" class="mdc-line-ripple"></span>
        </label>
        <div v-if="help" class="mdc-text-field-helper-line">
            <div :id="`${id}-helper`"
                 class="mdc-text-field-helper-text"
                 aria-hidden="true">
                {{ help }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCTextField } from "@material/textfield";

    interface TextareaFieldData { _textareaField?: MDCTextField; }

    export default Vue.extend({
        name: "TextareaField",
        props: {
            value: {
                default: "",
                type: String
            },
            disabled: {
                default: false,
                type: Boolean
            },
            outlined: {
                default: false,
                type: Boolean
            },
            readonly: {
                default: false,
                type: Boolean
            },
            id: {
                required: true,
                type: String
            },
            rows: {
                default: 8,
                type: Number
            },
            label: {
                default: "",
                type: String
            },
            help: {
                default: "",
                type: String
            }
        },

        data: (): TextareaFieldData => ({ }),

        computed: {
            classes(): Record<string, boolean>
            {
                return {
                    "mdc-text-field--disabled": this.disabled,
                    "mdc-text-field--filled": !this.outlined,
                    "mdc-text-field--no-label": !this.label,
                    "mdc-text-field--outlined": this.outlined
                };
            }
        },

        mounted: function(): void
        {
            this._textareaField = new MDCTextField(this.$refs["mdc-textarea-field"] as Element);
        },

        methods: {
            onInputEvent(evt: InputEvent)
            {
                this.$emit("input", (evt.target as HTMLTextAreaElement)!.value);
            }
        }
    });
</script>

<style lang="scss" scoped>
    .textarea-field
    {
        display: inline-block;
        margin-bottom: 1em;
        width: 100%;

        & > .mdc-text-field.mdc-text-field--textarea
        {
            width: 100%;

            &.mdc-text-field--outlined
            {
                margin-top: 0.25em;
            }
        }
    }
</style>
