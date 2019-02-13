declare module '@material/drawer/adapter'
{
    interface MDCDrawerAdapter
    {
        addClass(className: string): void;
        removeClass(className: string): void;
        hasClass(className: string): boolean;

        elementHasClass(element: Element, className: string): boolean;

        saveFocus(): void;
        restoreFocus(): void;

        focusActiveNavigationItem(): void;

        notifyClose(): void;
        notifyOpen(): void;

        trapFocus(): void;
        releaseFocus(): void;
    }

    export default MDCDrawerAdapter;
}
