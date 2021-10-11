<template>
    <div v-if="isShown"
         class="fullscreen fullscreen-dialog"
         :class="classes">
        <div class="fullscreen overlay"></div>
        <div class="dialog">
            <TopAppBar>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                    <ActionButton class="mdc-top-app-bar__action-item"
                                  :title="cancelText"
                                  @click="$emit('cancel', close, $event)">
                        <span class="material-icons">
                            close
                        </span>
                    </ActionButton>
                    <h1 ref="title" class="mdc-top-app-bar__title">
                        {{ title }}
                    </h1>
                </section>
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                    <ButtonItem unelevated
                                :title="doneText"
                                @click="$emit('done', close, $event)">
                        {{ doneText }}
                    </ButtonItem>
                </section>
            </TopAppBar>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    import ActionButton from "@/components/mdc/actions/action-button.vue";
    import ButtonItem from "@/components/mdc/button-item.vue";
    import TopAppBar from "@/components/mdc/top-app-bar.vue";

    import TransientMixin from "@/mixins/transient";

    export default Vue.extend({
        name: "FullscreenDialog",
        components: { ActionButton, ButtonItem, TopAppBar },
        mixins: [TransientMixin()],
        props: {
            title: {
                required: true,
                type: String
            },
            cancelText: {
                default: "Annulla",
                type: String
            },
            doneText: {
                default: "Conferma",
                type: String
            }
        }
    });
</script>

<style lang="scss" scoped>
    @use "~@/assets/scss/variables";

    .fullscreen-dialog
    {
        backdrop-filter: none;
        background: none;
        display: flex;
        flex-direction: column;
        z-index: 6;

        & > .overlay
        {
            display: none;
        }
        & > .dialog
        {
            // SMELLS: Perché questo `dialog` viene visualizzato come `flex`?
            //         Che senso ha? Serve a qualcosa?
            //
            display: flex;
            flex: 1;
            flex-direction: column;
            position: relative;
            transform: translateY(100%);
            transition: transform variables.$mdc-transition-duration variables.$mdc-transition-timing-function;

            & > .mdc-top-app-bar
            {
                box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                            0px 1px 10px 0px rgba(0, 0, 0, 0.12);

                position: static;

                .mdc-top-app-bar__section > .mdc-button
                {
                    height: calc(100% + 8px);

                    &::v-deep > .mdc-button__ripple
                    {
                        border-radius: 0px;
                    }

                    @media (min-width: 600px)
                    {
                        height: calc(100% + 16px);
                    }
                }
            }
            & > .content
            {
                background-color: #FFFFFF;
                flex: 1;
                overflow-y: auto;
                padding: 1em;
                padding-bottom: 0px;
            }
        }

        &.open > .dialog
        {
            transform: none;
        }

        @media (min-width: variables.$md-size)
        {
            align-items: center;
            backdrop-filter: blur(0px);
            justify-content: center;
            opacity: 0;
            transition: backdrop-filter variables.$mdc-transition-duration variables.$mdc-transition-timing-function,
                        opacity variables.$mdc-transition-duration variables.$mdc-transition-timing-function;

            & > .overlay
            {
                display: block;
            }
            & > .dialog
            {
                border-radius: 4px;
                box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
                            0px 24px 38px 3px rgba(0, 0, 0, 0.14),
                            0px 9px 46px 8px rgba(0, 0, 0, 0.12);

                flex: unset;
                height: max-content;
                overflow: hidden;
                transform: translateY(25%);
                width: max-content;
            }

            &.open
            {
                backdrop-filter: blur(2.5px);
                opacity: 1;
            }
        }
        @media print
        {
            display: none;
        }
    }
</style>
