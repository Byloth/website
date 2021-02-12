<template>
    <BannerDialog v-model="isOpen"
                  class="cookie-banner"
                  icon="cookie-bite"
                  :actions="[{ id: 'close', text: 'Ho capito' }]"
                  @close="close">
        <span>
            Questo sito utilizza i cookie per offrire un'esperienza di utilizzo ottimale.<br />
            Per avere ulteriori informazioni a riguardo, puoi visitare
            la pagina <a href="#">Privacy &amp; Cookie</a>.
        </span>
    </BannerDialog>
</template>

<script lang="ts">
    import Vue from "vue";
    import { mapState } from "vuex";

    interface CookieBannerData { isOpen: boolean; }

    export default Vue.extend({
        name: "CookieBanner",

        data: (): CookieBannerData => ({ isOpen: false }),

        computed: {
            classes(): Record<string, boolean>
            {
                return { "open": this.isOpen };
            },

            ...mapState({ cookie: "cookie" })
        },

        mounted: function(): void
        {
            this.isOpen = this.cookie;
        },

        methods: {
            close(close: () => Promise<void>, evt: MouseEvent): void
            {
                this.$store.state.cookie = true;
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
