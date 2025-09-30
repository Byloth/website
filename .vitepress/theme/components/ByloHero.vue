<script lang="ts" setup>
    import { useData } from "vitepress";

    const { frontmatter } = useData();
</script>

<template>
    <!-- eslint-disable vue/no-v-html -->
    <h1 class="bylo-hero heading">
        <span class="text" v-html="frontmatter.hero.text"></span>
        <span class="name">
            <span class="clip" v-html="frontmatter.hero.name"></span>
            <span>{{ frontmatter.hero.emoji }}</span>
        </span>
    </h1>
    <p class="tagline" v-html="frontmatter.hero.tagline"></p>
</template>

<style lang="scss" scoped>
    .heading
    {
        display: flex;
        flex-direction: column;
    }

    .text,
    .name
    {
        width: fit-content;
        max-width: 392px;
        letter-spacing: -0.4px;
        line-height: 40px;
        font-size: 32px;
        font-weight: 700;
        white-space: pre-wrap;
    }

    .name
    {
        font-weight: 900;
    }

    .clip
    {
        background: var(--vp-home-hero-name-background);
        color: var(--vp-home-hero-name-color);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: var(--vp-home-hero-name-color);
    }

    .tagline
    {
        padding-top: 8px;
        max-width: 392px;
        line-height: 28px;
        font-size: 18px;
        font-weight: 500;
        white-space: pre-wrap;
        color: var(--vp-c-text-2);
    }

    .VPHero.has-image
    {

        .text,
        .name,
        .tagline
        {
            margin: 0 auto;
        }
    }

    @media (min-width: 640px)
    {
        .text,
        .name
        {
            max-width: 576px;
            line-height: 56px;
            font-size: 48px;
        }

        .tagline
        {
            padding-top: 12px;
            max-width: 576px;
            line-height: 32px;
            font-size: 20px;
        }
    }

    @media (min-width: 960px)
    {
        .text,
        .name
        {
            line-height: 64px;
            font-size: 56px;
        }

        .tagline
        {
            line-height: 36px;
            font-size: 24px;
        }

        .VPHero.has-image
        {
            .text,
            .name,
            .tagline
            {
                margin: 0;
            }
        }
    }
</style>
