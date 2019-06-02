import MDCTopAppBarAdapter from '@material/top-app-bar/adapter';
import MDCTopAppBarFoundation from '@material/top-app-bar/standard/foundation';

export default class TopAppBarFoundation extends MDCTopAppBarFoundation
{
    protected resizeHandler_: () => void;

    public constructor(adapter: MDCTopAppBarAdapter)
    {
        super(adapter);

        this.resizeHandler_ = () => this._topAppBarResizeHandler();
        this.scrollHandler_ = () => this._topAppBarScrollHandler();
    }

    protected _topAppBarResizeHandler(): void
    {
        // TODO: Manage this...
    }

    protected _topAppBarScrollHandler(): void
    {
        const currentScrollPosition: number = Math.max(this.adapter_.getViewportScrollY(), 0);

        if (currentScrollPosition > 0)
        {
            this.adapter_.addClass(TopAppBarFoundation.cssClasses.FIXED_SCROLLED_CLASS);
        }
        else
        {
            this.adapter_.removeClass(TopAppBarFoundation.cssClasses.FIXED_SCROLLED_CLASS);
        }
    }

    public init(): void
    {
        super.init();

        this.adapter_.registerScrollHandler(this.scrollHandler_);
        this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
    public destroy(): void
    {
        super.destroy();

        this.adapter_.deregisterScrollHandler(this.scrollHandler_);
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        this.adapter_.setStyle('top', '');
    }
}
