<template>
    <div class="alert-handler">
        <AlertDialog v-if="alert"
                     v-model="isOpen"
                     :title="alert.message.title"
                     dismissable
                     @show="onShow"
                     @dismiss="onDismiss">
            <span v-for="line, index in alert.message.text.split('\n')" :key="index">
                {{ line }}<br />
            </span>
            <template #actions>
                <ButtonItem v-if="alert.actions.length > 0"
                            class="mdc-dialog__button"
                            @click="handleCallback(alert.actions[0].callback)">
                    {{ alert.actions[0].text }}
                </ButtonItem>
            </template>
        </AlertDialog>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Alert, RootState } from "@/core/types";

    import AlertDialog from "@/components/dialogs/alert-dialog.vue";
    import ButtonItem from "@/components/mdc/buttons/button-item.vue";

    interface AlertHandlerData
    {
        alerts: Alert[];
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "AlertHandler",
        components: { AlertDialog, ButtonItem },

        data: (): AlertHandlerData => ({
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
                    const alert: Alert = action.payload;

                    if (alert.type === "alert")
                    {
                        this.alerts.push(alert);
                        this.isOpen = true;
                    }
                }
            },
            handleCallback(callback: () => void): void
            {
                callback();

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
