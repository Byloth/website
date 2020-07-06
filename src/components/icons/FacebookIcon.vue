<template>
    <span class="facebook-icon">
        <span class="background" />
        <span class="fab fa-facebook" />
    </span>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";

    @Component({ name: "FacebookIcon" })
    export default class FacebookIcon extends Vue { }
</script>

<style lang="scss" scoped>
    .facebook-icon
    {
        position: relative;

        & > .background
        {
            // background-color: #FFFFFF;
            background-color: #FF0000;
            border-radius: 50%;
            position: absolute;

            bottom: 7.5%;
            left: 2%;
            right: 2%;
            top: 6.5%;
        }
        & > .fa-facebook
        {
            color: #4267B2;
            position: relative;
            text-shadow: none;
        }
    }
</style>
