<template>
    <main id="home-page">
        <Timeline :items="posts" />
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    import Timeline from "@/components/timelines/timeline.vue";

    import { Post } from "@/models";

    interface HomePageData { posts?: Post[]; }
    interface HomePageAsyncData { posts: Post[]; }

    export default Vue.extend({
        name: "HomePage",
        components: { Timeline },

        asyncData: async (): Promise<HomePageAsyncData> => ({ posts: await Post.GetAll(this) }),
        data: (): HomePageData => ({ }),

        head: { title: "Home" }
    });
</script>

<style lang="scss" scoped>
</style>
