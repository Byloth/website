<script lang="ts" setup>
    import { useData } from "vitepress";

    import ResizableElement from "../utils/ResizableElement.vue";

    const $data = useData();
    const $site = $data.site;
</script>

<template>
    <ResizableElement is="header" id="header">
        <div class="header__content card">
            <h1 class="header__title card">
                <a href="#" title="Naviga alla Home">{{ $site.title }}</a>
            </h1>
            <nav class="header__menu container">
                <ul>
                    <li>
                        <a class="header__menu-item"
                           href="#"
                           title="Naviga alla Home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a class="header__menu-item"
                           href="#"
                           title="Naviga alla pagina d'informazioni">
                            Chi sono
                        </a>
                    </li>
                    <li>
                        <a class="header__menu-item"
                           href="#"
                           title="Naviga al Blog">
                            Blog
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </ResizableElement>
</template>

<style lang="scss" scoped>
    #header
    {
        left: 0px;
        position: fixed;
        right: 0px;
        top: 0px;
    }

    .header__content
    {
        margin: 0.5rem 1rem;
        margin-top: 2.5rem;
        padding: 0.5rem 1rem;
        position: relative;
    }

    .header__title
    {
        left: var(--header-title-margin-left);
        margin: 0px;
        margin-top: -1rem;
        padding: 0.5rem 1rem;
        position: absolute;
        top: 0px;
    }
    .header__menu
    {
        margin-left: var(--header-menu-margin-left);

        & > ul
        {
            display: flex;
            margin: 0px;
            padding: 0px;
            justify-content: flex-end;

            & > li
            {
                display: block;
                list-style: none;
            }

            .header__menu-item
            {
                display: inline-block;
                padding: 0.5rem 1rem;
            }
        }
    }
</style>
