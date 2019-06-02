declare module '@material/top-app-bar/constants'
{
    import { MDCNumbers, MDCStrings } from '@material/base/foundation';

    // tslint:disable-next-line:class-name
    interface cssClasses extends MDCStrings
    {
        FIXED_CLASS: 'mdc-top-app-bar--fixed';
        FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled';
        SHORT_CLASS: 'mdc-top-app-bar--short';
        SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item';
        SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed';
    }

    // tslint:disable-next-line:class-name
    interface numbers extends MDCNumbers
    {
        DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100;
        MAX_TOP_APP_BAR_HEIGHT: 128;
    }

    // tslint:disable-next-line:class-name
    interface strings extends MDCStrings
    {
        ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item';
        NAVIGATION_EVENT: 'MDCTopAppBar:nav';
        NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon';
        ROOT_SELECTOR: '.mdc-top-app-bar';
        TITLE_SELECTOR: '.mdc-top-app-bar__title';
    }

    export { cssClasses, numbers, strings };
}
