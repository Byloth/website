<template>
    <div v-if="isShown"
         class="bottom-dialog fullscreen"
         :class="classes">
        <div class="fullscreen overlay" @click="close"></div>
        <div class="dialog">
            <div class="handler"></div>
            <div class="content">
                <h4 v-if="title" class="title">
                    {{ title }}
                </h4>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import TransientMixin from "@/mixins/transient";

    export default Vue.extend({
        name: "BottomDialog",
        mixins: [TransientMixin()],
        props: {
            title: {
                default: "",
                type: String
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .bottom-dialog
    {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 6;

        & > .overlay
        {
            backdrop-filter: blur(0px);
            opacity: 0;
            transition: backdrop-filter variables.$mdc-transition-duration variables.$mdc-transition-timing-function,
                        opacity variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
        }
        & > .dialog
        {
            align-items: center;
            background-color: #FFFFFF;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                        0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                        0px 9px 46px 8px rgba(0, 0, 0, 0.12);

            display: flex;
            height: max-content;
            flex-direction: column;
            max-width: 100%;
            padding-top: 1em;
            position: relative;
            transform: translateY(100%);
            transition: transform variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
            width: max-content;

            & > .handler
            {
                background-color: #CDCDCD;
                border-radius: 0.125em;
                height: 0.25em;
                position: absolute;
                width: 1.5em;
            }
            & > .content
            {
                text-align: center;

                & > .title
                {
                    margin: 1em;
                }
            }
        }

        &.open
        {
            & > .overlay
            {
                backdrop-filter: blur(2.5px);
                opacity: 1;
            }
            & > .dialog
            {
                transform: translateY(0%);
            }
        }

        @media print
        {
            display: none;
        }
    }
</style>
