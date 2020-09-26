<template>
    <div class="creative-commons-icon">
        <div class="creative-commons-icon--content">
            <span class="fab fa-creative-commons"></span>
            <span class="fab fa-creative-commons-by"></span>
            <span class="fab fa-creative-commons-sa"></span>
        </div>
        <div class="creative-commons-icon--footer">
            <span class="creative-commons-by">BY</span>
            <span class="creative-commons-sa">SA</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "CreativeCommonsIcon" });
</script>

<style lang="scss" scoped>
    .creative-commons-icon
    {
        background-color: #000000;
        border: 0.06125em solid #000000;
        border-radius: 0.25em;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
        color: #FFFFFF;
        display: inline-block;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        text-shadow: none;

        & > .creative-commons-icon--content
        {
            background-color: #C7C7C7;
            color: #000000;
            padding: 0.06125em 0.125em;

            & > span
            {
                background-color: #FFFFFF;
                border-radius: 50%;

                &.fa-creative-commons
                {
                    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.5), 0px -0.025em 0px 0.075em #C7C7C7;
                    font-size: 1.5em;
                    left: -0.2em;
                    margin: 0px 0.333em;
                    position: absolute;
                    top: 0.06125em;
                }
                &.fa-creative-commons-by
                {
                    margin-left: 2em;
                }
                &.fa-creative-commons-sa
                {
                    margin: 0px 0.333em;
                }
            }
        }
        & > .creative-commons-icon--footer
        {
            display: flex;
            font-size: 0.5em;
            padding: 0px 0.25em;
            text-align: center;

            & > span
            {
                flex: 1;

                &.creative-commons-by
                {
                    margin-left: 4em;
                }
                &.creative-commons-sa
                {
                    margin: 0px 0.666em;
                }
            }
        }
    }
</style>
