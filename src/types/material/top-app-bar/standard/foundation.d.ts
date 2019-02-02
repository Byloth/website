declare module '@material/top-app-bar/standard/foundation'
{
    import MDCTopAppBarAdapter from '@material/top-app-bar/adapter';
    import MDCTopAppBarBaseFoundation from '@material/top-app-bar/foundation';

    class MDCTopAppBarFoundation extends MDCTopAppBarBaseFoundation
    {
        public constructor(adapter: MDCTopAppBarAdapter);

        protected topAppBarScrollHandler_(): void;
    }

    export default MDCTopAppBarFoundation;
}
