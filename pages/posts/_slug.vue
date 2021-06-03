<template>
    <CardLayout id="post-page">
        <div v-if="post.thumbnail && post.thumbnail.type === 'image'" class="image">
            <img :src="post.thumbnail.source" :alt="post.thumbnail.description" />
            <div class="header">
                <Avatar :icon="post.icon" />
                <div class="details">
                    <h1 class="title">
                        {{ post.title }}
                    </h1>
                    <h3 v-if="post.subtitle" class="subtitle">
                        {{ post.subtitle }}
                    </h3>
                </div>
            </div>
        </div>
        <div v-else class="header">
            <Avatar :icon="post.icon" />
            <div class="details">
                <h1 class="title">
                    {{ post.title }}
                </h1>
                <h3 v-if="post.subtitle" class="subtitle">
                    {{ post.subtitle }}
                </h3>
            </div>
        </div>
        <div v-if="post.thumbnail && post.thumbnail.type === 'youtube'" class="video">
            <div class="wrapper">
                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        frameborder="0"
                        :title="post.thumbnail.description"
                        :src="post.thumbnail.source">
                </iframe>
            </div>
        </div>
        <main v-if="post.hasBody" class="content">
            <NuxtContent :document="post" />
        </main>
    </CardLayout>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MetaInfo } from "vue-meta";
    import { Context } from "@nuxt/types";

    import { Post } from "@/models";

    import Avatar from "@/components/avatar.vue";
    import CardLayout from "@/layouts/pages/card-layout.vue";

    interface VariablePageAsyncData { post?: Post; }
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface VariablePageData extends VariablePageAsyncData { }

    export default Vue.extend({
        name: "PostPage",
        components: { Avatar, CardLayout },

        asyncData: async function(context: Context): Promise<VariablePageAsyncData>
        {
            try
            {
                const post = await Post.Get(context, context.params.slug);

                return { post };
            }
            catch (err)
            {
                context.error({ statusCode: 404, message: "This page could not be found" });
            }

            return { };
        },
        data: (): VariablePageData => ({ }),
        head: function(): MetaInfo
        {
            return { title: this.post?.title };
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    #post-page
    {
        .header
        {
            align-items: flex-end;
            display: flex;

            & > .avatar
            {
                font-size: 2em;
                margin-bottom: 0.125em;
                margin-left: 0.75em;
            }

            & > .details
            {
                flex: 1;

                & > .title
                {
                    margin: 0.5em 0.75em;
                }
                & > .subtitle
                {
                    margin: 1em 2.5em 0px;
                }
            }
        }
        .image
        {
            overflow: hidden;
            position: relative;

            & > .header
            {
                align-items: center;
                background-color: rgba(0, 0, 0, 0.25);
                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
                border-top: 1px solid rgba(0, 0, 0, 0.25);
                bottom: 0px;
                color: #FFFFFF;
                left: 0px;
                position: absolute;
                right: 0px;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

                & > .avatar
                {
                    border: 1px solid darken($color: variables.$primary-color, $amount: 20);
                    box-shadow: 2.5px 2.5px 10px rgba(0, 0, 0, 0.5);
                    margin-bottom: 0px;
                    text-shadow: none;
                }
                & > .details > .subtitle
                {
                    margin-bottom: 1em;
                }
            }
        }
        .video
        {
            background-color: rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(0, 0, 0, 0.25);
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 10px 0px rgba(0, 0, 0, 0.12);

            margin: 2em 2em 0px;

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

            &:last-child
            {
                margin-bottom: 2em;
            }
        }
        .content
        {
            padding: 1em;
        }

        @media (min-width: variables.$sm-size)
        {
            .image
            {
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;

                &:last-child
                {
                    border-bottom-left-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
            }
        }
        @media (min-width: variables.$md-size)
        {
            .content
            {
                padding: 2em;
            }
        }
        @media print
        {
            .content
            {
                padding: 0px;
            }
        }
    }
</style>
