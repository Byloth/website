import MDCTopAppBarAdapter from "@material/top-app-bar/adapter";
import MDCTopAppBarFoundation from "@material/top-app-bar/standard/foundation";

class TopAppBarFoundation extends MDCTopAppBarFoundation
{
    protected wasScrolled_: boolean;

    protected scrollHandler_: () => void;

    public constructor(adapter: MDCTopAppBarAdapter)
    {
        super(adapter);

        this.wasScrolled_ = false;

        this.scrollHandler_ = () => this.topAppBarScrollHandler_();
    }

    protected topAppBarScrollHandler_(): void
    {
        super.topAppBarScrollHandler_();

        const currentScroll = this.adapter_.getViewportScrollY();

        if (currentScroll <= 0)
        {
            if (this.wasScrolled_)
            {
                this.adapter_.removeClass(TopAppBarFoundation.cssClasses.FIXED_SCROLLED_CLASS);
                this.wasScrolled_ = false;
            }
        }
        else if (!this.wasScrolled_)
        {
            this.adapter_.addClass(TopAppBarFoundation.cssClasses.FIXED_SCROLLED_CLASS);
            this.wasScrolled_ = true;
        }
    }
}

export default TopAppBarFoundation;
