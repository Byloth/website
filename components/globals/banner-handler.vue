<template>
    <BannerDialog v-if="banner"
                  v-model="isOpen"
                  class="banner-handler"
                  :dismissable="banner.dismissable"
                  :icon="banner.message.icon"
                  :title="banner.message.title"
                  @show="onShow"
                  @dismiss="onDismiss">
        <pre>{{ banner.message.text }}</pre>
        <template v-if="actions" #actions>
            <template v-for="action, index in actions">
                <NuxtLink v-if="action.location"
                          v-slot="{ href, navigate }"
                          :key="index"
                          custom
                          :to="action.location">
                    <ButtonAnchor :href="href"
                                  :title="action.text"
                                  @click="navigate">
                        {{ action.text }}
                    </ButtonAnchor>
                </NuxtLink>
                <ButtonItem v-else-if="action.callback"
                            :key="index"
                            @click="handleCallback(action.callback)">
                    {{ action.text }}
                </ButtonItem>
            </template>
        </template>
    </BannerDialog>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Action, Dialog, RootState } from "@/core/types";

    import BannerDialog from "@/components/dialogs/banner-dialog.vue";
    import ButtonAnchor from "@/components/mdc/buttons/button-anchor.vue";
    import ButtonItem from "@/components/mdc/buttons/button-item.vue";

    interface BannerHandlerData
    {
        // eslint-disable-next-line no-undef
        _timeout?: NodeJS.Timeout;

        banners: Dialog[];
        isOpen: boolean;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "BannerHandler",
        components: { BannerDialog, ButtonAnchor, ButtonItem },

        data: (): BannerHandlerData => ({
            banners: [],
            isOpen: false
        }),

        computed: {
            banner(): Dialog | null
            {
                if (this.banners.length)
                {
                    return this.banners[0];
                }
                else
                {
                    return null;
                }
            },
            actions(): Action[] | null
            {
                if ((this.banner?.actions?.length))
                {
                    return this.banner.actions;
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
                    const banner: Dialog = action.payload;

                    if (banner.type === "banner")
                    {
                        this.banners.push(banner);
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
                if (this.banner?.timeout)
                {
                    this._timeout = setTimeout(() =>
                    {
                        this._timeout = undefined;
                        this.isOpen = false;
                    }, this.banner.timeout);
                }
            },
            onDismiss(type: string): void
            {
                if (this._timeout)
                {
                    clearTimeout(this._timeout);
                    this._timeout = undefined;
                }

                this.banners.shift();
                if (this.banners.length)
                {
                    this.$nextTick(() => { this.isOpen = true; });
                }
            }
        }
    });
</script>

<style lang="scss" scoped>
    .banner-handler
    {
        pre
        {
            margin: 0px;
        }
    }
</style>
