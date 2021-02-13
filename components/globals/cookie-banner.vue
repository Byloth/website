<template>
    <BannerDialog v-model="isOpen"
                  class="cookie-banner"
                  icon="cookie-bite"
                  :actions="[{ id: 'close', text: 'Ho capito' }]"
                  @close="onCloseEvent">
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
            ...mapState({ cookieAck: "cookieAck" })
        },
        watch: {
            cookieAck(value: boolean, oldValue: boolean): void
            {
                this.isOpen = !value;
            }
        },

        mounted: function(): void
        {
            if (!this.cookieAck)
            {
                setTimeout(() => { this.isOpen = true; }, 1500);
            }
        },

        methods: {
            async onCloseEvent(close: () => Promise<void>, evt: MouseEvent): Promise<void>
            {
                await close();

                this.$store.commit("acknowledgeCookie");
            }
        }
    });
</script>

<style lang="scss" scoped>
</style>
