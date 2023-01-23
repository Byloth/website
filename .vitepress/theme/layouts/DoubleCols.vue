<script lang="ts" setup>
</script>

<template>
    <div id="layout--double-cols">
        <div class="layout--double-cols__col sidebar"></div>
        <div class="layout--double-cols__col container"></div>
    </div>
</template>

<style lang="scss" scoped>
    #layout--double-cols
    {
        display: flex;
    }

    .layout--double-cols__col
    {
        height: 100vh;
        margin: unset;
    }

    .sidebar
    {
        background-color: rgba(0, 0, 0, 0.25);

        $size: calc(21cm + 250px);
        $offset: 125px;

        margin-left: max(((100% - #{$size}) / 2) - #{$offset}, (100% - #{$size}) / 2.5);

        width: 250px;
    }
    .container
    {
        background-color: rgba(255, 255, 255, 0.75);

        width: 21cm;
    }
</style>
