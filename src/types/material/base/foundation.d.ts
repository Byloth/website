declare module '@material/base/foundation'
{
    interface MDCNumbers
    {
        [key: string]: number;
    }
    interface MDCStrings
    {
        [key: string]: string;
    }

    export { MDCNumbers, MDCStrings };

    class MDCFoundation<A>
    {
        protected adapter_: A;

        public constructor(adapter: A);

        public init(): void;
        public destroy(): void;
    }

    export default MDCFoundation;

}
