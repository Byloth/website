import BaseAnimator, { BaseAnimatorOptions } from "./BaseAnimator";

interface CssPropertyAnimatorOptions extends BaseAnimatorOptions
{
    name: string;
    unit?: string;

    startValue: number;
    endValue?: number;

    // direction?: string; -> normal / inverse
    // speed?: number; -> 1x / 2x / 0.5x / ...
    // timing?: string; -> linear / ease / cubic

    computeValue?: (ratioValue: number) => number;
}

export { CssPropertyAnimatorOptions };

export default class CssPropertyAnimator extends BaseAnimator
{
    public static DEFAULT_OPTIONS = {

        unit: "px"
    };

    protected _name: string;
    protected _unit: string;

    protected _startValue: number;
    protected _endValue?: number;

    protected _computeValue!: (ratioValue: number) => number;

    public constructor(options: CssPropertyAnimatorOptions)
    {
        options = { ...CssPropertyAnimator.DEFAULT_OPTIONS, ...options};

        super(options);

        this._name = options.name;
        this._unit = options.unit!;

        this._startValue = options.startValue;
        this._endValue = options.endValue;

        this._compile(options);
    }

    protected _compile(options: CssPropertyAnimatorOptions): void
    {
        if (options.computeValue !== undefined)
        {
            this._computeValue = options.computeValue;
        }
        else if (this._endValue === undefined)
        {
            const startValue = this._startValue;

            this._computeValue = (ratioValue: number): number => (startValue + ratioValue);
        }
        else if (this._startValue <= this._endValue)
        {
            const startValue = this._startValue;
            const difference = this._endValue - this._startValue;

            this._computeValue = (ratioValue: number): number => ((difference * ratioValue) + startValue);
        }
        else
        {
            const startValue = this._endValue;
            const difference = this._startValue - this._endValue;

            this._computeValue = (ratioValue: number): number => ((difference * (1 - ratioValue)) + startValue);
        }
    }

    protected _update(ratioValue: number): void
    {
        const propertyValue = this._computeValue(ratioValue);

        this.setCssPropertyValue(`${propertyValue}${this._unit}`);
    }

    public getCssPropertyValue(): string
    {
        return this._target.style.getPropertyValue(this._name);
    }
    public setCssPropertyValue(value: string): void
    {
        this._target.style.setProperty(this._name, value);
    }
}
