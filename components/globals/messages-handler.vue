<template>
    <div class="messages-handler">
        <!-- <SnackbarDialog v-model="isOpen" :dismissable="!alert.timeout"> -->
        <SnackbarDialog v-model="isOpen">
            <span v-if="alert">
                {{ alert.message.text }}
            </span>
            <template v-if="alert" #actions>
                <Button v-if="alert.buttons.length > 0"
                        class="mdc-snackbar__action"
                        @click="handleAction(alert.buttons[0].action)">
                    {{ alert.buttons[0].text }}
                </Button>
            </template>
        </SnackbarDialog>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Alert, RootState } from "@/core/types";

    import Button from "@/components/mdc/button.vue";
    import SnackbarDialog from "@/components/dialogs/snackbar-dialog.vue";

    interface MessagesHandlerData
    {
        alert: Alert | null;
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "MessagesHandler",
        components: { Button, SnackbarDialog },

        data: (): MessagesHandlerData => ({
            alert: null,
            isOpen: false
        }),
        mounted: function(): void
        {
            this.stopListening = this.$store.subscribeAction(this.onAlertAction);
        },
        destroyed: function(): void
        {
            this.stopListening!();
        },

        methods: {
            onAlertAction(action: ActionPayload, state: RootState): void
            {
                if (action.type === "alert")
                {
                    const alert: Alert = action.payload;

                    if (alert.type === "snackbar")
                    {
                        this.alert = alert;
                        this.isOpen = true;
                    }
                }
            },
            handleAction(action: () => void): void
            {
                action();

                this.isOpen = false;
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
