/*
 * Based on: https://github.com/janpaepke/ScrollMagic
 */

import _Vue, { PluginObject } from "vue";

class Updater implements PluginObject<object>
{
    protected _isUpdating: boolean;
    protected _requestId?: number;

    public constructor()
    {
        this._isUpdating = false;
    }

    protected _frameCallback = (timestamp: number) => this._frameHandler(timestamp);
    protected _frameHandler(timestamp: number): void
    {
        if (this._isUpdating)
        {
            //
            // TODO: Do something!
            //

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

    // tslint:disable-next-line:variable-name
    public install(Vue: typeof _Vue, options?: object): void
    {
        Vue.prototype.$myProperty = "Ciao, come va?";
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

const updater = new Updater();
updater.init();

export default updater;
