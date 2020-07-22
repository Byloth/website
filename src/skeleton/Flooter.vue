<template>
    <footer id="flooter">
        <div style="align-items: stretch; display: flex; flex-direction: column; height: 100%;">
            <div style="flex: 1;">
                <p>
                    Designed &amp; Developed with <span data-v-678128b2="" class="fas fa-heart red"></span> by Matteo Bilotta.
                </p>
                <p>
                    <a rel="license"
                       href="http://creativecommons.org/licenses/by-sa/4.0/"
                       target="_blank"
                       title="CC BY-SA 4.0"
                       style="background-color: #C7C7C7; border-radius: 5px; box-shadow: 1px 1px 4px #000000; display: inline-block; font-size: 24px;">
                        <span class="fab fa-creative-commons" style="margin: 0.25em;"></span>
                        <span class="fab fa-creative-commons-by" style="margin: 0.25em;"></span>
                        <span class="fab fa-creative-commons-sa" style="margin: 0.25em;"></span>
                    </a>
                </p>
            </div>
            <div style="display: flex; flex: auto;">
                <div style="flex: 1; border: 1px solid #fff;">
                    <h1>Left</h1>
                </div>
                <div style="flex: 1; border: 1px solid #fff;">
                    <h1>Right</h1>
                </div>
            </div>
        </div>
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
        height: calc(250px - 0.5em);
        padding-top: 0.5em;
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
