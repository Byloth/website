<template>
    <BottomDialog v-model="isOpen"
                  class="share-dialog"
                  title="Condividi">
        <TextField ref="text-field"
                   class="share-dialog-field-url"
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
                <ActionAnchor :href="`mailto:?subject=${encode(title)}&body=${encode(text + `\n\n` + url)}`"
                              title="Invia tramite e-mail"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fas fa-envelope"></span>
                </ActionAnchor>
            </div>
            <div class="col-3">
                <ActionAnchor :href="`//wa.me/?text=${encode(text + `\n\n` + url)}`"
                              title="Invia tramite WhatsApp"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-whatsapp"></span>
                </ActionAnchor>
            </div>
            <div class="col-3">
                <ActionAnchor :href="`//t.me/share/?url=${encode(url)}&text=${encode('\n' + text)}`"
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
                <ActionAnchor :href="`//twitter.com/intent/tweet?url=${encode(url)}&text=${encode(text + '\n\n')}`"
                              title="Condividi su Twitter"
                              rel="nofollow noopener noreferrer"
                              target="_blank">
                    <span class="fab fa-twitter"></span>
                </ActionAnchor>
            </div>
        </div>
    </BottomDialog>
</template>

<script lang="ts">
    import Vue from "vue";
    import { ActionPayload } from "vuex";

    import { RootState } from "@/core/types";

    import ActionAnchor from "@/components/mdc/actions/action-anchor.vue";
    import ActionButton from "@/components/mdc/actions/action-button.vue";
    import BottomDialog from "@/components/dialogs/bottom-dialog.vue";
    import TextField from "@/components/mdc/fields/text-field.vue";

    interface ShareDialogData
    {
        isOpen: boolean;

        url: string;
        title: string;
        description: string;

        stopListening?: () => void;
    }

    export default Vue.extend({
        name: "ShareDialog",
        components: { ActionAnchor, ActionButton, BottomDialog, TextField },

        data: (): ShareDialogData => ({
            isOpen: false,

            url: "",
            title: "",
            description: ""
        }),

        computed: {
            text(): string
            {
                return `Hey! Dai un'occhiata a "${this.title}":\n${this.description}`;
            }
        },
        watch: {
            isOpen(value: boolean, oldValue: boolean): void
            {
                this.$emit("open", value);
            }
        },

        mounted: function(): void
        {
            this.stopListening = this.$store.subscribeAction(this.onShareAction);
        },
        destroyed: function(): void
        {
            this.stopListening!();
        },

        methods: {
            encode(text: string): string
            {
                return encodeURIComponent(text);
            },

            onShareAction(action: ActionPayload, state: RootState): void
            {
                if (action.type === "share")
                {
                    const _getMeta = (property: string, name: string): string =>
                    {
                        return (document.head.querySelector(`[${property}=${name}]`) as HTMLMetaElement)?.content || "";
                    };

                    this.url = window.location.href;
                    this.title = document.title;
                    this.description = _getMeta("name", "description");

                    if (navigator.share)
                    {
                        navigator.share({
                            title: this.title,
                            text: this.description,
                            url: this.url
                        });
                    }
                    else
                    {
                        this.isOpen = true;
                    }
                }
            },

            _openPopup(url: string, target?: string, features?: string, replace?: boolean): Promise<void>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) =>
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
                    await navigator.clipboard.writeText(`${this.text}\n\n${this.url}`);
                }
                else
                {
                    document.execCommand("copy");
                }
            },

            shareOnFacebook(): Promise<void>
            {
                const encodedUrl = this.encode(this.url);
                const popupUrl = `https://www.facebook.com/sharer.php?display=popup&u=${encodedUrl}`;
                const options = "toolbar=0,status=0,resizable=1,width=626,height=436";

                return this._openPopup(popupUrl, "sharer", options);
            },
            shareOnLinkedIn(): Promise<void>
            {
                const encodedUrl = this.encode(this.url);
                const popupUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                const options = "toolbar=0,status=0,resizable=1,width=500,height=400";

                return this._openPopup(popupUrl, "sharer", options);
            },
            shareOnPinterest(): Promise<void>
            {
                const encodedUrl = this.encode(this.url);
                const popupUrl = `https://www.pinterest.com/pin/create/button/?url=${encodedUrl}`;
                const options = "toolbar=0,status=0,resizable=1,width=800,height=900";

                return this._openPopup(popupUrl, "sharer", options);
            }
        }
    });
</script>

<style lang="scss" scoped>
    .share-dialog
    {
        .share-dialog-field-url
        {
            margin: 0px;
            padding: 0px 1em;
        }
        .divider
        {
            border: none;
            border-top: 1px solid #CDCDCD;
            margin: 1em 0px;
        }
        .row
        {
            margin: 1em;
        }
    }
</style>
