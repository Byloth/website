declare module "@material/top-app-bar/standard/foundation"
{
    import MDCTopAppBarAdapter from "@material/top-app-bar/adapter";
    import MDCTopAppBarBaseFoundation from "@material/top-app-bar/foundation";

    class MDCTopAppBarFoundation extends MDCTopAppBarBaseFoundation
    {
        protected wasDocked_: boolean;
        protected topAppBarHeight_: number;
        protected currentAppBarOffsetTop_: number;

        public constructor(adapter: MDCTopAppBarAdapter);

        protected checkForUpdate_(): boolean;
        protected moveTopAppBar_(): void;
        protected topAppBarScrollHandler_(): void;
        protected throttledResizeHandler_(): void;
    }

    export default MDCTopAppBarFoundation;
}
