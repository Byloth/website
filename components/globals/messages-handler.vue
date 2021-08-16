<template>
    <div class="messages-handler">
        <SnackbarDialog v-if="alert"
                        v-model="isOpen"
                        :dismissable="!alert.timeout"
                        @show="onSnackbarShow"
                        @dismiss="onSnackbarDismiss">
            <span>
                {{ alert.message.text }}
            </span>
            <template #actions>
                <Button v-if="alert.buttons.length > 0"
                        class="mdc-snackbar__action"
                        secondary
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
        alerts: Alert[];
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "MessagesHandler",
        components: { Button, SnackbarDialog },

        data: (): MessagesHandlerData => ({
            alerts: [],
            isOpen: false
        }),

        computed: {
            alert(): Alert | null
            {
                if (this.alerts.length)
                {
                    return this.alerts[0];
                }
                else
                {
                    return null;
                }
            }
        },

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
                        this.alerts.push(alert);
                        this.isOpen = true;
                    }
                }
            },
            handleAction(action: () => void): void
            {
                action();

                this.isOpen = false;
            },

            onSnackbarShow(): void
            {
                if (this.alert!.timeout)
                {
                    setTimeout(() => { this.isOpen = false; }, this.alert!.timeout);
                }
            },
            onSnackbarDismiss(): void
            {
                this.alerts.shift();

                if (this.alerts.length)
                {
                    this.$nextTick(() => { this.isOpen = true; });
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
