<template>
    <div class="creative-commons-icon">
        <span class="fab fa-creative-commons"></span>
        <div class="creative-commons-icon--content">
            <div v-if="by">
                <span class="fab fa-creative-commons-by"></span>
            </div>
            <div v-if="nc">
                <span class="fab fa-creative-commons-nc"></span>
            </div>
            <div v-if="nd">
                <span class="fab fa-creative-commons-nd"></span>
            </div>
            <div v-if="sa">
                <span class="fab fa-creative-commons-sa"></span>
            </div>
            <div v-if="zero">
                <span class="fab fa-creative-commons-zero"></span>
            </div>
        </div>
        <div class="creative-commons-icon--footer">
            <span v-if="by" class="creative-commons-by">BY</span>
            <span v-if="nc" class="creative-commons-nc">NC</span>
            <span v-if="nd" class="creative-commons-nd">ND</span>
            <span v-if="sa" class="creative-commons-sa">SA</span>
            <span v-if="zero" class="creative-commons-zero">ZERO</span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "CreativeCommonsIcon",
        props: {
            by: {
                default: false,
                type: Boolean
            },
            nc: {
                default: false,
                type: Boolean
            },
            nd: {
                default: false,
                type: Boolean
            },
            sa: {
                default: false,
                type: Boolean
            }
        },
        computed: {
            zero(): boolean
            {
                return !(this.by || this.nc || this.nd || this.sa);
            }
        },

        created: function(): void
        {
            if (this.nd && this.sa)
            {
                throw new Error("You cannot require both 'ND' and 'SA' at the same time. Choose between one of these.");
            }
        }
    });
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
        height: 1.975em;
        letter-spacing: normal;
        line-height: normal;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        text-shadow: none;
        width: 5.5em;
        white-space: nowrap;

        & > .fa-creative-commons
        {
            box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.5), 0px -0.025em 0px 0.075em #C7C7C7;
            font-size: 1.5em;
            left: -0.2em;
            margin: 0px 0.333em;
            position: absolute;
            top: 0.06125em;
        }

        & > .creative-commons-icon--content
        {
            background-color: #C7C7C7;
            color: #000000;
            display: flex;
            height: 1.275em;
            padding: 0.06125em 0.125em;
            padding-left: 1.85em;
            text-align: center;

            & > div
            {
                flex: 1;
            }
        }
        & > .creative-commons-icon--footer
        {
            display: flex;
            font-size: 0.5em;
            padding: 0px 0.25em;
            padding-left: 3.7em;
            text-align: center;

            & > span
            {
                flex: 1;
            }
        }

        .fab
        {
            background-color: #FFFFFF;
            border-radius: 50%;
            color: #000000;
        }
    }
</style>
