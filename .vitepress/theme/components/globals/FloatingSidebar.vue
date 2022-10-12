<script lang="ts" setup>
</script>

<template>
    <aside id="side-bar" class="card">
        <div class="side-bar__content">
            <strong>Latest articles:</strong>
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
        </div>
    </aside>
</template>

<style lang="scss" scoped>
    #side-bar
    {
        bottom: 0px;
        margin: 0.5rem 1rem;
        left: 0px;
        left: max(0px, calc((100% - 1039px) / 2 + -300px));
        position: fixed;
        top: 0px;
        width: var(--sidebar-size);
    }

    .side-bar__content
    {
        padding: 0.5rem 1rem;
    }
</style>
