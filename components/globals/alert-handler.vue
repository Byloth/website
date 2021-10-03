<template>
    <AlertDialog v-if="alert"
                 v-model="isOpen"
                 class="alert-handler"
                 :close-text="actions ? 'Annulla' : 'Chiudi'"
                 :dismissable="alert.dismissable"
                 :icon="alert.message.icon"
                 :title="alert.message.title"
                 @show="onShow"
                 @dismiss="onDismiss">
        <pre>{{ alert.message.text }}</pre>
        <template v-if="actions" #actions>
            <template v-for="action, index in actions">
                <NuxtLink v-if="action.location"
                          v-slot="{ href, navigate }"
                          :key="index"
                          custom
                          :to="action.location">
                    <ButtonAnchor class="mdc-dialog__button"
                                  :href="href"
                                  :title="action.text"
                                  @click="navigate">
                        {{ action.text }}
                    </ButtonAnchor>
                </NuxtLink>
                <ButtonItem v-else-if="action.callback"
                            :key="index"
                            class="mdc-dialog__button"
                            @click="handleCallback(action.callback)">
                    {{ action.text }}
                </ButtonItem>
            </template>
        </template>
    </AlertDialog>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Action, Dialog, RootState } from "@/core/types";

    import AlertDialog from "@/components/dialogs/alert-dialog.vue";
    import ButtonAnchor from "@/components/mdc/buttons/button-anchor.vue";
    import ButtonItem from "@/components/mdc/buttons/button-item.vue";

    interface AlertHandlerData
    {
        // eslint-disable-next-line no-undef
        _timeout?: NodeJS.Timeout;

        alerts: Dialog[];
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "AlertHandler",
        components: { AlertDialog, ButtonAnchor, ButtonItem },

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
            },
            actions(): Action[] | null
            {
                if ((this.alert?.actions?.length))
                {
                    return this.alert.actions;
                }

                return null;
            }
        },
        watch: {
            isOpen(value: boolean, oldValue: boolean): void
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
                    const alert: Dialog = action.payload;

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
                if (this.alert?.timeout)
                {
                    this._timeout = setTimeout(() =>
                    {
                        this._timeout = undefined;
                        this.isOpen = false;
                    }, this.alert.timeout);
                }
            },
            onDismiss(type: string): void
            {
                if (this._timeout)
                {
                    clearTimeout(this._timeout);
                    this._timeout = undefined;
                }

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
    .alert-handler
    {
        pre
        {
            margin: 0px;
        }
    }
</style>
