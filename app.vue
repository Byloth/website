<script setup lang="ts">
    import AlertHandler from "./components/handlers/AlertHandler.vue";

    useErrorsHandler();
</script>

<template>
    <UApp>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <AlertHandler />
    </UApp>
</template>

<style lang="scss">
    @use "@/assets/scss/index" as *;

    #__nuxt
    {
        .page-enter-from,
        .page-leave-to
        {
            opacity: 0;
        }
        .page-enter-active,
        .page-leave-active
        {
            transition: opacity $app-transition-duration $app-transition-timing-function;
        }
        .page-enter-to,
        .page-leave-from
        {
            opacity: 1;
        }
    }
</style>
