import MDCDrawerAdapter from '@material/drawer/adapter';
import MDCDismissibleDrawerFoundation from '@material/drawer/dismissible/foundation';

export default class DrawerFoundation extends MDCDismissibleDrawerFoundation
{
    public constructor(adapter: MDCDrawerAdapter)
    {
        super(adapter);
    }
}

