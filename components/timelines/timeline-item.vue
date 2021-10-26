<template>
    <div class="timeline-item"
         :class="classes"
         :style="styles">
        <div class="content mdc-card">
            <div class="header">
                <Avatar :icon="value.icon" />
                <div class="details">
                    <h2 class="title">
                        {{ value.title }}
                    </h2>
                    <h4 v-if="value.subtitle" class="subtitle">
                        {{ value.subtitle }}
                    </h4>
                </div>
            </div>
            <template v-if="value.thumbnail">
                <div v-if="value.thumbnail.type === 'youtube'" class="video">
                    <div class="wrapper">
                        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                frameborder="0"
                                :title="value.thumbnail.description"
                                :src="value.thumbnail.source"
                                @load="onLoad">
                        </iframe>
                    </div>
                </div>
                <div v-else class="image">
                    <img :src="value.thumbnail.source"
                         :alt="value.thumbnail.description"
                         @load="onLoad" />
                </div>
            </template>
            <div v-if="value.hasBody" class="body">
                <template v-if="value.hasExcerpt">
                    <NuxtContent :document="value.excerpt" />
                    <div class="read-more">
                        <NuxtLink :to="{ name: 'posts-slug', params: { slug: value.slug } }">
                            continua…
                        </NuxtLink>
                    </div>
                </template>
                <template v-else>
                    <NuxtContent :document="value" />
                </template>
            </div>
            <div class="footer">
                <small class="details">
                    {{ value.author }}, il {{ value.date | date }}
                </small>
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

    import Time from "@/core/time";

    import Avatar from "@/components/avatar.vue";

    interface TimelineItemData
    {
        isReverse: boolean;
        yCoord: number;
    }

    export default Vue.extend({
        name: "TimelineItem",
        components: { Avatar },
        filters: {
            date(value: Date): string
            {
                return Time.DateAsString(value, false);
            }
        },
        inject: [
            "register",
            "unregister"
        ],
        props: {
            value: {
                required: true,
                type: Object
            }
        },

        data: (): TimelineItemData => ({
            isReverse: false,
            yCoord: 0
        }),

        computed: {
            classes(): Record<string, boolean>
            {
                return { "reverse": this.isReverse };
            },
            styles(): Record<string, string>
            {
                return { "top": `${this.yCoord}px` };
            }
        },

        created: function(): void
        {
            this.register(this);
        },
        destroyed: function(): void
        {
            this.unregister(this);
        },

        methods: {
            onLoad()
            {
                this.$emit("load");
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
        width: 100%;

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
                    margin-right: 1em;
                }
                & > .details
                {
                    flex: 1;

                    & > .title
                    {
                        font-size: 20px;
                        margin: 0px;
                    }
                    & > .subtitle
                    {
                        color: variables.$somewhat-gray;
                        font-size: 14px;
                        font-weight: normal;
                        margin: 0px;
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

                    @media print
                    {
                        display: none;
                    }
                }
            }
            & > .video
            {
                padding: 0.5em 0px;

                & > .wrapper
                {
                    height: 0px;
                    position: relative;
                    padding-bottom: 56.25%;

                    & > iframe
                    {
                        height: 100%;
                        left: 0px;
                        position: absolute;
                        width: 100%;
                        top: 0px;
                    }
                }
            }
            & > .image
            {
                padding: 0.5em 0px;
            }
            & > .body
            {
                padding: 0.5em 1em;

                & > .read-more
                {
                    font-style: italic;
                    margin: 1em 0px;
                    text-align: right;
                }
            }
            & > .footer
            {
                padding: 0.5em 1em;
                padding-top: 0px;
                text-align: right;

                & > .details
                {
                    color: variables.$somewhat-gray;
                    font-size: 10px;
                }
            }

            @media (min-width: variables.$md-size)
            {
                width: calc(50% - 1.5em - 1px);
            }
            @media print
            {
                border-radius: 0px;
                box-shadow: none;
                margin: 0px;
                padding: 0px;
                width: 100%;
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
                background-color: variables.$primary-color;
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
                    left: calc(-0.1666em + 1.5px);
                }
            }
            @media print
            {
                display: none;
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
            position: absolute;

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
                            margin-left: 1em;
                            margin-right: 0px;
                        }
                    }
                    & > .footer
                    {
                        text-align: left;
                    }
                }
            }
        }
    }
</style>
