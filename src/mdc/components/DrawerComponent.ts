import Vue from 'vue';

import MDCDrawerAdapter from '@material/drawer/adapter';
import { MDCDrawer } from '@material/drawer/index';

export default class DrawerComponent extends MDCDrawer
{
    public constructor(vueElement: Vue)
    {
        super(vueElement.$el);
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
                const previousFocus = (this.previousFocus_ && this.previousFocus_.focus);

                if (this.root_.contains(document.activeElement) && previousFocus)
                {
                    this.previousFocus_.focus();
                }
            },
            focusActiveNavigationItem: () => {
                const activeNavItemEl = this.root_.querySelector(
                    `.${MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`
                );

                if (activeNavItemEl)
                {
                    activeNavItemEl.focus();
                }
            },
            notifyClose: () => this.emit(strings.CLOSE_EVENT, {}, true),
            notifyOpen: () => this.emit(strings.OPEN_EVENT, {}, true),
            trapFocus: () => this.focusTrap_.activate(),
            releaseFocus: () => this.focusTrap_.deactivate()
        }));

        return adapter;
    }

    public getDefaultFoundation(): MDCDrawerFoundation
    {
        const adapter = this.getDefaultAdapter();

        const { DISMISSIBLE, MODAL } = MDCDismissibleDrawerFoundation.cssClasses;

        if (this.root_.classList.contains(DISMISSIBLE))
        {
            return new MDCDismissibleDrawerFoundation(adapter);
        }
        else if (this.root_.classList.contains(MODAL))
        {
            return new MDCModalDrawerFoundation(adapter);
        }
        else
        {
            throw new Error(
                `MDCDrawer: Failed to instantiate component. Supported variants are ${DISMISSIBLE} and ${MODAL}.`
            );
        }
    }
}
