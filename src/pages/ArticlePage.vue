<template>
    <card-layout>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <main id="blog-page" v-html="article"></main>
    </card-layout>
</template>

<script lang="ts">
    import Axios from "axios";
    import Remark from "remark";
    import RemarkHtml from "remark-html";

    import { VFile } from "vfile";

    import Vue from "vue";

    import CardLayout from "@/layouts/CardLayout.vue";

    export interface ArticlePageData
    {
        article: string;
    }

    export default Vue.extend({
        name: "BlogPage",
        components: { "card-layout": CardLayout },
        props: {
            slug: {
                required: true,
                type: String
            }
        },

        data: (): ArticlePageData => ({ article: "" }),

        mounted(): void
        {
            Axios.get(`/content/${this.slug}.md`)
                .then(({ data }): Promise<VFile> =>
                    Remark()
                        .use(RemarkHtml)
                        .process(data))

                .then(({ contents }): void =>
                {
                    this.article = contents.toString();
                });
        }
    });
</script>
