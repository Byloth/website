interface VueAnimationChange
{
    property: string;

    startValue: number;
    endValue?: number;
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
    protected _startValue: number;
    protected _endValue?: number;

    protected _options: VueAnimationOptions;

    protected _computeRate: (value: number) => number;

    public constructor(target: Element, options: VueAnimationOptions)
    {
        this._enabled = true;

        this._target = target;
        this._startValue = options.startValue;
        this._endValue = options.endValue;

        let difference: number;
        if (this._endValue)
        {
            difference = this._endValue - this._startValue;
        }
        else
        {
            difference = 1;
        }

        this._computeRate = function(value: number)
        {
            return (value - this._startValue) / (difference);
        };

        this._options = options;
    }

    protected _getHorizontalScroll(element?: Element)
    {
        if (element)
        {
            return element.scrollLeft;
        }

        return window.pageXOffset;
    }
    protected _getVerticalScroll(element?: Element)
    {
        if (element)
        {
            return element.scrollTop;
        }

        return window.pageYOffset;
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

    public update(): void
    {
        // const screenWidth: number = window.innerWidth;
        // const screenHeight: number = window.innerHeight;
        // const horizontalScroll: number = this._getHorizontalScroll();
        const verticalScroll: number = this._getVerticalScroll();

        let rate: number;
        if (verticalScroll <= this._startValue)
        {
            rate = 0;
        }
        else if (!this._endValue)
        {
            rate = 1;
        }
        else if (verticalScroll >= this._endValue)
        {
            rate = 1;
        }
        else
        {
            rate = this._computeRate(verticalScroll);
        }

        //
        // TODO: Continuare da qui...
        //
    }
}
