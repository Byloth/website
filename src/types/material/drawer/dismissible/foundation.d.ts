declare module "@material/drawer/dismissible/foundation"
{
    import MDCFoundation from "@material/base/foundation";

    import MDCDrawerAdapter from "@material/drawer/adapter";
    import { cssClasses, strings } from "@material/drawer/constants";

    class MDCDismissibleDrawerFoundation extends MDCFoundation<MDCDrawerAdapter>
    {
        public static readonly strings: strings;
        public static readonly cssClasses: cssClasses;
    }

    export default MDCDismissibleDrawerFoundation;
}
