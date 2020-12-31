<template>
    <!-- eslint-disable vue/no-v-html -->
    <div class="jumbotron">
        <blockquote>
            <template v-if="dailyMessage">
                <template v-if="dailyMessage.typeId === 0">
                    <template v-if="dailyMessage.url">
                        <a :href="dailyMessage.url"
                           target="_blank"
                           v-html="dailyMessage.text">
                        </a>
                    </template>
                    <template v-else>
                        <span v-html="dailyMessage.text"></span>
                    </template>
                </template>
                <template v-else-if="dailyMessage.typeId === 1">
                    <template v-if="dailyMessage.url">
                        <span v-html="dailyMessage.text"></span>
                        <small>
                            <a :href="dailyMessage.url" target="_blank">
                                <cite>{{ dailyMessage.author }}</cite>
                                <template v-if="dailyMessage.source">
                                    di “{{ dailyMessage.source }}”
                                </template>
                            </a>
                        </small>
                    </template>
                    <template v-else>
                        <span v-html="dailyMessage.text"></span>
                        <small>
                            <cite>{{ dailyMessage.author }}</cite>
                            <template v-if="dailyMessage.source">
                                di “{{ dailyMessage.source }}”
                            </template>
                        </small>
                    </template>
                </template>
                <template v-else-if="dailyMessage.typeId === 2">
                    <template v-if="dailyMessage.url">
                        <span v-html="dailyMessage.text"></span>
                        <small>
                            <a :href="dailyMessage.url" target="_blank">
                                traduzione di “{{ dailyMessage.source }}”
                            </a>
                        </small>
                    </template>
                    <template v-else>
                        <span v-html="dailyMessage.text"></span>
                        <small>
                            traduzione di “{{ dailyMessage.source }}”
                        </small>
                    </template>
                </template>
                <template v-else-if="dailyMessage.typeId === 3">
                    <template v-if="dailyMessage.url">
                        <a :href="dailyMessage.url"
                           target="_blank"
                           v-html="dailyMessage.text">
                        </a>
                    </template>
                    <template v-else>
                        <span v-html="dailyMessage.text"></span>
                    </template>
                </template>
            </template>
            <template v-else>
                <TextLoader />
                <TextLoader class="small" />
            </template>
        </blockquote>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import { DailyMessage } from "@/models";

    interface JumbotronData { dailyMessage: DailyMessage | null; }

    export default Vue.extend({
        name: "Jumbotron",

        data: (): JumbotronData => ({ dailyMessage: null }),
        created: async function(): Promise<void>
        {
            this.dailyMessage = await DailyMessage.GetRandomOne();

            if (this.dailyMessage.canBeExecuted === true)
            {
                this.$nextTick((): Promise<unknown> => this.dailyMessage!.execute());
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .jumbotron
    {
        background-color: variables.$primary-dark-color;
        color: #FFFFFF;
        display: flex;
        padding-top: 192px;
        position: relative;

        & > blockquote
        {
            border-left: 0.2em solid lighten(variables.$primary-color, 15);
            padding: 0.2em 1em;
            min-height: 64px;
            position: relative;
            width: 100%;

            &::before
            {
                color: lighten(variables.$primary-color, 20);
                content: "“";
                font-size: 2em;
                left: -30px;
                position: absolute;
            }

            & > a,
            & > span:not(:last-child)
            {
                display: block;
                margin-bottom: 0.75em;
            }
            & > small
            {
                display: block;
                font-style: italic;
                padding: 0px 0px 0.75em 0.75em;

                & > cite::before
                {
                    content: "- cit. ";
                }
            }

            & > .skeleton-loader.text-loader
            {
                margin: 0px;
                margin-bottom: 0.75em;

                &.small
                {
                    font-size: smaller;
                    margin-bottom: 0px;
                }
            }

            a
            {
                color: inherit;
                cursor: pointer;
                text-decoration: inherit;

                &:hover
                {
                    text-decoration: underline;
                }

                &::after
                {
                    content: "launch";
                    font-family: "Material Icons";
                    font-weight: normal;
                    margin-left: 5px;
                    margin-top: 2px;
                    position: absolute;
                }
            }

            @media (max-width: variables.$max-mobile-size)
            {
                margin-left: 2em;

                &::before
                {
                    left: -26px;
                }
            }
        }
    }
</style>
