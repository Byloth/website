declare module "@material/base/foundation"
{
    interface MDCStrings
    {
        [key: string]: string;
    }

    export { MDCStrings };

    class MDCFoundation<A>
    {
        protected adapter_: A;

        public constructor(adapter: A);
    }

    export default MDCFoundation;

}
