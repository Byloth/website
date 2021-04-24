<template>
    <main id="home-page">
        <Timeline :items="posts" />
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    import Timeline from "@/components/timelines/timeline.vue";

    import { Post } from "@/models";

    interface HomePageData { posts: Post[]; }

    export default Vue.extend({
        name: "HomePage",
        components: { Timeline },

        data: (): HomePageData => ({ posts: [] }),

        head: { title: "Home" },

        created: async function(): Promise<void>
        {
            this.posts = await Post.GetAll(this);
            this.posts.forEach((post) => { post.body = post.hasExcerpt ? post.excerpt : post.body; });
        }
    });
</script>

<style lang="scss" scoped>
</style>
