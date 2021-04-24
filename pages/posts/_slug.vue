<template>
    <CardLayout id="post-page">
        <div v-if="post.thumbnail" class="image">
            <img :src="post.thumbnail.source" :alt="post.thumbnail.description" />
            <div class="header">
                <h1 class="title">
                    {{ post.title }}
                </h1>
                <h3 class="subtitle">
                    {{ post.subtitle }}
                </h3>
            </div>
        </div>
        <div v-else class="header">
            <h1 class="title">
                {{ post.title }}
            </h1>
            <h3 class="subtitle">
                {{ post.subtitle }}
            </h3>
        </div>
        <main class="content">
            <NuxtContent :document="post" />
        </main>
    </CardLayout>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MetaInfo } from "vue-meta";
    import { Context } from "@nuxt/types";

    import { Post } from "@/models";

    import CardLayout from "@/layouts/pages/card-layout.vue";

    interface VariablePageAsyncData { post?: Post; }
    interface VariablePageData extends VariablePageAsyncData { }

    export default Vue.extend({
        name: "PostPage",
        components: { CardLayout },

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
            & > .title
            {
                margin: 0.5em 0.75em;
            }
            & > .subtitle
            {
                margin: 1em 2.5em;
                margin-bottom: 0px;
            }
        }
        .image
        {
            margin-bottom: -4px;
            overflow: hidden;
            position: relative;

            & > .header
            {
                background-color: rgba(0, 0, 0, 0.25);
                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0));
                border-top: 1px solid rgba(0, 0, 0, 0.25);
                bottom: 0px;
                color: #FFFFFF;
                left: 0px;
                position: absolute;
                right: 0px;
                text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

                & > .subtitle
                {
                    margin-bottom: 1em;
                }
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
