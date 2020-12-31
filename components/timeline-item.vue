<template>
    <div class="timeline-item" :class="classes">
        <div class="content mdc-card">
            <div class="header">
                <div class="avatar">
                    <div class="icon">
                        <span class="fas" :class="`fa-${item.icon}`"></span>
                    </div>
                </div>
                <div class="details">
                    <h2 class="title">
                        {{ item.title }}
                    </h2>
                    <span class="date">
                        {{ item.date | date }}
                    </span>
                </div>
            </div>
            <div v-if="item.image" class="image">
                <img :src="item.image.source" :alt="item.image.description" />
            </div>
            <div class="body">
                <NuxtContent :document="item" />
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

    export default Vue.extend({
        name: "TimelineItem",
        filters: {
            date(value: Date): string
            {
                const day = `${value.getDate()}`.padStart(2, "0");
                const month = `${value.getMonth() + 1}`.padStart(2, "0");
                const year = value.getFullYear();

                return `${day}/${month}/${year}`;
            }
        },
        props: {
            item: {
                required: true,
                type: Object
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
            margin: 0.5em 0px;
            margin-left: 1em;
            text-align: left;
            width: calc(100% - 2.5em - 2px);

            @media (min-width: variables.$md-size)
            {
                width: calc(50% - 1.5em - 1px);
            }

            & > .header
            {
                align-items: center;
                background-color: #FFFFFF;
                border-top-left-radius: var(--mdc-shape-medium, 4px);
                border-top-right-radius: var(--mdc-shape-medium, 4px);
                display: flex;
                flex-direction: row;
                padding: 1em;

                & > .avatar
                {
                    padding-right: 1em;

                    & > .icon
                    {
                        align-items: center;
                        background-color: variables.$primary-color;
                        border-radius: 50%;
                        box-shadow: inset 0px 0px 2px 0px rgba(0, 0, 0, 0.5);
                        color: #FFFFFF;
                        display: flex;
                        font-size: 1.2em;
                        height: 40px;
                        justify-content: center;
                        overflow: hidden;
                        width: 40px;
                    }
                }
                & > .details
                {
                    flex: 1;

                    & > .title
                    {
                        font-size: 20px;
                        margin-bottom: 0.333em;
                        margin-top: 0px;
                    }
                    & > .date
                    {
                        color: variables.$somewhat-gray;
                        font-size: 14px;
                        font-weight: normal;
                        margin-bottom: 0px;
                        margin-top: 0px;
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
                    top: 1em;
                    transform: rotate(45deg);
                    width: 1em;
                }
            }
            & > .body
            {
                padding: 1em;
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
                top: 1.333em;
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
                margin-top: 2em;
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

                    & > .header
                    {
                        flex-direction: row-reverse;

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
                }
            }
        }
    }
</style>
