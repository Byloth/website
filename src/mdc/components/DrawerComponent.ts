import { MDCDrawerAdapter } from "@material/drawer/adapter";
import { strings } from "@material/drawer/constants";
import { MDCDrawer } from "@material/drawer/index";

import MDCListFoundation from "@material/list/foundation";

import DrawerFoundation from "../foundation/DrawerFoundation";

export default class DrawerComponent extends MDCDrawer
{
    protected foundation_!: DrawerFoundation;

    protected _handleWindowResize!: EventListener;

    public initialSyncWithDOM(): void
    {
        super.initialSyncWithDOM();

        this._handleWindowResize = this.foundation_.handleWindowResize.bind(this.foundation_);

        window.addEventListener("resize", this._handleWindowResize);
    }
    public destroy(): void
    {
        super.destroy();

        window.removeEventListener("resize", this._handleWindowResize);
    }

    public getDefaultAdapter(): MDCDrawerAdapter
    {
        //
        // tslint:disable-next-line: max-line-length
        // Based on: https://github.com/material-components/material-components-web/blob/737da83fc1a04b179a00128080c639e2c7046d4e/packages/mdc-drawer/component.ts#L131
        //

        const adapter: MDCDrawerAdapter = {

            addClass: (className: string) => this.root_.classList.add(className),
            removeClass: (className: string) => this.root_.classList.remove(className),
            hasClass: (className: string) => this.root_.classList.contains(className),
            elementHasClass: (element: Element, className: string) => element.classList.contains(className),
            saveFocus: () => this.previousFocus_ = document.activeElement,
            restoreFocus: () => {

                const previousFocus = this.previousFocus_ as HTMLOrSVGElement | null;

                if (previousFocus && previousFocus.focus && this.root_.contains(document.activeElement))
                {
                    previousFocus.focus();
                }
            },

            focusActiveNavigationItem: () => {

                const listItemActivatedClass = MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS;
                const activeNavItemEl = this.root_.querySelector<HTMLElement>(`.${listItemActivatedClass}`);

                if (activeNavItemEl)
                {
                    activeNavItemEl.focus();
                }
            },
            notifyClose: () => this.emit(strings.CLOSE_EVENT, {}, true),
            notifyOpen: () => this.emit(strings.OPEN_EVENT, {}, true),
            trapFocus: () => this.focusTrap_.activate(),
            releaseFocus: () => this.focusTrap_.deactivate()
        };

        return adapter;
    }
    public getDefaultFoundation(): DrawerFoundation
    {
        const adapter = this.getDefaultAdapter();

        return new DrawerFoundation(adapter);
    }
}
