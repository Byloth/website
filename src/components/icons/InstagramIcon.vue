<template>
    <span class="instagram-icon">
        <span class="background" />
        <span class="fab fa-instagram" />
    </span>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "InstagramIcon" })
    export default class InstagramIcon extends Vue { }
</script>

<style lang="scss" scoped>
    .instagram-icon
    {
        position: relative;

        & > .background
        {
            // background: linear-gradient(45deg, #FEDA77, #F58529, #DD2A7B, #8134AF, #515BD4);
            background-color: #FF0000;
            border-radius: 0%;
            position: absolute;

            bottom: 7.5%;
            left: 2%;
            right: 2%;
            top: 6.5%;
        }
        & > .fa-instagram
        {
            color: #FFFFFF;
            // font-size: 0.95em;
            position: relative;
            text-shadow: none;
            transform: translateY(33.333%);
            vertical-align: super;
        }
    }
</style>
