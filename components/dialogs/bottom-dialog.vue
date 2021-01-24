<template>
    <div class="bottom-dialog overlay">
        <div class="dialog">
            <div class="handler"></div>
            <div class="content">
                <h4 class="title">
                    Condividi
                </h4>
                <hr class="divider" />
                <div class="row">
                    <div class="col-3">
                        <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                                      title="Matteo Bilotta su Facebook"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fas fa-copy"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                                      title="Matteo Bilotta su Facebook"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-facebook"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                                      title="Matteo Bilotta su Facebook"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-twitter"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                                      title="Matteo Bilotta su Facebook"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-whatsapp"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                                      title="Matteo Bilotta su Facebook"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-telegram"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                                      title="Matteo Bilotta su Facebook"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-facebook"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                                      title="Matteo Bilotta su Facebook"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-facebook"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor href="//www.facebook.com/matteo.bilotta"
                                      title="Matteo Bilotta su Facebook"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-facebook"></span>
                        </ActionAnchor>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "BottomDialog"
    });
</script>

<style lang="scss" scoped>
    .bottom-dialog
    {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 6;

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
            padding-top: 1em;
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
                & > .divider
                {
                    border: none;
                    border-top: 1px solid #CDCDCD;
                    margin: 1em 0px;
                }
                & > .row
                {
                    margin: 1em;
                }
            }
        }
    }
</style>
