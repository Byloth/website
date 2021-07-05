<template>
    <FullscreenDialog v-model="isOpen"
                      class="contact-dialog"
                      title="Scrivi il tuo messaggio"
                      done-text="Invia"
                      @cancel="onCancelEvent"
                      @done="onDoneEvent">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <TextField id="contact-dialog-field-name"
                               v-model="name"
                               label="Nome e cognome"
                               leading-icon="person"
                               outlined />
                </div>
                <div class="col-md-6">
                    <TextField id="contact-dialog-field-email"
                               v-model="email"
                               label="Indirizzo e-mail"
                               leading-icon="alternate_email"
                               type="email"
                               validation="Inserisci un indirizzo e-mail valido"
                               outlined />
                </div>
            </div>
            <TextField id="contact-dialog-field-subject"
                       v-model="subject"
                       label="Oggetto"
                       outlined />
            <TextareaField id="contact-dialog-field-message"
                           v-model="message"
                           label="Messaggio"
                           outlined />
        </div>
    </FullscreenDialog>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { RootState } from "@/core/types";

    import FullscreenDialog from "@/components/dialogs/fullscreen-dialog.vue";
    import TextField from "@/components/mdc/fields/text-field.vue";
    import TextareaField from "@/components/mdc/fields/textarea-field.vue";

    interface ContactDialogData
    {
        isOpen: boolean;

        name: string;
        email: string;
        subject: string;
        message: string;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "ContactDialog",
        components: { FullscreenDialog, TextField, TextareaField },

        data: (): ContactDialogData => ({
            isOpen: false,

            name: "",
            email: "",
            subject: "",
            message: ""
        }),

        watch: {
            isOpen(value: boolean, oldValue: boolean): void
            {
                this.$emit("open", value);
            }
        },

        mounted: function(): void
        {
            this.stopListening = this.$store.subscribeAction(this.onContactAction);
        },
        destroyed: function(): void
        {
            this.stopListening!();
        },

        methods: {
            onContactAction(action: ActionPayload, state: RootState): void
            {
                if (action.type === "contact")
                {
                    this.isOpen = true;
                }
            },

            async onCancelEvent(close: () => Promise<void>, evt: MouseEvent): Promise<void>
            {
                await close();

                this.name = "";
                this.email = "";
                this.subject = "";
                this.message = "";
            },
            async onDoneEvent(close: () => Promise<void>, evt: MouseEvent): Promise<void>
            {
                if ((this.name) && (this.email) && (this.subject) && (this.message))
                {
                    try
                    {
                        await this.$axios.post("/api/send-message.php", {
                            name: this.name,
                            email: this.email,
                            subject: this.subject,
                            message: this.message
                        });

                        alert(`Grazie per il tuo messaggio, ${this.name}.\n` +
                            `Ti risponderò il prima possibile!`);

                        await close();

                        this.name = "";
                        this.email = "";
                        this.subject = "";
                        this.message = "";
                    }
                    catch (err)
                    {
                        // eslint-disable-next-line no-console
                        console.error(err);

                        alert("Sono spiacente ma si è verificato un errore sconosciuto.\n" +
                            "Riprova oppure contattami in qualche altro modo.");
                    }
                }
                else
                {
                    alert("Tutti i campi sono obbligatori.\n" +
                        "Compilali correttamente prima di proseguire.");
                }
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
