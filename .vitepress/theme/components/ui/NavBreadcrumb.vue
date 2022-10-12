<script lang="ts" setup>
</script>

<template>
    <nav id="breadcrumb" class="__debug">
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                This page
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    #breadcrumb
    {
        ul
        {
            display: flex;
            margin: 0px;
            padding: 0px;

            & > li
            {
                display: block;
                list-style: none;

                &:last-child
                {
                    font-weight: bold;
                }
                &:not(:last-child):after
                {
                    content: "/";
                    padding: 0px 0.5rem;
                }
            }
        }
    }
</style>
