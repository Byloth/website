declare module "@material/top-app-bar/adapter"
{
    interface MDCTopAppBarAdapter
    {
        addClass(className: string): void;
        removeClass(className: string): void;
        hasClass(className: string): boolean;

        setStyle(property: string, value: string): void;

        getTopAppBarHeight(): number;

        registerNavigationIconInteractionHandler(type: string, handler: EventListener): void;
        deregisterNavigationIconInteractionHandler(type: string, handler: EventListener): void;

        notifyNavigationIconClicked(): void;

        registerScrollHandler(handler: EventListener): void;
        deregisterScrollHandler(handler: EventListener): void;

        registerResizeHandler(handler: EventListener): void;
        deregisterResizeHandler(handler: EventListener): void;

        getViewportScrollY(): number;
        getTotalActionItems(): number;
    }

    export default MDCTopAppBarAdapter;
}
