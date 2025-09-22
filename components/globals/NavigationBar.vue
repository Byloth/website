<script lang="ts" setup>
</script>

<template>
    <nav class="navigation-bar">
        <div class="container row">
            <div class="col">
                <ULink :to="{ name: 'index' }" class="link bold">
                    Byloth's Website
                </ULink>
            </div>
            <div class="col right">
                <ULink :to="{ name: 'about' }" class="link">
                    About
                </ULink>
                <a class="link"
                   href="https://github.com/Byloth/website"
                   target="_blank"
                   title="Byloth's Website on GitHub">
                    GitHub
                    <span class="fa-solid fa-square-arrow-up-right"></span>
                </a>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .navigation-bar
    {
        background-color: rgba(#FFF, 0.5);
        box-shadow: 0px 0px 1em rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(10px);
        position: fixed;
        top: 0px;
        width: 100%;
        z-index: 1;

        .col.right
        {
            text-align: right;
        }

        .link
        {
            display: inline-block;
            padding: 0.75em 1.5em;

            &.bold
            {
                font-weight: bold;
            }
        }

        & > .container.row
        {
            align-items: center;
            height: var(--navigation-bar-height);
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
