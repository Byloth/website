/*
 * Based on: https://github.com/janpaepke/ScrollMagic
 */

import _Vue, { PluginObject } from "vue";

import VueAnimation, { VueAnimationOptions } from "@/plugins/animations/VueAnimation";

class VueAnimator implements PluginObject<object>
{
    protected _isUpdating: boolean;
    protected _requestId?: number;

    protected _animations: VueAnimation[];

    public constructor()
    {
        this._isUpdating = false;
        this._animations = [];
    }

    protected _frameCallback = (timestamp: number) => this._frameHandler(timestamp);
    protected _frameHandler(timestamp: number): void
    {
        if (this._isUpdating)
        {
            const screenWidth: number = window.innerWidth;
            const screenHeight: number = window.innerHeight;
            const scrollLeft: number = window.pageXOffset;
            const scrollTop: number = window.pageYOffset;

            for (const animation in this._animations.filter((a: VueAnimation) => a.isEnabled))
            {
                // if (scrollPosition <= <min_value>)
                // {
                //     // Inizio dell'animazione.
                // }
                // else if (scrollPosition >= <max_value>)
                // {
                //     // Fine dell'animazione.
                // }
                // else
                // {
                //     // Stato intermedio.
                // }
            }

            this._isUpdating = false;
        }
    }

    protected _eventListener = (evt: Event) => this._eventHandler(evt);
    protected _eventHandler(e: Event): void
    {
        if (this._isUpdating === false)
        {
            this._isUpdating = true;
            this._requestId = window.requestAnimationFrame(this._frameCallback);
        }
    }

    public animate(options: VueAnimationOptions): VueAnimation
    {
        const animation: VueAnimation = new VueAnimation(options);
        this._animations.push(animation);

        return animation;
    }

    // tslint:disable-next-line:variable-name
    public install(Vue: typeof _Vue, options?: object): void
    {
        this.init();

        Vue.prototype.$animate = this.animate;
    }

    public init(): void
    {
        window.addEventListener("resize", this._eventListener);
        window.addEventListener("scroll", this._eventListener);
    }
    public destroy(): void
    {
        window.removeEventListener("resize", this._eventListener);
        window.removeEventListener("scroll", this._eventListener);

        if (this._requestId)
        {
            window.cancelAnimationFrame(this._requestId);

            this._requestId = undefined;
        }
    }
}

export default new VueAnimator();
