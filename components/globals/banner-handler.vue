<template>
    <div class="banner-handler">
        <BannerDialog v-if="banner"
                      v-model="isOpen"
                      :icon="banner.message.icon"
                      @dismiss="onDismiss">
            <h4 v-if="banner.message.title" class="title">
                {{ banner.message.title }}
            </h4>
            <div>
                <span v-for="line, index in banner.message.text.split('\n')" :key="index">
                    {{ line }}<br />
                </span>
            </div>
            <template #actions>
                <NuxtLink v-slot="{ href, navigate }"
                          custom
                          :to="{ name: 'privacy' }">
                    <ButtonAnchor :href="href"
                                  title="Privacy & Cookie"
                                  @click="navigate">
                        Privacy &amp; Cookie
                    </ButtonAnchor>
                </NuxtLink>
                <ButtonItem raised>
                    Ok, accetto!
                </ButtonItem>
            </template>
        </BannerDialog>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { Banner, RootState } from "@/core/types";

    import BannerDialog from "@/components/dialogs/banner-dialog.vue";
    import ButtonAnchor from "@/components/mdc/buttons/button-anchor.vue";
    import ButtonItem from "@/components/mdc/buttons/button-item.vue";

    interface BannerHandlerData
    {
        banners: Banner[];
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
            banner(): Banner | null
            {
                if (this.banners.length)
                {
                    return this.banners[0];
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
                    const banner: Banner = action.payload;

                    if (banner.type === "banner")
                    {
                        this.banners.push(banner);
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
                if (this.banner!.timeout)
                {
                    setTimeout(() => { this.isOpen = false; }, this.banner!.timeout);
                }
            },
            onDismiss(type: string): void
            {
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
        .title
        {
            margin: 0px;
            margin-bottom: 0.5em;
        }
    }
</style>
