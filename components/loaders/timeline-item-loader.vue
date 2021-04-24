<template>
    <div class="timeline-item" :class="classes">
        <div class="content mdc-card">
            <div class="header">
                <div class="avatar">
                    <SkeletonLoader class="icon-loader" />
                </div>
                <div class="details">
                    <TextLoader class="title-loader" />
                    <TextLoader class="subtitle-loader"
                                :delay="50"
                                :width="87.5" />
                </div>
            </div>
            <div v-if="image" class="image">
                <ImageLoader />
            </div>
            <div class="body">
                <TextLoader :delay="0" :width="100" />
                <TextLoader :delay="50" :width="70" />
                <TextLoader :delay="100" :width="50" />
                <TextLoader :delay="150" :width="100" />
                <TextLoader :delay="200" :width="33.333" />
            </div>
            <div class="footer">
                <TextLoader class="date-loader" :width="20" />
            </div>
        </div>
        <div class="divider">
            <hr />
            <span class="circle"></span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import SkeletonLoader from "./core/skeleton-loader.vue";
    import ImageLoader from "./image-loader.vue";
    import TextLoader from "./text-loader.vue";

    export default Vue.extend({
        name: "TimelineItemLoader",
        components: { SkeletonLoader, ImageLoader, TextLoader },
        props: {
            image: {
                default: false,
                type: Boolean
            },
            reverse: {
                default: false,
                type: Boolean
            }
        },
        computed: {
            classes(): Record<string, boolean>
            {
                return { "reverse": this.reverse };
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .timeline-item
    {
        display: flex;
        flex-direction: row-reverse;

        & > .content
        {
            margin: 0.25em 0px;
            margin-left: 1em;
            text-align: left;
            width: calc(100% - 2.5em - 2px);

            & > .header
            {
                align-items: center;
                background-color: #FFFFFF;
                border-top-left-radius: var(--mdc-shape-medium, 4px);
                border-top-right-radius: var(--mdc-shape-medium, 4px);
                display: flex;
                flex-direction: row;
                padding: 1em;
                padding-bottom: 0.5em;

                & > .avatar
                {
                    padding-right: 1em;

                    & > .icon-loader
                    {
                        border: 1px solid rgba(0, 0, 0, 0.1);
                        border-radius: 50%;
                        height: 40px;
                        width: 40px;
                    }
                }
                & > .details
                {
                    flex: 1;

                    & > .title-loader
                    {
                        font-size: 20px;
                        margin: 0px;
                    }
                    & > .subtitle-loader
                    {
                        font-size: 14px;
                        margin-bottom: 0px;
                        margin-top: 0.5em;
                    }
                }

                &::after
                {
                    background-color: inherit;
                    border-radius: 0px;
                    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);
                    content: "";
                    height: 1em;
                    left: -0.5em;
                    position: absolute;
                    right: unset;
                    top: 1.95em;
                    transform: rotate(45deg);
                    width: 1em;
                }
            }
            & > .image
            {
                padding: 0.5em 0px;
            }
            & > .body
            {
                padding: 0.5em 1em;

                & > .text-loader
                {
                    font-size: 1em;
                    margin: 0px;

                    &:not(:last-child)
                    {
                        margin-bottom: 0.25em;
                    }
                }
            }
            & > .footer
            {
                padding: 0.5em 1em;
                padding-top: 0px;

                & > .date-loader
                {
                    font-size: 10px;
                    margin-left: auto;
                    margin-right: 0px;
                }
            }

            @media (min-width: variables.$md-size)
            {
                width: calc(50% - 1.5em - 1px);
            }
        }
        & > .divider
        {
            position: relative;
            writing-mode: vertical-rl;

            & > hr
            {
                border-bottom: none;
                border-left: 2px solid #CDCDCD;
                border-right: none;
                border-top: none;
                margin: 0px 0.5em;
                margin-left: 1em;
            }

            & > .circle
            {
                background-color: #D3D3D3;
                border: 2.5px solid #FFFFFF;
                border-radius: 50%;
                box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
                            0px 1px 1px 0px rgba(0, 0, 0, 0.14),
                            0px 1px 3px 0px rgba(0, 0, 0, 0.12);

                height: 1.333em;
                left: calc(0.333em + 1px);
                position: absolute;
                top: 2em;
                width: 1.333em;
                z-index: 1;
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
                margin-top: 3em;
            }
        }
        &:last-child
        {
            margin-bottom: 0px;

            & > .divider > hr
            {
                margin-bottom: 33.333%;

                &:after
                {
                    border-bottom: none;
                    border-left: 1px dashed #CDCDCD;
                    border-right: 1px dashed #CDCDCD;
                    border-top: none;
                    bottom: 2em;
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

        @media (min-width: variables.$sm-size)
        {
            & > .content
            {
                margin-bottom: 0.5em;
                margin-top: 0.5em;
            }
            & > .divider > .circle
            {
                top: 2.25em;
            }
        }
        @media (min-width: variables.$md-size)
        {
            margin-bottom: -50px;

            &.reverse
            {
                flex-direction: row;

                & > .content
                {
                    margin-left: 0px;
                    margin-right: 1em;

                    & > .header
                    {
                        flex-direction: row-reverse;
                        text-align: right;

                        &::after
                        {
                            box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.1);
                            left: unset;
                            right: -0.5em;
                        }

                        & > .avatar
                        {
                            padding-left: 1em;
                            padding-right: 0px;
                        }
                    }
                    & > .footer > .date-loader
                    {
                        margin-left: 0px;
                        margin-right: auto;
                    }

                    .skeleton-loader
                    {
                        margin-right: 0px;
                        margin-left: auto;
                    }
                }
            }
        }
    }
</style>
