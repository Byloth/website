declare module '@material/drawer/constants'
{
    import { MDCStrings } from '@material/base/foundation';

    // tslint:disable-next-line:class-name
    interface cssClasses extends MDCStrings
    {
        ROOT: 'mdc-drawer';
        DISMISSIBLE: 'mdc-drawer--dismissible';
        MODAL: 'mdc-drawer--modal';
        OPEN: 'mdc-drawer--open';
        ANIMATE: 'mdc-drawer--animate';
        OPENING: 'mdc-drawer--opening';
        CLOSING: 'mdc-drawer--closing';
    }

    // tslint:disable-next-line:class-name
    interface strings extends MDCStrings
    {
        APP_CONTENT_SELECTOR: '.mdc-drawer-app-content';
        SCRIM_SELECTOR: '.mdc-drawer-scrim';
        CLOSE_EVENT: 'MDCDrawer:closed';
        OPEN_EVENT: 'MDCDrawer:opened';
    }

    export { cssClasses, strings };
}
