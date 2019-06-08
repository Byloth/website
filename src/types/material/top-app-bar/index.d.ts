declare module "@material/top-app-bar/index"
{
    import MDCTopAppBarAdapter from "@material/top-app-bar/adapter";
    import MDCComponent from "@material/base/component";

    import MDCTopAppBarBaseFoundation from "@material/top-app-bar/foundation";
    import MDCTopAppBarFoundation from "@material/top-app-bar/standard/foundation";

    class MDCTopAppBar extends MDCComponent<MDCTopAppBarBaseFoundation>
    {
        protected navIcon_?: Element;
        protected scrollTarget_: any;

        public constructor(...args: any[]);
    }

    export { MDCTopAppBar, MDCTopAppBarBaseFoundation, MDCTopAppBarFoundation };
}
