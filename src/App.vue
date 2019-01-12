<template>
    <div id="app">
        <nav-bar title="Byloth's Website" />
        <div id="detail">
            <div id="nav">
                <router-link to="/">Home</router-link> |
                <router-link to="/about">About</router-link>
            </div>
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import TopAppBar from "@/components/TopAppBar.vue";

    @Component({ components: { "nav-bar": TopAppBar } })
    export default class App extends Vue { }
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
    #nav
    {
        padding: 30px;

        a
        {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active
            {
                color: #42b983;
            }
        }
    }
</style>
