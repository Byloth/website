<script lang="ts" setup>
    import ResizableElement from "../core/ResizableElement.vue";
</script>

<template>
    <ResizableElement is="footer" id="footer">
        <div class="footer__content">
            Designed & Developed with ♥ by Byloth.<br />
            Proudly based on
            <a href="https://vuejs.org/">Vue.js 3</a> &
            <a href="https://vitepress.vuejs.org/">VitePress</a>.
        </div>
        <div class="footer__color-bar"></div>
    </ResizableElement>
</template>

<style lang="scss" scoped>
    #footer
    {
        bottom: 0px;
        left: 0px;
        position: fixed;
        right: 0px;
        text-align: center;
        z-index: -2;
    }

    .footer__content
    {
        padding: 2em 4em;
    }
    .footer__color-bar
    {
        // #70baff -> #ffba70

        background: linear-gradient(90deg, #007fff, #7276fa, #a36bef, #c95edf, #e651cb, #fc45b4, #ff3e9a, #ff4080, #ff4b65, #ff5b4b, #ff6d2e, #ff7f00);
        height: 100px;
        background-size: 100% auto;
        background-position: 0 0;
        animation: gradient 2s infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
        filter: blur(75px);
        position: fixed;
        bottom: -50px;
        left: -50px;
        right: -50px;
        z-index: -1;
    }
</style>
