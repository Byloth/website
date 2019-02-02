declare module '@material/top-app-bar/foundation'
{
    import MDCFoundation from '@material/base/foundation';

    import MDCTopAppBarAdapter from '@material/top-app-bar/adapter';
    import { cssClasses, strings } from '@material/top-app-bar/constants';

    class MDCTopAppBarBaseFoundation extends MDCFoundation<MDCTopAppBarAdapter>
    {
        public static readonly strings: strings;
        public static readonly cssClasses: cssClasses;

        public constructor(adapter: MDCTopAppBarAdapter);
    }

    export default MDCTopAppBarBaseFoundation;
}
