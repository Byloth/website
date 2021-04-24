<template>
    <main id="home-page">
        <Timeline>
            <TimelineItem :item="{ id: 0,
                                   icon: 'bookmark',
                                   title: 'First port',
                                   subtitle: 'This is the first post! 🙃',
                                   thumbnail: {
                                       source: '/img/fulfilled-brioche.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-01T00:00:00') }" />
            <TimelineItem :item="{ id: 1,
                                   icon: 'bookmark',
                                   title: 'Second port',
                                   subtitle: 'This is the second post! 🙃',
                                   thumbnail: {
                                       source: '/img/git-from-zero-to-hero.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-01T00:00:00') }" />
            <TimelineItem :item="{ id: 2,
                                   icon: 'bookmark',
                                   title: 'Third port',
                                   subtitle: 'This is the third post! 🙃',
                                   thumbnail: {
                                       source: '/img/three-years-since-japan.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-01T00:00:00') }" />
            <TimelineItem :item="{ id: 3,
                                   icon: 'bookmark',
                                   title: 'First port',
                                   subtitle: 'This is the first post! 🙃',
                                   thumbnail: {
                                       source: '/img/fulfilled-brioche.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-03T00:00:00') }" />
            <TimelineItem :item="{ id: 4,
                                   icon: 'bookmark',
                                   title: 'Second port',
                                   subtitle: 'This is the second post! 🙃',
                                   thumbnail: {
                                       source: '/img/git-from-zero-to-hero.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-02T00:00:00') }" />
            <TimelineItem :item="{ id: 5,
                                   icon: 'bookmark',
                                   title: 'Third port',
                                   subtitle: 'This is the third post! 🙃',
                                   thumbnail: {
                                       source: '/img/three-years-since-japan.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-01T00:00:00') }" />
            <TimelineItem :item="{ id: 6,
                                   icon: 'bookmark',
                                   title: 'First port',
                                   subtitle: 'This is the first post! 🙃',
                                   thumbnail: {
                                       source: '/img/fulfilled-brioche.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-01T00:00:00') }" />
            <TimelineItem :item="{ id: 7,
                                   icon: 'bookmark',
                                   title: 'Second port',
                                   subtitle: 'This is the second post! 🙃',
                                   thumbnail: {
                                       source: '/img/git-from-zero-to-hero.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-01T00:00:00') }" />
            <TimelineItem :item="{ id: 8,
                                   icon: 'bookmark',
                                   title: 'Third port',
                                   subtitle: 'This is the third post! 🙃',
                                   thumbnail: {
                                       source: '/img/three-years-since-japan.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-01T00:00:00') }" />
            <TimelineItem :item="{ id: 9,
                                   icon: 'bookmark',
                                   title: 'First port',
                                   subtitle: 'This is the first post! 🙃',
                                   thumbnail: {
                                       source: '/img/fulfilled-brioche.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-03T00:00:00') }" />
            <TimelineItem :item="{ id: 10,
                                   icon: 'bookmark',
                                   title: 'Second port',
                                   subtitle: 'This is the second post! 🙃',
                                   thumbnail: {
                                       source: '/img/git-from-zero-to-hero.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-02T00:00:00') }" />
            <TimelineItem :item="{ id: 11,
                                   icon: 'bookmark',
                                   title: 'Third port',
                                   subtitle: 'This is the third post! 🙃',
                                   thumbnail: {
                                       source: '/img/three-years-since-japan.webp',
                                       description: 'A random image'
                                   },
                                   hasBody: false,
                                   author: 'John Doe',
                                   date: new Date('1970-01-01T00:00:00') }" />
        </Timeline>
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    import Timeline from "@/components/tmp/timeline.vue";
    import TimelineItem from "@/components/tmp/timeline-item.vue";

    import { Post } from "@/models";

    interface HomePageData { posts: Post[]; }

    export default Vue.extend({
        name: "HomePage",
        components: { Timeline, TimelineItem },

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
