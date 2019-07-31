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
            for (const animation of this._animations.filter((a: VueAnimation) => a.isEnabled))
            {
                animation.update();
            }

            this._isUpdating = false;
        }
    }

    protected _eventListener = (evt: Event) => this._eventHandler(evt);
    protected _eventHandler(evt: Event): void
    {
        if (!this._isUpdating)
        {
            this._isUpdating = true;
            this._requestId = window.requestAnimationFrame(this._frameCallback);
        }
    }

    public animate(target: _Vue, options: VueAnimationOptions): VueAnimation
    {
        const animation: VueAnimation = new VueAnimation(target.$el, options);
        this._animations.push(animation);

        return animation;
    }

    // tslint:disable-next-line:variable-name
    public install(Vue: typeof _Vue, configuration?: object): void
    {
        const self: VueAnimator = this;

        this.init();

        Vue.prototype.$animate = function(options: VueAnimationOptions): VueAnimation
        {
            return self.animate.call(self, this, options);
        };
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
