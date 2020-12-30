<template>
    <main id="home-page">
        <Timeline :items="[{'title': 'First', 'subtitle': 'Lorem ipsum dolor sit amet.'},
                           {'title': 'Second'},
                           {'title': 'Third', 'subtitle': 'Lorem ipsum dolor sit amet.'},
                           {'title': 'Fourth'},
                           {'title': 'Fifth'},
                           {'title': 'Sixth'},
                           {'title': 'Seventh', 'subtitle': 'Lorem ipsum dolor sit amet.'},
                           {'title': 'Eighth'},
                           {'title': 'Ninth', 'subtitle': 'Lorem ipsum dolor sit amet.'},
                           {'title': 'Tenth', 'subtitle': 'Lorem ipsum dolor sit amet.'}]" />
    </main>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "HomePage",

        head: { title: "Home" }
    });
</script>

<style lang="scss" scoped>
</style>
