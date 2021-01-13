<template>
    <FullscreenDialog v-model="open"
                      done-title="Invia"
                      title="Scrivi il tuo messaggio">
        <div class="container mdc-card">
            <label class="mdc-text-field mdc-text-field--outlined">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__notch">
                        <span id="my-label-id" class="mdc-floating-label">Your Name</span>
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
                <input type="text"
                       class="mdc-text-field__input"
                       aria-labelledby="my-label-id" />
            </label>
            <label class="mdc-text-field mdc-text-field--outlined">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__notch">
                        <span id="my-label-id" class="mdc-floating-label">Your Name</span>
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
                <input type="text"
                       class="mdc-text-field__input"
                       aria-labelledby="my-label-id" />
            </label>
            <label class="mdc-text-field mdc-text-field--outlined">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__notch">
                        <span id="my-label-id" class="mdc-floating-label">Your Name</span>
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
                <input type="text"
                       class="mdc-text-field__input"
                       aria-labelledby="my-label-id" />
            </label>
            <label class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--no-label">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
                <span class="mdc-text-field__resizer">
                    <textarea class="mdc-text-field__input"
                              rows="8"
                              cols="40"
                              aria-label="Label"></textarea>
                </span>
            </label>
        </div>
    </FullscreenDialog>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { RootState } from "@/store/types";

    interface ContactDialogData
    {
        open: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "ContactDialog",

        data: (): ContactDialogData => ({ open: false }),

        watch: {
            open(value: boolean, oldValue: boolean): void
            {
                this.$emit("open", value);
            }
        },

        mounted: function(): void
        {
            this.stopListening = this.$store.subscribeAction(this.onDialogAction);
        },
        destroyed: function(): void
        {
            this.stopListening!();
        },

        methods: {
            onDialogAction(action: ActionPayload, state: RootState): void
            {
                if (action.type === "dialog")
                {
                    this.open = true;
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
    .fullscreen-dialog
    {
        .container.mdc-card
        {
            padding: 2em;
        }
    }
</style>
