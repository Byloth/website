<template>
    <div class="fullscreen-dialog" :class="classes">
        <TopAppBar>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <ActionButton class="mdc-top-app-bar__action-item"
                              :title="cancelTitle"
                              @click="$emit('input', false)">
                    close
                </ActionButton>
                <h1 ref="title" class="mdc-top-app-bar__title">
                    {{ title }}
                </h1>
            </section>
            <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                <ActionButton class="mdc-top-app-bar__action-item"
                              :title="doneTitle"
                              @click="$emit('input', false)">
                    done
                </ActionButton>
            </section>
        </TopAppBar>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "FullscreenDialog",
        props: {
            cancelTitle: {
                default: "Annulla",
                type: String
            },
            doneTitle: {
                default: "Conferma",
                type: String
            },
            title: {
                default: "",
                type: String
            },
            value: {
                default: false,
                type: Boolean
            }
        },
        computed: {
            classes(): Record<string, boolean>
            {
                return { "open": this.value };
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .fullscreen-dialog
    {
        bottom: 0px;
        display: flex;
        flex-direction: column;
        left: 0px;
        position: fixed;
        right: 0px;
        top: 0px;
        transform: translateY(100%);
        transition: transform variables.$mdc-transition-duration variables.$mdc-transition-timing-function;
        z-index: 6;

        & > .mdc-top-app-bar
        {
            background-color: variables.$primary-color;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 10px 0px rgba(0, 0, 0, 0.12);

            position: static;
        }
        & > .content
        {
            background-color: variables.$chrome-scrollbar-color;
            backdrop-filter: blur(20px) saturate(180%);
            flex: 1;
            padding: 0.5em;
        }

        &.open
        {
            transform: translateY(0px);
        }

        @media print
        {
            display: none;
        }
    }
</style>
