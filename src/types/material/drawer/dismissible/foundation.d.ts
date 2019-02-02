declare module '@material/drawer/dismissible/foundation'
{
    import MDCFoundation from '@material/base/foundation';
    import MDCDrawerAdapter from '@material/drawer/adapter';

    class MDCDismissibleDrawerFoundation extends MDCFoundation<MDCDrawerAdapter> { }

    export default MDCDismissibleDrawerFoundation;
}
