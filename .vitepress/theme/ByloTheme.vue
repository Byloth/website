<script lang="ts" setup>
    import { ref } from "vue";
    import { useRoute } from "vitepress";

    import { Size } from "./core/types";

    import FloatingHeader from "./components/globals/FloatingHeader.vue";
    import FloatingSidebar from "./components/globals/FloatingSidebar.vue";
    import HiddenFooter from "./components/globals/HiddenFooter.vue";
    import NavBreadcrumb from "./components/ui/NavBreadcrumb.vue";

    const $route = useRoute();
    const $el = ref<HTMLElement | null>(null);

    //
    // SMELLS: Tutte queste logiche dinamiche, possono essere tranquillamente
    //          sostituite con delle `media queries` ben organizzate.
    //
    const onHeaderResize = (newSize: Size) =>
    {
        const _self = $el.value!;

        _self.style.minHeight = `calc(99.5vh - (${newSize.height}px + 1rem))`;
        _self.style.paddingTop = `calc(${newSize.height}px + 1rem)`;
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
        <FloatingSidebar />
        <main ref="$el" class="layout__content">
            <div class="container" style="display: flex;">
                <article class="__debug" style="flex: 1;">
                    <NavBreadcrumb />
                    <Component :is="$route.component" />
                </article>
                <aside style="border: 1px solid #000; width: 250px;">
                    <div style="padding: 0.5rem 1rem;">
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
                    </div>
                </aside>
            </div>
        </main>
        <HiddenFooter @resize="onFooterResize" />
    </div>
</template>

<style lang="scss">
    @import "./assets/scss/main";

    .layout__content
    {
        background-color: var(--primary-background);
        border-bottom-left-radius: calc(1em + 300px) 8em;
        border-bottom-right-radius: calc(1em + 300px) 4em;
        padding-top: calc(100px + 1rem);
        min-height: 99.5vh;
        padding-left: calc(var(--sidebar-size) + 1rem + 2px);

        & > .container
        {
            margin-left: max(0px, calc((100% - 1321px) / 2));

            @media only screen and (min-width: 992px)
            {
                margin-right: calc((100% - 644px) / 2);
            }
            @media only screen and (min-width: 1200px)
            {
                margin-right: calc((100% - 824px) / 2);
            }
            @media only screen and (min-width: 1400px)
            {
                margin-right: calc((100% - 1004px) / 2);
            }
        }
    }
</style>
