<template>
    <div class="cookie-banner">
        <div class="content">
            <Avatar icon="cookie-bite" />
            <div class="details">
                <span>
                    Questo sito utilizza i cookie per offrire un'esperienza di utilizzo ottimale.<br />
                    Per avere ulteriori informazioni a riguardo, puoi visitare
                    la pagina <a href="#">Privacy &amp; Cookie</a>.
                </span>
            </div>
        </div>
        <div class="actions">
            <Button @click="close">
                Ho capito
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "CookieBanner",
        methods: {
            close(): void
            {
                // TODO!
            }
        }
    });
</script>

<style lang="scss" scoped>
    .cookie-banner
    {
        background-color: #FFFFFF;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        padding: 1em;
        position: relative;

        & > .content
        {
            align-items: center;
            color: #000000;
            border-top-left-radius: var(--mdc-shape-medium, 4px);
            border-top-right-radius: var(--mdc-shape-medium, 4px);
            display: flex;
            flex-direction: row;
            padding-bottom: 1em;

            & > .avatar
            {
                padding-right: 1em;
            }
            & > .details
            {
                flex: 1;
            }
        }
        & > .actions
        {
            text-align: right;
        }
    }
</style>
