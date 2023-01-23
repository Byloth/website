<script lang="ts" setup>
</script>

<template>
    <div id="layout--double-cols">
        <div class="__debug layout--double-cols__col sidebar"></div>
        <div class="__debug layout--double-cols__col container"></div>
    </div>
</template>

<style lang="scss" scoped>
    #layout--double-cols
    {
        background-color: #FFFFFF;
        display: flex;
        padding: 0.5rem 1rem;
    }

    .layout--double-cols__col
    {
        background-color: rgba(0, 0, 0, 0.1);
        height: calc(100vh - 2rem - 2px);
        margin: unset;
    }

    .sidebar
    {
        width: 250px;

        $size: calc(21cm + 250px);
        $offset: 125px;

        margin-left: max(
            calc(((100% - #{$size}) / 2) - #{$offset} - (2rem - 4px)),
            calc(((100% - #{$size}) / 2.5) - (2rem - 4px)),
            0px
        );
    }
    .container
    {
        width: 21cm;
    }

    /* XXS */

    @media only screen and (min-width: 320px)
    {
        /* XS */

        .layout--double-cols__col
        {
            background-color: rgba(255, 0, 0, 0.1);
        }
    }
    @media only screen and (min-width: 640px)
    {
        /* S */

        .layout--double-cols__col
        {
            background-color: rgba(255, 255, 0, 0.1);
        }
    }
    @media only screen and (min-width: 960px)
    {
        /* M */

        .layout--double-cols__col
        {
            background-color: rgba(0, 255, 0, 0.1);
        }
    }
    @media only screen and (min-width: 1280px)
    {
        /* L */

        .layout--double-cols__col
        {
            background-color: rgba(0, 255, 255, 0.1);
        }
    }
    @media only screen and (min-width: 1600px)
    {
        /* XL */

        .layout--double-cols__col
        {
            background-color: rgba(0, 0, 255, 0.1);
        }
    }
    @media only screen and (min-width: 1920px)
    {
        /* XXL */

        .layout--double-cols__col
        {
            background-color: rgba(255, 0, 255, 0.1);
        }
    }
</style>
