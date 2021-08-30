<template>
    <div class="alerts-handler">
        <SnackbarDialog v-if="snackbarAlert"
                        v-model="isSnackbarOpen"
                        :dismissable="!snackbarAlert.timeout"
                        @show="onShow('snackbar')"
                        @dismiss="onDismiss('snackbar')">
            <span>
                {{ snackbarAlert.message.text }}
            </span>
            <template #actions>
                <Button v-if="snackbarAlert.buttons.length > 0"
                        class="mdc-snackbar__action"
                        secondary
                        @click="handleAction(snackbarAlert.buttons[0].action)">
                    {{ snackbarAlert.buttons[0].text }}
                </Button>
            </template>
        </SnackbarDialog>
        <AlertDialog v-if="dialogAlert"
                     v-model="isDialogOpen"
                     :title="dialogAlert.message.title"
                     @show="onShow('dialog')"
                     @dismiss="onDismiss('dialog')">
            <span>
                {{ dialogAlert.message.text }}
            </span>
            <template #actions>
                <Button v-if="dialogAlert.buttons.length > 0"
                        class="mdc-dialog__button"
                        @click="handleAction(dialogAlert.buttons[0].action)">
                    {{ dialogAlert.buttons[0].text }}
                </Button>
            </template>
        </AlertDialog>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Alert, RootState } from "@/core/types";

    import AlertDialog from "@/components/dialogs/alert-dialog.vue";
    import Button from "@/components/mdc/button.vue";
    import SnackbarDialog from "@/components/dialogs/snackbar-dialog.vue";

    interface AlertsHandlerData
    {
        dialogAlerts: Alert[];
        bannerAlerts: Alert[];
        snackbarAlerts: Alert[];

        isDialogOpen: boolean;
        isBannerOpen: boolean;
        isSnackbarOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "AlertsHandler",
        components: { AlertDialog, Button, SnackbarDialog },

        data: (): AlertsHandlerData => ({
            dialogAlerts: [],
            bannerAlerts: [],
            snackbarAlerts: [],

            isDialogOpen: false,
            isBannerOpen: false,
            isSnackbarOpen: false
        }),

        computed: {
            dialogAlert(): Alert | null
            {
                if (this.dialogAlerts.length)
                {
                    return this.dialogAlerts[0];
                }
                else
                {
                    return null;
                }
            },
            snackbarAlert(): Alert | null
            {
                if (this.snackbarAlerts.length)
                {
                    return this.snackbarAlerts[0];
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
            openNextAlert(): void
            {
                if (this.dialogAlerts.length)
                {
                    this.isDialogOpen = true;
                }
                else if (this.bannerAlerts.length)
                {
                    this.isBannerOpen = true;
                }
                else if (this.snackbarAlerts.length)
                {
                    this.isSnackbarOpen = true;
                }
            },

            onAlertAction(action: ActionPayload, state: RootState): void
            {
                if (action.type === "alert")
                {
                    const alert: Alert = action.payload;

                    if (alert.type === "dialog")
                    {
                        this.dialogAlerts.push(alert);
                    }
                    else if (alert.type === "banner")
                    {
                        throw new Error(`The "{${alert.type}}" alert type isn't supported yet. ` +
                            `Please, come back later.`);
                    }
                    else if (alert.type === "snackbar")
                    {
                        this.snackbarAlerts.push(alert);
                    }
                    else
                    {
                        throw new Error(`The "{${alert.type}}" alert type isn't supported.`);
                    }

                    this.openNextAlert();
                }
            },
            handleAction(action: () => void): void
            {
                action();

                this.isOpen = false;
            },

            onShow(type: string): void
            {
                if (type === "dialog")
                {
                    if (this.dialogAlert!.timeout)
                    {
                        setTimeout(() => { this.isOpen = false; }, this.dialogAlert!.timeout);
                    }
                }
                else if (type === "banner")
                {
                    throw new Error(`The "{${type}}" alert type isn't supported yet. Please, come back later.`);
                }
                else if (type === "snackbar")
                {
                    if (this.snackbarAlert!.timeout)
                    {
                        setTimeout(() => { this.isOpen = false; }, this.snackbarAlert!.timeout);
                    }
                }
                else
                {
                    throw new Error(`The "{${type}}" alert type isn't supported.`);
                }
            },
            onDismiss(type: string): void
            {
                if (type === "dialog")
                {
                    this.dialogAlerts.shift();

                    if (this.dialogAlerts.length)
                    {
                        this.$nextTick(() => this.openNextAlert());
                    }
                }
                else if (type === "banner")
                {
                    throw new Error(`The "{${type}}" alert type isn't supported yet. Please, come back later.`);
                }
                else if (type === "snackbar")
                {
                    this.snackbarAlerts.shift();

                    if (this.snackbarAlerts.length)
                    {
                        this.$nextTick(() => this.openNextAlert());
                    }
                }
                else
                {
                    throw new Error(`The "{${type}}" alert type isn't supported.`);
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
