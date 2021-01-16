<template>
    <FullscreenDialog v-model="open"
                      done-title="Invia"
                      title="Scrivi il tuo messaggio">
        <div class="container mdc-card">
            <div class="row">
                <div class="col-6">
                    <TextField id="contact-dialog-field-name"
                               label="Nome e cognome"
                               leading-icon="person"
                               outlined />
                </div>
                <div class="col-6">
                    <TextField id="contact-dialog-field-email"
                               label="Indirizzo e-mail"
                               leading-icon="alternate_email"
                               type="email"
                               outlined />
                </div>
            </div>
            <TextField id="contact-dialog-field-email"
                       label="Oggetto del messaggio"
                       outlined />
            <TextareaField label="Messaggio" outlined />
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
