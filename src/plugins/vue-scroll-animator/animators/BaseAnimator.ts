interface BaseAnimatorOptions
{
    target?: HTMLElement;
}

export { BaseAnimatorOptions };

export default abstract class BaseAnimator
{
    protected _lastRatioValue?: number;

    protected _target: HTMLElement;

    public constructor(options: BaseAnimatorOptions)
    {
        this._target = options.target!;
    }

    protected abstract _update(ratioValue: number): void;

    public update(ratioValue: number): void
    {
        if (ratioValue !== this._lastRatioValue)
        {
            this._update(ratioValue);

            this._lastRatioValue = ratioValue;
        }
    }
}
