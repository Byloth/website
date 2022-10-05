<script lang="ts" setup>
    import { useData, useRoute } from "vitepress";

    const $data = useData();
    const $route = useRoute();
</script>

<template>
    <header>
        <h1>{{ $data.site.value.title }}</h1>
        <nav></nav>
    </header>
    <aside>
    </aside>
    <main>
        <article>
            <Component :is="$route.component" />
        </article>
        <aside></aside>
    </main>
    <footer></footer>
</template>

<style lang="scss">
</style>
