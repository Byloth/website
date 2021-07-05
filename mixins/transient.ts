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

interface TransientMixinOptions
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
            value(value: boolean, oldValue: boolean): void
            {
                if (value !== oldValue)
                {
                    if (value)
                    {
                        this.open();
                    }
                    else
                    {
                        this.close();
                    }
                }
            }
        },

        destroyed: function()
        {
            if (this._openingTimeout)
            {
                clearTimeout(this._openingTimeout);
            }
            if (this._closingTimeout)
            {
                clearTimeout(this._closingTimeout);
            }
        },

        methods: {
            open(): Promise<void>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) =>
                {
                    this.isShown = true;

                    requestAnimationFrame(() =>
                    {
                        this.isOpen = true;
                        this._openingTimeout = setTimeout(() =>
                        {
                            this.$emit("input", true);

                            resolve();
                        }, options.enterTransitionDuration);
                    });
                });
            },
            close(): Promise<void>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => void, reject: (reason?: any) => void) =>
                {
                    this.isOpen = false;
                    this._closingTimeout = setTimeout(() =>
                    {
                        // this.isShown = false;
                        // this.$emit("input", false);

                        resolve();
                    }, options.exitTransitionDuration);
                });
            }
        }
    });
};
