<script lang="ts" setup>
</script>

<template>
    <div class="sidebar"></div>
    <div class="container"></div>
</template>

<style lang="scss" scoped>
    $container-size: 21cm;
    $sidebar-size: 250px;

    .sidebar
    {
        background-color: rgba(0, 0, 0, 0.25);

        width: #{$sidebar-size};
        height: 100vh;

        position: fixed;
        top: 0px;
        left: 0px;

        @media only screen and (max-width: 1059px)
        {
            @keyframes open-close
            {
                0% { margin-left: 0px; }
                50% { margin-left: -#{$sidebar-size}; }
                100% { margin-left: 0px; }
            }

            animation: open-close 2.5s ease-in-out infinite;
        }
        @media only screen and (min-width: 1060px)
        {
            $size: calc($container-size + $sidebar-size);

            margin-left: max(((100% - #{$size}) / 2) - 125px, (100% - #{$size}) / 2.5);
        }
    }
    .container
    {
        background-color: rgba(255, 255, 255, 0.75);

        width: #{$container-size};
        height: 200vh;

        @media only screen and (max-width: 1059px)
        {
            margin: auto;
        }
        @media only screen and (min-width: 1060px)
        {
            $size: calc($container-size + $sidebar-size);
            $offset: $sidebar-size;

            margin-left: max(((100% - #{$size}) / 2) + (#{$offset} - 125px), ((100% - #{$size}) / 2.5) + #{$offset});
        }
    }
</style>
