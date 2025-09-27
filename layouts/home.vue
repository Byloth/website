<template>
    <div class="home-layout">
        <FloatingHeader />

        <!--
            TODO: Consider putting the SearchBar and NavigationBar inside the FloatingHeader component.

            <SearchBar />
            <NavigationBar />
        -->

        <UMain class="home-layout__content">
            <slot></slot>
        </UMain>

        <HiddenFooter />
    </div>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .home-layout
    {
        // display: flex;
        // flex-direction: column;
        // width: 100%;

        // &__content
        // {
        //     background-color: variables.$slightly-off-white;
        //     flex: 1;
        //     min-height: 100dvh;
        // }
    }
</style>
