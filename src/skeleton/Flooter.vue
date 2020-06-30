<template>
    <footer id="flooter">
        <p>
            Designed &amp; Developed with <span data-v-678128b2="" class="fas fa-heart"></span> by
            <a href="https://github.com/Byloth" target="_blank" title="Byloth on GitHub">Byloth</a>.
        </p>
        <p>
            <a rel="license"
            href="http://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            title="CC BY-SA 4.0"
            style="background-color: #C7C7C7; border-radius: 5px; box-shadow: 1px 1px 4px #000000; display: inline-block; font-size: 24px;">
                <span class="fab fa-creative-commons" style="margin: 0.25em;" />
                <span class="fab fa-creative-commons-by" style="margin: 0.25em;" />
                <span class="fab fa-creative-commons-sa" style="margin: 0.25em;" />
            </a>
        </p>
    </footer>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "Flooter" })
    export default class Flooter extends Vue { }
</script>

<style lang="scss" scoped>
    #flooter
    {
        background-color: #3F3F3F;
        bottom: 0px;
        color: #FFFFFF;
        height: 250px;
        position: fixed;
        text-align: center;
        text-shadow: 1px 1px 4px #000000;
        width: 100%;
        z-index: -1;

        a
        {
            color: #1976D2;
        }
    }
</style>
