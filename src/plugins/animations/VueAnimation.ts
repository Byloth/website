interface VueAnimationChange
{
    property: string;

    startValue: number;
    endValue: number;
    // unit?: string; -> px / em / rem

    // timing?: string; -> linear / ease / cubic
}

interface VueAnimationOptions
{
    startValue: number;
    endValue?: number;
    // direction?: string; -> vertical / horizontal

    changes: VueAnimationChange[];
}

export { VueAnimationOptions, VueAnimationChange };

export default class VueAnimation
{
    protected _enabled: boolean;

    protected _target: Element;
    protected _options: VueAnimationOptions;

    public constructor(target: Element, options: VueAnimationOptions)
    {
        this._enabled = true;

        this._target = target;
        this._options = options;
    }

    public get isEnabled(): boolean
    {
        return this._enabled;
    }

    public enable(): void
    {
        this._enabled = true;
    }
    public disable(): void
    {
        this._enabled = false;
    }
}
