<template>
    <svg xmlns="http://www.w3.org/2000/svg"
         version="1.1"
         class="vue-icon"
         viewBox="0 0 262 262">
        <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
            <g transform="translate(178 221)">
                <path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                      fill="#41B883" />
            </g>
            <g transform="translate(178 221)">
                <path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                      fill="#34495E" />
            </g>
        </g>
    </svg>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({ name: "VueIcon" });
</script>

<style lang="scss" scoped>
    @keyframes appear
    {
        0% { opacity: 0; }
    }

    .vue-icon
    {
        animation: 1s appear;
        margin: auto;
    }
</style>
