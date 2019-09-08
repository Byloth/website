import Vue from "vue";

import MDCDrawerAdapter from "@material/drawer/adapter";
import { MDCDrawer } from "@material/drawer/index";

import MDCListFoundation from "@material/list/foundation";

import DrawerFoundation from "../foundation/DrawerFoundation";

export default class DrawerComponent extends MDCDrawer
{
    public constructor(vueElement: Vue)
    {
        super(vueElement.$el);
    }

    protected _hasElementFocus(element: any): boolean
    {
        return (element && element.focus);
    }

    public getDefaultAdapter(): MDCDrawerAdapter
    {
        const adapter = (Object.assign({

            addClass: (className: string) => this.root_.classList.add(className),
            removeClass: (className: string) => this.root_.classList.remove(className),
            hasClass: (className: string) => this.root_.classList.contains(className),
            elementHasClass: (element: Element, className: string) => element.classList.contains(className),
            saveFocus: () => {

                this.previousFocus_ = document.activeElement;
            },
            restoreFocus: () => {

                if ((this.root_.contains(document.activeElement) === true) &&
                    (this._hasElementFocus(this.previousFocus_) === true))
                {
                    (this.previousFocus_ as any).focus();
                }
            },
            focusActiveNavigationItem: () => {

                const listItemActivatedClass = MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
                const activeNavItemEl = this.root_.querySelector(`.${listItemActivatedClass}`);

                if (this._hasElementFocus(activeNavItemEl) === true)
                {
                    (activeNavItemEl as any).focus();
                }
            },
            notifyClose: () => this.emit(DrawerFoundation.strings.CLOSE_EVENT, {}, true),
            notifyOpen: () => this.emit(DrawerFoundation.strings.OPEN_EVENT, {}, true),
            trapFocus: () => this.focusTrap_.activate(),
            releaseFocus: () => this.focusTrap_.deactivate()
        }));

        return adapter;
    }

    public getDefaultFoundation(): DrawerFoundation
    {
        const adapter = this.getDefaultAdapter();

        return new DrawerFoundation(adapter);
    }
}
