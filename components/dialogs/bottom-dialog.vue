<template>
    <div class="bottom-dialog overlay">
        <div class="dialog">
            <div class="handler"></div>
            <div class="content">
                <h4 class="title">
                    Condividi
                </h4>
                <TextField id="share-dialog-field-url"
                           ref="text-field"
                           leading-icon="link"
                           readonly
                           :value="url" />
                <hr class="divider" />
                <div class="row">
                    <div class="col-3">
                        <ActionButton title="Copia negli Appunti" @click="onCopyClick">
                            <span class="fas fa-copy"></span>
                        </ActionButton>
                    </div>
                    <div class="col-3">
                        <ActionAnchor :href="`mailto:?subject=${encodedTitle}&body=${encodedTextUrl}`"
                                      title="Invia tramite e-mail"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fas fa-envelope"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor :href="`//wa.me/?text=${encodedTextUrl}`"
                                      title="Invia tramite WhatsApp"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-whatsapp"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionAnchor :href="`//t.me/share/?url=${url}&text=%0A${encodedText}`"
                                      title="Invia tramite Telegram"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-telegram"></span>
                        </ActionAnchor>
                    </div>
                    <div class="col-3">
                        <ActionButton title="Condividi su Facebook" @click="shareOnFacebook">
                            <span class="fab fa-facebook"></span>
                        </ActionButton>
                    </div>
                    <div class="col-3">
                        <ActionButton title="Condividi su LinkedIn" @click="shareOnLinkedIn">
                            <span class="fab fa-linkedin"></span>
                        </ActionButton>
                    </div>
                    <div class="col-3">
                        <ActionButton title="Condividi su Pinterest" @click="shareOnPinterest">
                            <span class="fab fa-pinterest"></span>
                        </ActionButton>
                    </div>
                    <div class="col-3">
                        <ActionAnchor :href="`//twitter.com/intent/tweet?url=${url}&text=${encodedText}%0A%0A`"
                                      title="Condividi su Twitter"
                                      rel="nofollow noopener noreferrer"
                                      target="_blank">
                            <span class="fab fa-twitter"></span>
                        </ActionAnchor>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    interface BottomDialogData
    {
        url: string;
        title: string;
        description: string;
    }

    export default Vue.extend({
        name: "BottomDialog",

        data: (): BottomDialogData => ({
            url: "",
            title: "",
            description: ""
        }),

        computed: {
            text(): string
            {
                return `Hey! Dai un'occhiata a "${this.title}":\n${this.description}`;
            },
            textUrl(): string
            {
                return `${this.text}\n\n${this.url}`;
            },

            encodedTitle(): string
            {
                return encodeURIComponent(this.title);
            },
            encodedDescription(): string
            {
                return encodeURIComponent(this.description);
            },
            encodedText(): string
            {
                return encodeURIComponent(this.text);
            },
            encodedTextUrl(): string
            {
                return encodeURIComponent(this.textUrl);
            }
        },

        mounted: function()
        {
            const _getMeta = (property: string, name: string): string =>
            {
                return (document.head.querySelector(`[${property}=${name}]`) as HTMLMetaElement)?.content || "";
            };

            this.url = window.location.href;
            this.title = document.title;
            this.description = _getMeta("name", "description");
        },

        methods: {
            _openPopup(url: string, target?: string, features?: string, replace?: boolean): Promise<void>
            {
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => any, reject: (reason?: any) => void) =>
                {
                    const popup = window.open(url, target, features, replace);

                    if (popup)
                    {
                        const interval = setInterval(() =>
                        {
                            if (popup!.closed)
                            {
                                clearInterval(interval);
                                resolve();
                            }
                        }, 500);
                    }
                    else
                    {
                        reject(new Error("Sharing popup didn't open properly. Maybe due to some popup blocker?"));
                    }
                });
            },

            async onCopyClick(): Promise<void>
            {
                const urlField: HTMLInputElement = (this.$refs["text-field"] as Vue).$refs.input as HTMLInputElement;

                urlField.select();
                urlField.setSelectionRange(0, 1024);

                if (navigator.clipboard)
                {
                    await navigator.clipboard.writeText(this.textUrl);
                }
                else
                {
                    document.execCommand("copy");
                }
            },

            shareOnFacebook(): Promise<void>
            {
                const url = `https://www.facebook.com/sharer.php?display=popup&u=${this.url}`;
                const options = "toolbar=0,status=0,resizable=1,width=626,height=436";

                return this._openPopup(url, "sharer", options);
            },
            shareOnLinkedIn(): Promise<void>
            {
                const url = `https://www.linkedin.com/sharing/share-offsite/?url=${this.url}`;
                const options = "toolbar=0,status=0,resizable=1,width=500,height=400";

                return this._openPopup(url, "sharer", options);
            },
            shareOnPinterest(): Promise<void>
            {
                const url = `https://www.pinterest.com/pin/create/button/?url=${this.url}`;
                const options = "toolbar=0,status=0,resizable=1,width=800,height=900";

                return this._openPopup(url, "sharer", options);
            }
        }
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
                & > .text-field
                {
                    margin: 0px;
                    padding: 0px 1em;
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
