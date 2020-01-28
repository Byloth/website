import { MDCDrawerAdapter } from "@material/drawer/adapter";
import { cssClasses } from "@material/drawer/constants";

import MDCModalDrawerFoundation from "@material/drawer/modal/foundation";

export default class DrawerFoundation extends MDCModalDrawerFoundation
{
    public static DESKTOP_SIZE: number = 1200;
    public static TABLET_SIZE: number = 600;

    public constructor(adapter: MDCDrawerAdapter)
    {
        super(adapter);
    }

    protected _setDismissable(): void
    {
        this.adapter_.addClass(cssClasses.DISMISSIBLE);
        this.adapter_.removeClass(cssClasses.MODAL);
    }

    protected _setModal(): void
    {
        this.adapter_.addClass(cssClasses.MODAL);
        this.adapter_.removeClass(cssClasses.DISMISSIBLE);
    }

    protected _setPermanent(): void
    {
        this.adapter_.removeClass(cssClasses.MODAL);
        this.adapter_.removeClass(cssClasses.DISMISSIBLE);
    }

    public handleWindowResize(evt: Event): void
    {
        /*
         * TODO: https://github.com/Byloth/website/issues/1
         */

        const windowWidth = window.innerWidth;

        if (windowWidth >= DrawerFoundation.DESKTOP_SIZE)
        {
            this._setPermanent();
        }
        else if (windowWidth >= DrawerFoundation.TABLET_SIZE)
        {
            this._setDismissable();
        }
        else
        {
            this._setModal();
        }
    }
}
