<template>
    <FullscreenDialog v-model="isOpen"
                      title="Scrivi il tuo messaggio"
                      done-title="Invia"
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

    import { RootState } from "@/store/types";

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
                if (action.type === "dialog")
                {
                    this.isOpen = true;

                    this.$emit("open", true);
                }
            },

            async onCancelEvent(close: () => Promise<void>, evt: MouseEvent)
            {
                await close();

                this.$emit("open", false);
            },
            async onDoneEvent(close: () => Promise<void>, evt: MouseEvent)
            {
                await close();

                this.$emit("open", false);
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

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
</style>
