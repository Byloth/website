<script lang="ts" setup>
    import { ref } from "vue";
    import { useRoute } from "vitepress";

    import { Size } from "./core/types";

    import FloatingHeader from "./components/globals/FloatingHeader.vue";
    import HiddenFooter from "./components/globals/HiddenFooter.vue";

    const $route = useRoute();
    const $el = ref<HTMLElement | null>(null);

    const onHeaderResize = (newSize: Size) =>
    {
        const _self = $el.value!;

        _self.style.marginTop = `calc(${newSize.height}px + 1em)`;
    };
    const onFooterResize = (newSize: Size) =>
    {
        const _self = $el.value!;

        _self.style.marginBottom = `${newSize.height}px`;
    };
</script>

<template>
    <div id="layout" ref="$el">
        <FloatingHeader @resize="onHeaderResize" />
        <aside class="__debug">
            <ul>
                <li>
                    <a href="#">First post</a>
                </li>
                <li>
                    <a href="#">You won't believe me!</a>
                </li>
                <li>
                    <a href="#">Yesterday this happened...</a>
                </li>
                <li>
                    <a href="#">How to suft this site</a>
                </li>
                <li>
                    <a href="#">What I do while I sleep</a>
                </li>
            </ul>
        </aside>
        <main class="__debug">
            <nav class="__debug">
                <ul>
                    <li>
                        <a href="#">Byloth's Website</a> /
                    </li>
                    <li>
                        <a href="#">Blog</a> /
                    </li>
                    <li>
                        <strong>This page</strong>
                    </li>
                </ul>
            </nav>
            <article class="__debug">
                <Component :is="$route.component" />
            </article>
            <aside class="__debug">
                <strong>In this page:</strong>
                <ul>
                    <li>
                        <a href="#">Introduction</a>
                    </li>
                    <li>
                        <a href="#">Thesis</a>
                    </li>
                    <li>
                        <a href="#">Antithesis</a>
                    </li>
                    <li>
                        <a href="#">Development</a>
                    </li>
                    <li>
                        <a href="#">Conclusion</a>
                    </li>
                    <li>
                        <a href="#">Notes & Sources</a>
                    </li>
                    <li>
                        <a href="#">Final thanks</a>
                    </li>
                </ul>
            </aside>
        </main>
        <HiddenFooter @resize="onFooterResize" />
    </div>
</template>

<style lang="scss">
    @import "./assets/scss/main";

    #layout
    {
        background-color: var(--primary-background);
        border-radius: 1em;
        min-height: 100vh;
        padding: 1em 0px;
    }
</style>
