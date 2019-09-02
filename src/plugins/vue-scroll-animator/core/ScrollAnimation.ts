import { PropertyOptions } from "./PropertyAnimation";

interface AnimationOptions
{
    startValue: number;
    endValue?: number;
    // direction?: string; -> vertical / horizontal

    changes: PropertyOptions[];
}

export { AnimationOptions };

export default class ScrollAnimation
{
    protected _enabled: boolean;

    protected _target: Element;
    protected _startValue: number;
    protected _endValue?: number;

    protected _options: AnimationOptions;

    protected _computeRate: (value: number) => number;

    public constructor(target: Element, options: AnimationOptions)
    {
        let difference: number;

        this._enabled = true;

        this._target = target;
        this._startValue = options.startValue;
        this._endValue = options.endValue;

        this._options = options;

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
            return (value - this._startValue) / difference;
        };
    }

    protected _compile()
    {
        ;
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

        let ratio: number;
        if (verticalScroll <= this._startValue)
        {
            ratio = 0;
        }
        else if (!this._endValue)
        {
            ratio = (verticalScroll - this._startValue);
        }
        else if (verticalScroll >= this._endValue)
        {
            ratio = 1;
        }
        else
        {
            ratio = this._computeRate(verticalScroll);
        }

        //
        // FIXME: Probabilmente, si può ottimizzare ancora...
        //
        for (const change of this._options.changes)
        {
            let difference: number = change.endValue - change.startValue;
            let newValue: number = change.startValue + (difference * ratio);

            //
            // TODO: Continuare da qui...
            //
        }
    }
}
