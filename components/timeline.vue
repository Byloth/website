<template>
    <div class="container timeline">
        <div v-for="item, index in items"
             :key="index"
             class="timeline-item"
             :class="(index % 2 === 1) && 'reverse'">
            <div class="content mdc-card">
                <h1>{{ item.title }}</h1>
                <p v-if="item.subtitle">
                    {{ item.subtitle }}
                </p>
            </div>
            <div class="divider">
                <hr />
                <span class="circle"></span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Timeline",
        props: {
            items: {
                default: () => [],

                type: Array
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .timeline
    {
        display: flex;
        flex-direction: column;

        & > .timeline-item
        {
            display: flex;
            flex-direction: row-reverse;

            & > .content
            {
                margin: 0.5em 0px;
                margin-left: 1em;
                padding: 1em;
                text-align: left;
                width: 100%;

                @media (min-width: variables.$md-size)
                {
                    width: calc(50% - 1.5em - 1px);
                }

                &::after
                {
                    background: #FFFFFF;
                    border-radius: 0px;
                    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
                    content: "";
                    height: 1em;
                    left: -0.5em;
                    position: absolute;
                    right: unset;
                    top: 1em;
                    transform: rotate(45deg);
                    width: 1em;
                }
            }
            & > .divider
            {
                position: relative;
                writing-mode: vertical-rl;

                & > hr
                {
                    border-bottom: none;
                    border-left: 1px solid #CDCDCD;
                    border-right: 1px solid #CDCDCD;
                    border-top: none;
                    margin: 0px 0.5em;
                    margin-left: 1em;
                }

                & > .circle
                {
                    background-color: variables.$primary-color;
                    border: 2.5px solid #FFFFFF;
                    border-radius: 50%;
                    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                                0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                                0px 1px 3px 0px rgba(0, 0, 0, 0.12);

                    height: 1.333em;
                    left: calc(0.333em + 1px);
                    position: absolute;
                    top: 1.25em;
                    width: 1.333em;
                }

                @media (min-width: variables.$md-size)
                {
                    & > hr
                    {
                        margin-left: 0.5em;
                    }

                    & > .circle
                    {
                        left: calc(-0.1666em + 1px);
                    }
                }
            }

            &:first-child
            {
                & > .divider > hr
                {
                    margin-top: 1.916em;
                }
            }
            &:last-child
            {
                & > .divider > hr
                {
                    margin-bottom: 33.333%;

                    &:after
                    {
                        border-bottom: none;
                        border-left: 1px dashed #CDCDCD;
                        border-right: 1px dashed #CDCDCD;
                        border-top: none;
                        bottom: 0px;
                        content: "";
                        height: 33.333%;
                        left: 1em;
                        position: absolute;
                        width: 0px;

                        @media (min-width: variables.$md-size)
                        {
                            left: 0.5em;
                        }
                    }
                }
            }

            @media (min-width: variables.$md-size)
            {
                &.reverse
                {
                    flex-direction: row;

                    & > .content
                    {
                        margin-left: 0px;
                        margin-right: 1em;
                        text-align: right;

                        &::after
                        {
                            box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.1);
                            left: unset;
                            right: -0.5em;
                        }
                    }
                }
            }
        }
    }
</style>
