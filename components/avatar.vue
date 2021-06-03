<template>
    <div class="avatar">
        <div class="icon">
            <span class="fas" :class="`fa-${icon}`"></span>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "Avatar",
        props: {
            icon: {
                default: "user",
                type: String
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .avatar
    {
        background-color: variables.$primary-color;
        border: 1px solid darken($color: variables.$primary-color, $amount: 10);
        border-radius: 50%;
        overflow: hidden;

        & > .icon
        {
            align-items: center;
            border-radius: 50%;
            color: #FFFFFF;
            display: flex;
            font-size: 1.2em;
            height: calc(1.5em + 12.5px);
            justify-content: center;
            width: calc(1.5em + 12.5px);

            @media print
            {
                background-color: #FFFFFF;
                border-color: #E5E5E5;
                color: #000000;
            }
        }
    }
</style>
