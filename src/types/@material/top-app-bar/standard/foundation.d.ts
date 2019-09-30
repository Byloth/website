declare module "@material/top-app-bar/standard/foundation"
{
    import { MDCTopAppBarAdapter } from "@material/top-app-bar/adapter";
    import { MDCTopAppBarBaseFoundation } from "@material/top-app-bar/foundation";

    class MDCTopAppBarFoundation extends MDCTopAppBarBaseFoundation
    {
        protected currentAppBarOffsetTop_: any;
        protected isCurrentlyBeingResized_: any;
        protected lastScrollPosition_: any;
        protected moveTopAppBar_: any;
    }

    export default MDCTopAppBarFoundation;
}
