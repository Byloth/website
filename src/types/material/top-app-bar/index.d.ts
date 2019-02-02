declare module '@material/top-app-bar/index'
{
    import MDCComponent from '@material/base/component';

    import MDCTopAppBarAdapter from '@material/top-app-bar/adapter';
    import { cssClasses, strings } from '@material/top-app-bar/constants';
    import MDCTopAppBarBaseFoundation from '@material/top-app-bar/foundation';
    import MDCTopAppBarFoundation from '@material/top-app-bar/standard/foundation';

    class MDCTopAppBar extends MDCComponent<MDCTopAppBarBaseFoundation>
    {
        protected navIcon_?: Element;
        protected scrollTarget_: any;

        public constructor(...args: any[]);
    }

    export { MDCTopAppBar, MDCTopAppBarBaseFoundation, MDCTopAppBarFoundation };
}
