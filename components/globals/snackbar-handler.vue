<template>
    <div class="snackbar-handler">
        <SnackbarDialog v-if="snackbar"
                        v-model="isOpen"
                        :dismissable="!snackbar.timeout"
                        @show="onShow"
                        @dismiss="onDismiss">
            <span>
                {{ snackbar.message.text }}
            </span>
            <template #actions>
                <Button v-if="snackbar.buttons.length > 0"
                        class="mdc-snackbar__action"
                        secondary
                        @click="handleAction(snackbar.buttons[0].action)">
                    {{ snackbar.buttons[0].text }}
                </Button>
            </template>
        </SnackbarDialog>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Dialog, RootState } from "@/core/types";

    import Button from "@/components/mdc/button.vue";
    import SnackbarDialog from "@/components/dialogs/snackbar-dialog.vue";

    interface SnackbarHandlerData
    {
        snackbars: Dialog[];
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "SnackbarHandler",
        components: { Button, SnackbarDialog },

        data: (): SnackbarHandlerData => ({
            snackbars: [],
            isOpen: false
        }),

        computed: {
            snackbar(): Dialog | null
            {
                if (this.snackbars.length)
                {
                    return this.snackbars[0];
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
                    const snackbar: Dialog = action.payload;

                    if (snackbar.type === "snackbar")
                    {
                        this.snackbars.push(snackbar);
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
                if (this.snackbar!.timeout)
                {
                    setTimeout(() => { this.isOpen = false; }, this.snackbar!.timeout);
                }
            },
            onDismiss(type: string): void
            {
                this.snackbars.shift();

                if (this.snackbars.length)
                {
                    this.$nextTick(() => { this.isOpen = true; });
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
