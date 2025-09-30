<script lang="ts" setup>
    defineProps({
        text: {
            required: true,
            type: String
        },
        href: {
            required: true,
            type: String
        },
        icon: {
            required: true,
            type: String
        }
    });
</script>

<template>
    <a class="bylo-link"
       :href="href"
       target="_blank"
       rel="noreferrer">
        <div class="icon-round">
            <span :class="`vpi-social-${icon}`"
                  :style="{ '--icon': `url('https://api.iconify.design/simple-icons/${icon}.svg')` }"></span>
        </div>
        <div class="link-text">
            {{ text }}
        </div>
    </a>
</template>

<style lang="scss" scoped>
    .bylo-link
    {
        align-items: center;
        background-color: #d8eaff;
        border: 1px solid #a6c2e2;
        border-radius: 3rem;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        margin: 0.5rem;
        padding: 0.5rem;
        text-decoration: none;
        transition: background-color 0.125s, box-shadow 0.125s, transform 0.125s;

        &:hover,
        &:focus,
        &:active
        {
            background-color: #bedeff;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.125);
            transform: scale(1.025);
        }

        .dark &
        {
            background-color: #1a2530;
            border-color: #244568;

            &:hover,
            &:focus,
            &:active
            {
                background-color: #1f2d3d;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.125);
            }
        }

        .icon-round
        {
            aspect-ratio: 1 / 1;
            border: 1px solid var(--vp-c-brand-2);
            border-radius: 50%;
            width: 3.5rem;
            height: 3.5rem;
            background-image: linear-gradient(-45deg, var(--vp-c-brand-1) 25%, var(--vp-c-brand-3) 75%);
            margin-right: 0.5rem;

            display: inline-flex;
            justify-content: center;
            align-items: center;
            transition: color 0.5s;

            & > [class^="vpi-social-"]
            {
                color: #FFFFFF;
                height: 2rem;
                width: 2rem;
            }

            .dark &
            {
                background-image: linear-gradient(-45deg, var(--vp-c-brand-3) 25%, var(--vp-c-brand-1) 75%);
            }
        }

        .link-text
        {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--vp-c-text-1);
        }
    }
</style>
