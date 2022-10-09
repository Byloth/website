<script lang="ts" setup>
    import ResizableElement from "../utils/ResizableElement.vue";
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
        background: linear-gradient(90deg, #007fff, #7276fa, #a36bef, #c95edf, #e651cb, #fc45b4,
                                           #ff3e9a, #ff4080, #ff4b65, #ff5b4b, #ff6d2e, #ff7f00);
        height: 75px;
        background-size: 100%;
        filter: blur(25px);
        position: fixed;
        bottom: -25px;
        left: -25px;
        right: -25px;
        z-index: -1;
    }
</style>
