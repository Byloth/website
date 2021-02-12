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
        & > .icon
        {
            align-items: center;
            background-color: variables.$primary-color;
            border: 1px solid darken($color: variables.$primary-color, $amount: 10);
            border-radius: 50%;
            color: #FFFFFF;
            display: flex;
            font-size: 1.2em;
            height: 40px;
            justify-content: center;
            overflow: hidden;
            width: 40px;

            @media print
            {
                background-color: #FFFFFF;
                border-color: #E5E5E5;
                color: #000000;
            }
        }
    }
</style>
