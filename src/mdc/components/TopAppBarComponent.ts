import { MDCTopAppBarAdapter } from "@material/top-app-bar/adapter";
import { strings } from "@material/top-app-bar/constants";
import { MDCTopAppBar } from "@material/top-app-bar/index";

import TopAppBarFoundation from "../foundation/TopAppBarFoundation";

export default class TopAppBarComponent extends MDCTopAppBar
{
    public getDefaultAdapter(): MDCTopAppBarAdapter
    {
        //
        // tslint:disable-next-line: max-line-length
        // Based on: https://github.com/material-components/material-components-web/blob/737da83fc1a04b179a00128080c639e2c7046d4e/packages/mdc-top-app-bar/component.ts#L112
        //

        const adapter: MDCTopAppBarAdapter = {

            hasClass: (className: string) => this.root_.classList.contains(className),
            addClass: (className: string) => this.root_.classList.add(className),
            removeClass: (className: string) => this.root_.classList.remove(className),
            setStyle: (property: string, value: string) =>
                (this.root_ as HTMLElement).style.setProperty(property, value),

            getTopAppBarHeight: () => this.root_.clientHeight,
            notifyNavigationIconClicked: () => this.emit(strings.NAVIGATION_EVENT, {}),
            getViewportScrollY: () => {

                const win = this.scrollTarget_ as Window;
                const el = this.scrollTarget_ as Element;

                return win.pageYOffset !== undefined ? win.pageYOffset : el.scrollTop;
            },
            getTotalActionItems: () => this.root_.querySelectorAll(strings.ACTION_ITEM_SELECTOR).length
        };

        return adapter;
    }
    public getDefaultFoundation(): TopAppBarFoundation
    {
        const adapter = this.getDefaultAdapter();

        return new TopAppBarFoundation(adapter);
    }
}
