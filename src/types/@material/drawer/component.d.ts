declare module "@material/drawer/component"
{
    import { MDCComponent } from "@material/base/component";
    import { MDCDismissibleDrawerFoundation } from "@material/drawer/dismissible/foundation";

    class MDCDrawer extends MDCComponent<MDCDismissibleDrawerFoundation>
    {
        public open: boolean;
        protected previousFocus_: any;
        protected focusTrap_: any;
    }

    export { MDCDrawer };
}
