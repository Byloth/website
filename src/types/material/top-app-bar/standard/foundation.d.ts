declare module "@material/top-app-bar/standard/foundation"
{
    import MDCTopAppBarAdapter from "@material/top-app-bar/adapter";
    import MDCTopAppBarBaseFoundation from "@material/top-app-bar/foundation";

    export default class MDCTopAppBarFoundation extends MDCTopAppBarBaseFoundation
    {
        protected lastScrollPosition_: number;
        protected topAppBarHeight_: number;
        protected wasDocked_: boolean;
        protected isDockedShowing_: boolean;
        protected currentAppBarOffsetTop_: number;
        protected isCurrentlyBeingResized_: boolean;

        public constructor(adapter: MDCTopAppBarAdapter);

        protected checkForUpdate_(): boolean;
        protected moveTopAppBar_(): void;
        protected topAppBarScrollHandler_(): void;
        protected throttledResizeHandler_(): void;
    }
}
