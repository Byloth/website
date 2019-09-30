import Vue from "vue";

import { MDCTopAppBarAdapter } from "@material/top-app-bar/adapter";
import { MDCTopAppBar } from "@material/top-app-bar/index";

import TopAppBarFoundation from "../foundation/TopAppBarFoundation";

export default class TopAppBarComponent extends MDCTopAppBar
{
    public constructor(vueElement: Vue)
    {
        super(vueElement.$el);
    }

    public getDefaultAdapter(): MDCTopAppBarAdapter
    {
        const adapter = (Object.assign({

            hasClass: (className: string) => this.root_.classList.contains(className),
            addClass: (className: string) => this.root_.classList.add(className),
            removeClass: (className: string) => this.root_.classList.remove(className),
            setStyle: (property: string, value: string) =>
                (this.root_ as HTMLElement).style.setProperty(property, value),
            getTopAppBarHeight: () => this.root_.clientHeight,
            registerNavigationIconInteractionHandler: (evtType: string, handler: EventListener) => {

                if (this.navIcon_ !== undefined)
                {
                    this.navIcon_.addEventListener(evtType, handler);
                }
            },
            deregisterNavigationIconInteractionHandler: (evtType: string, handler: EventListener) => {

                if (this.navIcon_ !== undefined)
                {
                    this.navIcon_.removeEventListener(evtType, handler);
                }
            },
            notifyNavigationIconClicked: () => {

                this.emit(TopAppBarFoundation.strings.NAVIGATION_EVENT, {});
            },
            registerScrollHandler: (handler: EventListener) => this.scrollTarget_.addEventListener("scroll", handler),
            deregisterScrollHandler: (handler: EventListener) =>
                this.scrollTarget_.removeEventListener("scroll", handler),

            registerResizeHandler: (handler: EventListener) => window.addEventListener("resize", handler),
            deregisterResizeHandler: (handler: EventListener) => window.removeEventListener("resize", handler),
            getViewportScrollY: () =>
                this.scrollTarget_[this.scrollTarget_ === window ? "pageYOffset" : "scrollTop"],

            getTotalActionItems: () =>
                this.root_.querySelectorAll(TopAppBarFoundation.strings.ACTION_ITEM_SELECTOR).length
        }));

        return adapter;
    }

    public getDefaultFoundation(): TopAppBarFoundation
    {
        const adapter = this.getDefaultAdapter();

        return new TopAppBarFoundation(adapter);
    }
}
