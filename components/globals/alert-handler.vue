<template>
    <div class="alert-handler">
        <AlertDialog v-if="alert"
                     v-model="isOpen"
                     :title="alert.message.title"
                     @show="onShow"
                     @dismiss="onDismiss">
            <span>
                {{ alert.message.text }}
            </span>
            <template #actions>
                <Button v-if="alert.buttons.length > 0"
                        class="mdc-dialog__button"
                        @click="handleAction(alert.buttons[0].action)">
                    {{ alert.buttons[0].text }}
                </Button>
            </template>
        </AlertDialog>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Dialog, RootState } from "@/core/types";

    import AlertDialog from "@/components/dialogs/alert-dialog.vue";
    import Button from "@/components/mdc/button.vue";

    interface AlertHandlerData
    {
        alerts: Dialog[];
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "AlertHandler",
        components: { AlertDialog, Button },

        data: (): AlertHandlerData => ({
            alerts: [],
            isOpen: false
        }),

        computed: {
            alert(): Dialog | null
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
                    const alert: Dialog = action.payload;

                    if (alert.type === "alert")
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

            onShow(type: string): void
            {
                if (this.alert!.timeout)
                {
                    setTimeout(() => { this.isOpen = false; }, this.alert!.timeout);
                }
            },
            onDismiss(type: string): void
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
