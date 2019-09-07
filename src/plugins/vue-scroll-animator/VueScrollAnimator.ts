/*
 * Based on: https://github.com/janpaepke/ScrollMagic
 */

import _Vue, { PluginObject } from "vue";

import ScrollAnimation, { AnimationOptions } from "./base/ScrollAnimation";

class VueScrollAnimator implements PluginObject<object>
{
    protected _isUpdating: boolean;
    protected _requestId?: number;

    protected _animations: ScrollAnimation[];

    public constructor()
    {
        this._isUpdating = false;
        this._animations = [];
    }

    protected _requestCallback = (timestamp: number): void => {

        if (this._isUpdating === true)
        {
            for (const animation of this._animations.filter((a: ScrollAnimation) => a.isEnabled))
            {
                animation.update();
            }

            this._isUpdating = false;
        }
    }

    protected _eventListener = (evt: Event): void => {

        if (this._isUpdating === false)
        {
            this._isUpdating = true;
            this._requestId = window.requestAnimationFrame(this._requestCallback);
        }
    }

    public animate(options: AnimationOptions): ScrollAnimation
    {
        const animation = new ScrollAnimation(options);
        this._animations.push(animation);

        return animation;
    }

    // tslint:disable-next-line:variable-name
    public install(Vue: typeof _Vue, configuration?: object): void
    {
        const self = this;

        this.init();

        Vue.prototype.$scrollAnimate = function(options: AnimationOptions): ScrollAnimation
        {
            return self.animate.call(self, {target: this.$el, ...options});
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

        if (this._requestId !== undefined)
        {
            window.cancelAnimationFrame(this._requestId);

            this._requestId = undefined;
        }
    }
}

export default new VueScrollAnimator();
