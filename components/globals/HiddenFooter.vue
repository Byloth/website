<script lang="ts" setup>
    const YEAR = new Date().getFullYear();
</script>

<template>
    <UFooter class="hidden-footer">
        <template #left>
            <p class="hidden-footer__content">
                Made with
                <span class="fa-solid fa-heart" title="Lots of love!"></span>
                by
                <ULink href="https://www.byloth.dev/"
                       target="_blank"
                       class="hidden-footer__link">Byloth</ULink>.
            </p>
        </template>

        <template #right>
            <p class="hidden-footer__content">
                <small>
                    Copywrong ©️ 2014 - {{ YEAR }} "<b>Byloth's Website</b>". All the wrongs reserved.
                </small>
            </p>
        </template>
    </UFooter>
</template>

<style lang="scss" scoped>
    @use "sass:color";
    @use "@/assets/scss/variables";

    @keyframes pulse
    {
        0% { transform: scale(1); }
        30% { transform: scale(1); }
        40% { transform: scale(1.125); }
        50% { transform: scale(1); }
        60% { transform: scale(1.125); }
        100% { transform: scale(1); }
    }

    .hidden-footer
    {
        bottom: 0px;
        color: #FFF;
        height: var(--hidden-footer-height);
        left: 0px;
        position: fixed;
        right: 0px;
        text-align: center;
        z-index: -1;

        // Override UFooter styles to center content
        :deep(.ui-footer-container)
        {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: center;

            @media (min-width: 1024px)
            {
                flex-direction: row;
                justify-content: space-between;
            }
        }

        &__content
        {
            margin-bottom: 0.25em;

            &:last-child
            {
                margin-bottom: 0px;
            }

            @media (min-width: 1024px)
            {
                margin-bottom: 0;
            }
        }

        .fa-heart
        {
            animation: pulse 2s infinite;
            color: red;
            cursor: help;
        }

        &__link
        {
            $link-color: #007FFF;

            color: $link-color;
            font-weight: bold;

            &:hover
            {
                color: color.adjust($link-color, $lightness: 10%);
            }
        }
    }
</style>
