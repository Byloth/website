import Vue from "vue";

import { TRANSITION_DURATION } from "@/core/constants";

// eslint-disable-next-line no-undef
type Timeout = NodeJS.Timeout | number;

export interface TransientMixinData
{
    _openingTimeout?: Timeout;
    _closingTimeout?: Timeout;

    isShown: boolean;
    isOpen: boolean;
}

export default (enterTransitionDuration?: number, exitTransitionDuration?: number) =>
{
    if (enterTransitionDuration === undefined)
    {
        enterTransitionDuration = TRANSITION_DURATION;
        exitTransitionDuration = TRANSITION_DURATION;
    }
    else if (exitTransitionDuration === undefined)
    {
        exitTransitionDuration = enterTransitionDuration;
    }

    return Vue.extend({
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
                return { "open": this.isOpen };
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
                clearTimeout(this._openingTimeout as number);
            }
            if (this._closingTimeout)
            {
                clearTimeout(this._closingTimeout as number);
            }
        },

        methods: {
            open(): Promise<void>
            {
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => any, reject: (reason?: any) => void) =>
                {
                    this.isShown = true;

                    this._openingTimeout = setTimeout(() =>
                    {
                        this.isOpen = true;
                        this._openingTimeout = setTimeout(() =>
                        {
                            this.$emit("input", true);

                            resolve();
                        }, enterTransitionDuration);
                    }, 0);
                });
            },
            close(): Promise<void>
            {
                return new Promise<void>((resolve: (value: void | PromiseLike<void>) => any, reject: (reason?: any) => void) =>
                {
                    this.isOpen = false;
                    this._closingTimeout = setTimeout(() =>
                    {
                        this.isShown = false;
                        this.$emit("input", false);

                        resolve();
                    }, exitTransitionDuration);
                });
            }
        }
    });
};
