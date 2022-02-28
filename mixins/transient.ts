import Vue, { VueConstructor } from "vue";

import { TRANSITION_DURATION } from "@/core/constants";

// eslint-disable-next-line no-undef
type Timeout = NodeJS.Timeout;

export interface TransientMixinData
{
    _openingTimeout?: Timeout;
    _closingTimeout?: Timeout;

    isShown: boolean;
    isOpen: boolean;
}
export interface TransientMixinOptions
{
    openClass?: string;

    enterTransitionDuration?: number;
    exitTransitionDuration?: number;
}

const DEFAULT_OPTS: TransientMixinOptions = {
    openClass: "open",

    enterTransitionDuration: TRANSITION_DURATION,
    exitTransitionDuration: TRANSITION_DURATION
};

// export default (enterTransitionDuration?: number, exitTransitionDuration?: number): VueConstructor =>
export default (options: TransientMixinOptions = { }): VueConstructor =>
{
    options = { ...DEFAULT_OPTS, ...options };

    return Vue.extend({
        name: "TransientMixin",

        props: {
            value: {
                default: false,
                type: Boolean
            }
        },

        data: (): TransientMixinData => ({
            isShown: false,
            isOpen: false
        }),
        computed: {
            classes(): Record<string, boolean>
            {
                return { [options.openClass!]: this.isOpen };
            }
        },
        watch: {
            value: {
                immediate: true,

                handler: async function(value: boolean, oldValue: boolean): Promise<void>
                {
                    if (value !== oldValue)
                    {
                        if (value)
                        {
                            if (!this.isShown)
                            {
                                await this.open();
                            }
                        }
                        else if (this.isShown)
                        {
                            await this.close();
                        }
                    }
                }
            }
        },

        destroyed: function()
        {
            if (this._openingTimeout)
            {
                clearTimeout(this._openingTimeout);
                this._openingTimeout = undefined;
            }
            if (this._closingTimeout)
            {
                clearTimeout(this._closingTimeout);
                this._closingTimeout = undefined;
            }
        },

        methods: {
            open(): Promise<void>
            {
                return new Promise((resolve, reject) =>
                {
                    this.isShown = true;

                    requestAnimationFrame(() =>
                    {
                        this.isOpen = true;
                        this._openingTimeout = setTimeout(() =>
                        {
                            this._openingTimeout = undefined;

                            this.$emit("input", true);
                            this.$emit("show");

                            resolve();
                        }, options.enterTransitionDuration);
                    });
                });
            },
            close(): Promise<void>
            {
                return new Promise((resolve, reject) =>
                {
                    this.isOpen = false;

                    this._closingTimeout = setTimeout(() =>
                    {
                        this._closingTimeout = undefined;
                        this.isShown = false;

                        this.$emit("input", false);
                        this.$emit("dismiss");

                        resolve();
                    }, options.exitTransitionDuration);
                });
            }
        }
    });
};
