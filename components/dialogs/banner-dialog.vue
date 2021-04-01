<template>
    <div v-if="isShown"
         class="banner-dialog"
         :class="classes">
        <div class="content">
            <Avatar :icon="icon" />
            <div class="details">
                <slot></slot>
            </div>
        </div>
        <div class="actions">
            <Button v-for="action in actions"
                    :key="action.id"
                    @click="$emit(action.id, close, $event)">
                {{ action.text }}
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import Avatar from "@/components/avatar.vue";
    import Button from "@/components/mdc/button.vue";

    import TransientMixin from "@/mixins/transient";

    export default Vue.extend({
        name: "BannerDialog",
        components: { Avatar, Button },
        mixins: [TransientMixin()],
        props: {
            icon: {
                default: "exclamation",
                type: String
            },
            actions: {
                default: () => [],

                type: Array
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .banner-dialog
    {
        background-color: #FFFFFF;
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
                padding-right: 1em;
            }
            & > .details
            {
                flex: 1;
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
            transform: translateY(0%);
        }

        @media print
        {
            display: none;
        }
    }
</style>
