<template>
    <div id="master-detail">
        <nav-bar />
        <div id="detail">
            <slot name="master" />
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import NavigationBar from "@/skeleton/NavigationBar.vue";

    @Component({ components: { "nav-bar": NavigationBar } })
    export default class MasterDetail extends Vue { }
</script>

<style lang="scss">
    @import "@material/ripple/mdc-ripple";

    body
    {
        margin: 0px;
    }

    #app
    {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #detail
    {
        padding: 72px 8px 8px 8px;
    }
</style>
