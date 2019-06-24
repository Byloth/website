interface VueAnimationProperty
{
    property: string;

    startValue: number;
    endValue: number;

    // ease?: string;
}

interface VueAnimationOptions
{
    start: number;
    end?: number;

    target?: Element;
    targets?: NodeListOf<Element>;

    properties: VueAnimationProperty[];
}

export { VueAnimationOptions, VueAnimationProperty };

export default class VueAnimation
{
    protected _enabled: boolean;

    public constructor(options: VueAnimationOptions)
    {
        this._enabled = true;
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
