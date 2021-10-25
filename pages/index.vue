<template>
    <main id="home-page">
        <Timeline :items="posts" />
    </main>
</template>

<script lang="ts">
    import Vue from "vue";
    import { Context } from "@nuxt/types";

    import Timeline from "@/components/timelines/timeline.vue";

    import { Post } from "@/models";

    interface HomePageData { posts?: Post[]; }
    interface HomePageAsyncData { posts: Post[]; }

    export default Vue.extend({
        name: "HomePage",
        components: { Timeline },

        asyncData: async (context: Context): Promise<HomePageAsyncData> => ({ posts: await Post.GetAll(context) }),
        data: (): HomePageData => ({ posts: undefined }),

        head: { title: "Home" }
    });
</script>

<style lang="scss" scoped>
</style>
