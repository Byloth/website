<template>
    <main id="timeline-page">
        <Timeline :columns="3">
            <TimelineItem>
                First
                <p>Lorem ipsum dolor sit amet.</p>
            </TimelineItem>
            <TimelineItem>
                Second
            </TimelineItem>
            <TimelineItem>
                Third
                <p>Lorem ipsum dolor sit amet.</p>
            </TimelineItem>
            <TimelineItem>
                Fourth
            </TimelineItem>
            <TimelineItem>
                Fifth
            </TimelineItem>
            <TimelineItem>
                Sixth
            </TimelineItem>
            <TimelineItem>
                Seventh
                <p>Lorem ipsum dolor sit amet.</p>
            </TimelineItem>
            <TimelineItem>
                Eighth
            </TimelineItem>
            <TimelineItem>
                Ninth
                <p>Lorem ipsum dolor sit amet.</p>
            </TimelineItem>
            <TimelineItem>
                Tenth
                <p>Lorem ipsum dolor sit amet.</p>
            </TimelineItem>
        </Timeline>
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "TimelinePage",

        head: { title: "Timeline" }
    });
</script>

<style lang="scss" scoped>
    #timeline-page
    {
        text-align: center;
    }
</style>
