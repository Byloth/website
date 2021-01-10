<template>
    <FullscreenDialog v-model="open"
                      confirm-title="Invia"
                      title="Scrivi il tuo messaggio">
        <div class="container">
            Questo è un messaggio di prova.
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
</style>
