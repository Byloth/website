<template>
    <div v-if="isShown"
         class="banner-dialog"
         :class="classes">
        <div class="content">
            <Avatar v-if="icon" :icon="icon" />
            <div class="details">
                <h2 v-if="title" class="title">
                    {{ title }}
                </h2>
                <slot></slot>
            </div>
        </div>
        <div class="actions">
            <ButtonItem v-if="dismissable"
                        :title="closeText"
                        @click="close">
                {{ closeText }}
            </ButtonItem>
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import Avatar from "@/components/avatar.vue";
    import ButtonItem from "@/components/mdc/button-item.vue";

    import TransientMixin from "@/mixins/transient";

    export default Vue.extend({
        name: "BannerDialog",
        components: { Avatar, ButtonItem },
        mixins: [TransientMixin()],
        props: {
            icon: {
                default: "",
                type: String
            },
            title: {
                default: "",
                type: String
            },

            dismissable: {
                default: false,
                type: Boolean
            },
            closeText: {
                default: "Chiudi",
                type: String
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .banner-dialog
    {
        background-color: rgba(#FFFFFF, 0.75);
        backdrop-filter: blur(20px) saturate(180%);
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        color: #000000;
        opacity: 0;
        padding: 1em;
        transform: translateY(-100%);
        transition: opacity variables.$mdc-transition-duration variables.$mdc-transition-timing-function,
                    transform variables.$mdc-transition-duration variables.$mdc-transition-timing-function;

        & > .content
        {
            align-items: center;
            color: #000000;
            border-top-left-radius: var(--mdc-shape-medium, 4px);
            border-top-right-radius: var(--mdc-shape-medium, 4px);
            display: flex;
            flex-direction: row;
            padding-bottom: 1em;

            & > .avatar
            {
                margin-right: 1em;
            }
            & > .details
            {
                flex: 1;

                & > .title
                {
                    font-size: 1.25em;
                    margin: 0px;
                    margin-bottom: 0.5em;
                }
            }
        }
        & > .actions
        {
            text-align: right;

            & > .mdc-button
            {
                margin-left: 0.5em;
            }
        }

        &.open
        {
            opacity: 1;
            transform: none;
        }

        @media print
        {
            display: none;
        }
    }
</style>
