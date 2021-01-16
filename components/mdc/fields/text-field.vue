<template>
    <div class="text-field">
        <label ref="mdc-text-field"
               class="mdc-text-field"
               :class="classes">
            <template v-if="outlined">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__notch">
                        <span :id="id" class="mdc-floating-label">{{ label }}</span>
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
            </template>
            <template v-else>
                <span class="mdc-text-field__ripple"></span>
                <span :id="id" class="mdc-floating-label">{{ label }}</span>
            </template>
            <TextFieldIcon v-if="leadingIcon" leading>
                {{ leadingIcon }}
            </TextFieldIcon>
            <input class="mdc-text-field__input"
                   :aria-labelledby="id"
                   :aria-controls="help ? `${id}-helper` : ''"
                   :aria-describedby="help ? `${id}-helper` : ''"
                   :disabled="disabled"
                   :value="value"
                   :type="type"
                   @input="onInputEvent" />
            <TextFieldIcon v-if="trailingIcon" trailing>
                {{ trailingIcon }}
            </TextFieldIcon>
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

    interface TextFieldData { _textField?: MDCTextField; }

    export default Vue.extend({
        name: "TextField",
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
            id: {
                required: true,
                type: String
            },
            label: {
                required: true,
                type: String
            },
            help: {
                default: "",
                type: String
            },
            leadingIcon: {
                default: "",
                type: String
            },
            trailingIcon: {
                default: "",
                type: String
            },
            type: {
                default: "text",
                type: String
            }
        },

        data: (): TextFieldData => ({ }),

        computed: {
            classes(): Record<string, boolean>
            {
                return {
                    "mdc-text-field--disabled": this.disabled,
                    "mdc-text-field--filled": !this.outlined,
                    "mdc-text-field--outlined": this.outlined,
                    "mdc-text-field--with-leading-icon": !!this.leadingIcon,
                    "mdc-text-field--with-trailing-icon": !!this.trailingIcon
                };
            }
        },

        mounted: function(): void
        {
            this._textField = new MDCTextField(this.$refs["mdc-text-field"] as Element);
        },

        methods: {
            onInputEvent(evt: InputEvent)
            {
                this.$emit("input", (evt.target as HTMLInputElement)!.value);
            }
        }
    });
</script>

<style lang="scss" scoped>
    .text-field
    {
        display: inline-block;
        width: 100%;

        & > .mdc-text-field
        {
            width: 100%;

            &.mdc-text-field--outlined
            {
                margin-top: 0.25em;
            }
        }
    }
</style>
