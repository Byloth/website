<template>
    <!-- eslint-disable vue/no-v-html -->
    <div class="mdc-jumbotron">
        <blockquote>
            <template v-if="dailyMessage.isLoaded">
                <template v-if="dailyMessage.typeId === 0">
                    <template v-if="dailyMessage.url">
                        <h2>
                            <a :href="dailyMessage.url"
                               target="_blank"
                               v-html="dailyMessage.text">
                            </a>
                        </h2>
                    </template>
                    <template v-else>
                        <h2 v-html="dailyMessage.text"></h2>
                    </template>
                </template>
                <template v-else-if="dailyMessage.typeId === 1">
                    <template v-if="dailyMessage.url">
                        <h2 v-html="dailyMessage.text"></h2>
                        <footer>
                            <a :href="dailyMessage.url" target="_blank">
                                <cite>{{ dailyMessage.author }}</cite>
                                <template v-if="dailyMessage.source">
                                    di “{{ dailyMessage.source }}”
                                </template>
                            </a>
                        </footer>
                    </template>
                    <template v-else>
                        <h2 v-html="dailyMessage.text"></h2>
                        <footer>
                            <cite>{{ dailyMessage.author }}</cite>
                            <template v-if="dailyMessage.source">
                                di “{{ dailyMessage.source }}”
                            </template>
                        </footer>
                    </template>
                </template>
                <template v-else-if="dailyMessage.typeId === 2">
                    <template v-if="dailyMessage.url">
                        <h2 v-html="dailyMessage.text"></h2>
                        <footer>
                            <a :href="dailyMessage.url" target="_blank">
                                traduzione di “{{ dailyMessage.source }}”
                            </a>
                        </footer>
                    </template>
                    <template v-else>
                        <h2 v-html="dailyMessage.text"></h2>
                        <footer>
                            traduzione di “{{ dailyMessage.source }}”
                        </footer>
                    </template>
                </template>
                <template v-else-if="dailyMessage.typeId === 3">
                    <template v-if="dailyMessage.url">
                        <h2>
                            <a :href="dailyMessage.url"
                               target="_blank"
                               v-html="dailyMessage.text">
                            </a>
                        </h2>
                    </template>
                    <template v-else>
                        <h2 v-html="dailyMessage.text"></h2>
                    </template>
                </template>
            </template>
            <template v-else>
                <subtitle-loader />
                <text-loader />
            </template>
        </blockquote>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import { DailyMessage } from "@/models";

    interface JumbotronData { dailyMessage: DailyMessage; }

    export default Vue.extend({
        name: "Jumbotron",

        data: (): JumbotronData => ({ dailyMessage: DailyMessage.Empty }),

        created: async function(): void
        {
            this.dailyMessage = await DailyMessage.GetRandomOne();

            if (this.dailyMessage.canBeExecuted === true)
            {
                this.$nextTick(() => this.dailyMessage.execute());
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .mdc-jumbotron
    {
        background: #004BA0;
        color: #FFFFFF;
        display: flex;
        padding: 200px 8px 8px 16px;
        position: relative;

        & > blockquote
        {
            border-left: 0.333em solid lighten(variables.$primary-color, 15);
            padding: 0px 20px;
            min-height: 82px;
            width: 100%;

            &::before
            {
                color: lighten(variables.$primary-color, 20);
                content: "“";
                font-size: 3em;
                left: 18px;
                position: absolute;
            }

            & > h2
            {
                margin-top: 0px;
            }

            & > footer
            {
                font-style: italic;
                padding: 0px 0px 1em 1em;

                &::before
                {
                    content: "— ";
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
        }

        @media (max-width: 599px)
        {
            padding: 200px 8px 8px 10px;

            & > blockquote
            {
                padding: 0px 18px;

                &::before
                {
                    left: 15px;
                }
            }
        }
    }
</style>
