<template>
    <div id="jumbotron">
        <blockquote v-if="dailyMessage.isLoaded">
            <template v-if="dailyMessage.typeId === 0">
                <template v-if="dailyMessage.url">
                    <h2>
                        <a :href="dailyMessage.url" target="_blank" v-html="dailyMessage.text" />
                    </h2>
                </template>
                <template v-else>
                    <h2 v-html="dailyMessage.text" />
                </template>
            </template>
            <template v-else-if="dailyMessage.typeId === 1">
                <template v-if="dailyMessage.url">
                    <h2 v-html="dailyMessage.text" />
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
                    <h2 v-html="dailyMessage.text" />
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
                    <h2 v-html="dailyMessage.text" />
                    <footer>
                        <a :href="dailyMessage.url" target="_blank">
                            traduzione di “{{ dailyMessage.source }}”
                        </a>
                    </footer>
                </template>
                <template v-else>
                    <h2 v-html="dailyMessage.text" />
                    <footer>
                        traduzione di “{{ dailyMessage.source }}”
                    </footer>
                </template>
            </template>
            <template v-else-if="dailyMessage.typeId === 3">
                <template v-if="dailyMessage.url">
                    <h2>
                        <a :href="dailyMessage.url" target="_blank" v-html="dailyMessage.text" />
                    </h2>
                </template>
                <template v-else>
                    <h2 v-html="dailyMessage.text" />
                </template>
            </template>
        </blockquote>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import { DailyMessage } from "@/models";

    @Component({ name: "Jumbotron" })
    export default class Jumbotron extends Vue
    {
        public dailyMessage: DailyMessage;

        public constructor()
        {
            super();

            this.dailyMessage = DailyMessage.Empty;
        }

        public created(): void
        {
            DailyMessage.GetRandomOne()
                .then((dailyMessage) =>
                {
                    this.dailyMessage = dailyMessage;

                    if (this.dailyMessage.canBeExecuted === true)
                    {
                        this.dailyMessage.execute();
                    }
                });
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/variables";

    #jumbotron
    {
        background: #004BA0;
        color: #FFFFFF;
        display: flex;
        min-height: 114px;
        padding: 200px 8px 8px 16px;
        position: relative;

        & > blockquote
        {
            border-left: 0.333em solid lighten($app-primary-color, 15);
            padding: 0px 20px;

            &::before
            {
                color: lighten($app-primary-color, 20);
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
