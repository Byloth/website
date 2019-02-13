declare module '@material/drawer/index'
{
    import MDCComponent from '@material/base/component';
    import MDCDismissibleDrawerFoundation from '@material/drawer/dismissible/foundation';

    class MDCDrawer extends MDCComponent<MDCDismissibleDrawerFoundation>
    {
        protected previousFocus_: Element | null;
        protected focusTrap_: {
            activate(): void,
            deactivate(): void
        };

        public open: boolean;
    }

    export { MDCDrawer, MDCDismissibleDrawerFoundation };
}
