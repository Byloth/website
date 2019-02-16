declare module '@material/list/foundation'
{
    import MDCFoundation from '@material/base/foundation';
    import MDCListAdapter from '@material/list/adapter';
    import { cssClasses, strings } from '@material/list/constants';

    class MDCListFoundation extends MDCFoundation<MDCListAdapter>
    {
        public static readonly strings: strings;
        public static readonly cssClasses: cssClasses;
    }

    export default MDCListFoundation;
}
