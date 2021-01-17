<template>
    <FullscreenDialog title="Scrivi il tuo messaggio"
                      done-title="Invia"
                      :value="open"
                      @cancel="onCancelEvent"
                      @done="onDoneEvent">
        <div class="container mdc-card">
            <div class="row">
                <div class="col-md-6">
                    <TextField id="contact-dialog-field-name"
                               label="Nome e cognome"
                               leading-icon="person"
                               outlined />
                </div>
                <div class="col-md-6">
                    <TextField id="contact-dialog-field-email"
                               label="Indirizzo e-mail"
                               leading-icon="alternate_email"
                               type="email"
                               outlined />
                </div>
            </div>
            <TextField id="contact-dialog-field-subject"
                       label="Oggetto"
                       outlined />
            <TextareaField id="contact-dialog-field-message"
                           label="Messaggio"
                           outlined />
        </div>
    </FullscreenDialog>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { TRANSITION_DURATION } from "@/core/constants";
    import { RootState } from "@/store/types";

    interface ContactDialogData
    {
        open: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "ContactDialog",

        data: (): ContactDialogData => ({ open: false }),
        mounted: function(): void
        {
            this.stopListening = this.$store.subscribeAction(this.onDialogAction);
        },
        destroyed: function(): void
        {
            this.stopListening!();
        },

        methods: {
            close(): Promise<void>
            {
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => any, reject: (reason?: any) => void) =>
                {
                    this.open = false;

                    setTimeout(() =>
                    {
                        this.$emit("open", false);

                        resolve();
                    }, TRANSITION_DURATION);
                });
            },

            onDialogAction(action: ActionPayload, state: RootState): void
            {
                if (action.type === "dialog")
                {
                    this.open = true;

                    this.$emit("open", true);
                }
            },

            onCancelEvent(evt: MouseEvent)
            {
                this.close();
            },
            onDoneEvent(evt: MouseEvent)
            {
                this.close();
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
