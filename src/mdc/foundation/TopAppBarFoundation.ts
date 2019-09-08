import MDCTopAppBarAdapter from "@material/top-app-bar/adapter";
import MDCTopAppBarFoundation from "@material/top-app-bar/standard/foundation";

export default class TopAppBarFoundation extends MDCTopAppBarFoundation
{
    public constructor(adapter: MDCTopAppBarAdapter)
    {
        super(adapter);
    }

    protected topAppBarScrollHandler_(): void
    {
        const currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
        const diff = currentScrollPosition - this.lastScrollPosition_;

        this.lastScrollPosition_ = currentScrollPosition;

        if (this.isCurrentlyBeingResized_ === false)
        {
            if (currentScrollPosition <= 128)
            {
                this.currentAppBarOffsetTop_ = 0;
            }
            else
            {
                this.currentAppBarOffsetTop_ -= diff;

                if (this.currentAppBarOffsetTop_ > 0)
                {
                    this.currentAppBarOffsetTop_ = 0;
                }
                else if (Math.abs(this.currentAppBarOffsetTop_) > 74)
                {
                    this.currentAppBarOffsetTop_ = -74;
                }
            }

            this.moveTopAppBar_();
        }
    }
}
