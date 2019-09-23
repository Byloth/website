declare module "@material/top-app-bar/component"
{
    import { MDCComponent } from "@material/base/component";
    import { MDCTopAppBarBaseFoundation } from "@material/top-app-bar/foundation";

    class MDCTopAppBar extends MDCComponent<MDCTopAppBarBaseFoundation>
    {
        protected navIcon_: any;
        protected scrollTarget_: any;
    }

    export { MDCTopAppBar };
}
