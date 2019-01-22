<template>
    <div id="app">
        <master-detail>
            <template slot="master">
                <div id="nav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </div>
            </template>
            <router-view />
        </master-detail>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    import MasterDetail from "@/skeleton/MasterDetail.vue";

    @Component({ components: { "master-detail": MasterDetail } })
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
