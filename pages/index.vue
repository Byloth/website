<template>
    <main id="home-page">
        <Timeline :items="posts" />
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    import { Post } from "@/models";

    interface HomePageData { posts: Post[]; }

    export default Vue.extend({
        name: "HomePage",

        data: (): HomePageData => ({ posts: [] }),

        head: { title: "Home" },

        created: async function(): Promise<void>
        {
            this.posts = await Post.GetAll(this);
        }
    });
</script>

<style lang="scss" scoped>
</style>
