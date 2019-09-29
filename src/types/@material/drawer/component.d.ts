declare module "@material/drawer/component"
{
    import { MDCComponent } from "@material/base/component";
    import { MDCDismissibleDrawerFoundation } from "@material/drawer/dismissible/foundation";

    class MDCDrawer extends MDCComponent<MDCDismissibleDrawerFoundation>
    {
        protected previousFocus_: any;
        protected focusTrap_: any;
        public open: boolean;
    }

    export { MDCDrawer };
}
