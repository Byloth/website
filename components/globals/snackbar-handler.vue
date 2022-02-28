<template>
    <SnackbarDialog v-if="snackbar"
                    v-model="isOpen"
                    class="snackbar-handler"
                    :dismissable="snackbar.dismissable"
                    :icon="snackbar.message.icon"
                    :title="snackbar.message.title"
                    @show="onShow"
                    @dismiss="onDismiss">
        <pre>{{ snackbar.message.text }}</pre>
        <template v-if="action" #actions>
            <NuxtLink v-if="action.location"
                      v-slot="{ href, navigate }"
                      custom
                      :to="action.location">
                <ButtonItem class="mdc-snackbar__action"
                            :href="href"
                            :title="action.text"
                            @click="navigate">
                    {{ action.text }}
                </ButtonItem>
            </NuxtLink>
            <ButtonItem v-else-if="action.callback"
                        class="mdc-snackbar__action"
                        :title="action.text"
                        @click="handleCallback(action.callback)">
                {{ action.text }}
            </ButtonItem>
        </template>
    </SnackbarDialog>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Action, Dialog, RootState } from "@/core/types";

    import ButtonItem from "@/components/mdc/button-item.vue";
    import SnackbarDialog from "@/components/dialogs/snackbar-dialog.vue";

    interface SnackbarHandlerData
    {
        // eslint-disable-next-line no-undef
        _timeout?: NodeJS.Timeout;

        snackbars: Dialog[];
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
            snackbar(): Dialog | null
            {
                if (this.snackbars.length)
                {
                    return this.snackbars[0];
                }

                return null;
            },
            action(): Action | null
            {
                if ((this.snackbar?.actions?.length))
                {
                    if (this.snackbar.actions.length > 1)
                    {
                        throw new Error("Multiple actions aren't supported for" +
                            " 'snackbar' type dialog. Use a single button.");
                    }

                    return this.snackbar.actions[0];
                }

                return null;
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
            handleCallback(callback: () => void): void
            {
                callback();

                this.isOpen = false;
            },

            onShow(type: string): void
            {
                if (this.snackbar?.timeout)
                {
                    this._timeout = setTimeout(() =>
                    {
                        this._timeout = undefined;
                        this.isOpen = false;
                    }, this.snackbar.timeout);
                }
            },
            onDismiss(type: string): void
            {
                if (this._timeout)
                {
                    clearTimeout(this._timeout);
                    this._timeout = undefined;
                }

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
    .snackbar-handler
    {
        pre
        {
            margin: 0px;
            white-space: pre-wrap;
        }
    }
</style>
