<template>
    <main id="home-page">
        <Timeline>
            <template v-if="posts">
                <TimelineItem v-for="(post, index) in posts"
                              :key="index"
                              :value="post" />
            </template>
            <template v-else>
                <TimelineItemLoader />
                <TimelineItemLoader image reverse />
                <TimelineItemLoader />
            </template>
        </Timeline>
    </main>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Context } from "@nuxt/types";

    import Timeline from "@/components/timelines/timeline.vue";
    import TimelineItem from "@/components/timelines/timeline-item.vue";
    import TimelineItemLoader from "@/components/loaders/timeline-item-loader.vue";

    import { Post } from "@/models";

    interface HomePageData { posts?: Post[]; }
    interface HomePageAsyncData { posts: Post[]; }

    export default Vue.extend({
        name: "HomePage",
        components: { Timeline, TimelineItem, TimelineItemLoader },

        asyncData: async (context: Context): Promise<HomePageAsyncData> => ({ posts: await Post.GetAll(context) }),
        data: (): HomePageData => ({ posts: undefined }),

        head: { title: "Home" }
    });
</script>

<style lang="scss" scoped>
</style>
