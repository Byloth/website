import MDCTopAppBarAdapter from "@material/top-app-bar/adapter";
import MDCTopAppBarBaseFoundation from "@material/top-app-bar/foundation";

export default class TopAppBarFoundation extends MDCTopAppBarBaseFoundation
{
    public constructor(adapter: MDCTopAppBarAdapter)
    {
        super(adapter);
    }
}
