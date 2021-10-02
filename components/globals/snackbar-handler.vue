<template>
    <div class="snackbar-handler">
        <SnackbarDialog v-if="snackbar"
                        v-model="isOpen"
                        :dismissable="!snackbar.timeout"
                        @show="onShow"
                        @dismiss="onDismiss">
            <span v-for="line, index in snackbarMessageLines" :key="index">
                {{ line }}<br />
            </span>
            <template v-if="snackbar.actions" #actions>
                <ButtonItem class="mdc-snackbar__action" @click="handleCallback(snackbar.actions[0].callback)">
                    {{ snackbar.actions[0].text }}
                </ButtonItem>
            </template>
        </SnackbarDialog>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Snackbar, RootState } from "@/core/types";

    import ButtonItem from "@/components/mdc/buttons/button-item.vue";
    import SnackbarDialog from "@/components/dialogs/snackbar-dialog.vue";

    interface SnackbarHandlerData
    {
        snackbars: Snackbar[];
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "SnackbarHandler",
        components: { ButtonItem, SnackbarDialog },

        data: (): SnackbarHandlerData => ({
            snackbars: [],
            isOpen: false
        }),

        computed: {
            snackbar(): Snackbar | null
            {
                if (this.snackbars.length)
                {
                    return this.snackbars[0];
                }

                return null;
            },
            snackbarMessageLines(): string[]
            {
                if (this.snackbar)
                {
                    return this.snackbar.message.text.split("\n");
                }

                return [];
            },
            snackbarAction(): 
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
                    const snackbar: Snackbar = action.payload;

                    if (snackbar.type === "snackbar")
                    {
                        this.snackbars.push(snackbar);
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
