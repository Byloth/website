<script lang="ts" setup>
    import { useData, useRoute } from "vitepress";

    const $data = useData();
    const $route = useRoute();
</script>

<template>
    <div>
        <h1>{{ $data.site.value.title }}</h1>
        <main>
            <Component :is="$route.component" />
        </main>
    </div>
</template>

<style lang="scss">
</style>
