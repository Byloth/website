import { MDCDrawerAdapter } from "@material/drawer/adapter";

import MDCModalDrawerFoundation from "@material/drawer/modal/foundation";

export default class DrawerFoundation extends MDCModalDrawerFoundation
{
    public constructor(adapter: MDCDrawerAdapter)
    {
        super(adapter);
    }

    public handleWindowResize(evt: Event): void
    {
        /*
         * TODO: https://github.com/Byloth/website/issues/1
         */

        console.debug(evt);
    }
}
