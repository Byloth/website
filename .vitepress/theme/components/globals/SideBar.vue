<script lang="ts" setup>
</script>

<template>
    <aside id="side-bar" class="card">
        <ul>
            <li>
                <a href="#">First post</a>
            </li>
            <li>
                <a href="#">You won't believe me!</a>
            </li>
            <li>
                <a href="#">Yesterday this happened...</a>
            </li>
            <li>
                <a href="#">How to suft this site</a>
            </li>
            <li>
                <a href="#">What I do while I sleep</a>
            </li>
        </ul>
    </aside>
</template>

<style lang="scss" scoped>
    #side-bar
    {
        bottom: 0px;
        margin: 0.5em 1em;
        left: 0px;
        position: fixed;
        top: 0px;
        width: var(--sidebar-size);
    }
</style>
