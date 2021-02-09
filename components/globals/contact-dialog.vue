<template>
    <FullscreenDialog id="contact-dialog"
                      title="Scrivi il tuo messaggio"
                      done-title="Invia"
                      :value="isOpen"
                      @input="onInputEvent"
                      @cancel="onCancelEvent"
                      @done="onDoneEvent">
        <div class="container">
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

    import { RootState } from "@/core/types";

    interface ContactDialogData
    {
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "ContactDialog",

        data: (): ContactDialogData => ({ isOpen: false }),
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
                if (action.type === "contact")
                {
                    this.isOpen = true;
                }
            },
            onInputEvent(isOpen: boolean): void
            {
                this.isOpen = isOpen;

                this.$emit("open", isOpen);
            },

            onCancelEvent(close: () => Promise<void>, evt: MouseEvent): Promise<void>
            {
                return close();
            },
            onDoneEvent(close: () => Promise<void>, evt: MouseEvent): Promise<void>
            {
                return close();
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    #contact-dialog
    {
        @media (min-width: variables.$md-size)
        {
            .container > .row
            {
                & > .col-md-6
                {
                    padding: 0px 0.5em;

                    &:first-child
                    {
                        padding-left: 0px;
                    }
                    &:last-child
                    {
                        padding-right: 0px;
                    }
                }
            }
        }
    }
</style>
