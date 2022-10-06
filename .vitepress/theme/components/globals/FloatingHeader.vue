<script lang="ts" setup>
    import { useData } from "vitepress";

    import ResizableElement from "../core/ResizableElement.vue";

    const $data = useData();
    const $site = $data.site;
</script>

<template>
    <ResizableElement is="footer" id="header">
        <a href="#">Skip to content</a>
        <div class="header__content pure-g">
            <h1 class="header__title pure-u-1-3">
                <a href="#">{{ $site.title }}</a>
            </h1>
            <nav class="pure-u-2-3">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </nav>
        </div>
    </ResizableElement>
</template>

<style lang="scss" scoped>
    #header
    {
        background-color: var(--primary-background);
        border: 1px solid #000;
        border-radius: 1em;
        left: 0px;
        margin: 0.5em 1em;
        padding: 0.5em 1em;
        position: fixed;
        right: 0px;
        top: 0px;
    }
</style>
