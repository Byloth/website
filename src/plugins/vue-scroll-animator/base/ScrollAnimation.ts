import BaseAnimator from "../animators/BaseAnimator";
import ClassAnimator, { ClassAnimatorOptions } from "../animators/ClassAnimator";
import CssPropertyAnimator, { CssPropertyAnimatorOptions } from "../animators/CssPropertyAnimator";

interface AnimationOptions
{
    target?: HTMLElement;

    startValue: number;
    endValue?: number;
    // direction?: string; -> vertical / horizontal

    classes?: ClassAnimatorOptions[];
    cssProperties?: CssPropertyAnimatorOptions[];

    computeRatio?: (scrollValue: number) => number;
}

export { AnimationOptions };

export default class ScrollAnimation
{
    public static DEFAULT_OPTIONS = {

        classes: [],
        properties: []
    };

    protected _enabled: boolean;

    protected _target?: HTMLElement;
    protected _startValue: number;
    protected _endValue?: number;

    protected _animators!: BaseAnimator[];

    protected _computeRatio!: (scrollValue: number) => number;

    public constructor(options: AnimationOptions)
    {
        options = { ...ScrollAnimation.DEFAULT_OPTIONS, ...options};

        this._enabled = true;

        this._target = options.target;
        this._startValue = options.startValue;
        this._endValue = options.endValue;

        this._init(options);
        this._compile(options);
    }

    protected _init(options: AnimationOptions): void
    {
        this._animators = [];

        for (const classOptions of options.classes!)
        {
            this._animators.push(new ClassAnimator({target: options.target, ...classOptions}));
        }

        for (const cssPropertyOptions of options.cssProperties!)
        {
            this._animators.push(new CssPropertyAnimator({target: options.target, ...cssPropertyOptions}));
        }
    }
    protected _compile(options: AnimationOptions): void
    {
        if (options.computeRatio !== undefined)
        {
            this._computeRatio = options.computeRatio;
        }
        else if (this._endValue === undefined)
        {
            const startValue = this._startValue;

            this._computeRatio = (scrollValue: number): number =>
            {
                if (scrollValue <= startValue)
                {
                    return 0;
                }
                else
                {
                    return (scrollValue - startValue);
                }
            };
        }
        else if (this._startValue > this._endValue)
        {
            throw new Error("'startValue' option must be less than or equal to 'endValue'.");
        }
        else
        {
            const startValue = this._startValue;
            const endValue = this._endValue;
            const difference = this._endValue - this._startValue;

            this._computeRatio = (scrollValue: number): number =>
            {
                if (scrollValue <= startValue)
                {
                    return 0;
                }
                else if (scrollValue >= endValue)
                {
                    return 1;
                }
                else
                {
                    return ((scrollValue - startValue) / difference);
                }
            };
        }
    }

    protected _getHorizontalScroll(element?: Element): number
    {
        // if (element !== undefined)
        // {
        //     return element.scrollLeft;
        // }

        return window.pageXOffset;
    }
    protected _getVerticalScroll(element?: Element): number
    {
        // if (element !== undefined)
        // {
        //     return element.scrollTop;
        // }

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
        // const screenWidth = window.innerWidth;
        // const screenHeight = window.innerHeight;
        // const horizontalScroll = this._getHorizontalScroll();
        const verticalScroll = this._getVerticalScroll();
        const ratio = this._computeRatio(verticalScroll);

        for (const animator of this._animators)
        {
            animator.update(ratio);
        }
    }
}
