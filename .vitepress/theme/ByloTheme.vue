<script lang="ts" setup>
    import { ref } from "vue";
    import { useRoute } from "vitepress";

    import { Size } from "./core/types";

    import FloatingHeader from "./components/globals/FloatingHeader.vue";
    import HiddenFooter from "./components/globals/HiddenFooter.vue";
    import SideBar from "./components/globals/SideBar.vue";

    const $route = useRoute();
    const $el = ref<HTMLElement | null>(null);

    //
    // SMELLS: Tutte queste logiche dinamiche, possono essere tranquillamente
    //          sostituite con delle `media queries` ben organizzate.
    //
    const onHeaderResize = (newSize: Size) =>
    {
        const _self = $el.value!;

        _self.style.minHeight = `calc(100vh - (${newSize.height}px + 1em))`;
        _self.style.paddingTop = `calc(${newSize.height}px + 1em)`;
    };
    const onFooterResize = (newSize: Size) =>
    {
        const _self = $el.value!;

        _self.style.marginBottom = `${newSize.height}px`;
    };
</script>

<template>
    <div id="layout">
        <a href="#"
           title="Vai diretto al contenuto"
           style="display: none;">
            Salta al contenuto
        </a>
        <FloatingHeader @resize="onHeaderResize" />
        <SideBar />
        <main ref="$el" class="layout__content">
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
                <Component :is="$route.component" class="container" />
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

    .layout__content
    {
        background-color: var(--primary-background);
        padding-top: calc(100px + 1em);
        min-height: 100vh;
        padding-left: calc(var(--sidebar-size) + 1em + 2px);
    }
</style>
