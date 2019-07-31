import MDCTopAppBarAdapter from "@material/top-app-bar/adapter";
import MDCTopAppBarFoundation from "@material/top-app-bar/standard/foundation";

export default class TopAppBarFoundation extends MDCTopAppBarFoundation
{
    protected _wasScrolled: boolean;
    protected _lastScrollPosition: number;

    protected resizeHandler_: () => void;

    public constructor(adapter: MDCTopAppBarAdapter)
    {
        super(adapter);

        this._wasScrolled = false;
        this._lastScrollPosition = 0;

        this.resizeHandler_ = () => this._topAppBarResizeHandler();
        this.scrollHandler_ = () => this._topAppBarScrollHandler();
    }

    protected _topAppBarResizeHandler(): void
    {
        // TODO: Manage this...
    }

    protected _topAppBarScrollHandler(): void
    {
        const scrollPosition: number = Math.max(this.adapter_.getViewportScrollY(), 0);
        const positionOffset: number = scrollPosition - this._lastScrollPosition;

        const topAppBarHeight: number = this.adapter_.getTopAppBarHeight();

        if (scrollPosition > 0)
        {
            if (!this._wasScrolled)
            {
                this.adapter_.addClass(TopAppBarFoundation.cssClasses.FIXED_SCROLLED_CLASS);

                this._wasScrolled = true;
            }
        }
        else
        {
            if (this._wasScrolled)
            {
                this.adapter_.removeClass(TopAppBarFoundation.cssClasses.FIXED_SCROLLED_CLASS);

                this._wasScrolled = false;
            }
        }

        let newHeight: number = (topAppBarHeight - positionOffset);

        if (newHeight > 192)
        {
            newHeight = 192;
        }
        else if (newHeight < 64)
        {
            newHeight = 64;
        }

        //
        // Serve un motore per la gestione delle animazioni.
        // Esiste già fatto da qualcuno?
        //
        // TODO: Cercare qualcosa o implementare da zero il motore per la gestione delle animazioni.
        //
        // -------------------------------------------------------------------------
        //   Ma non avevo mica già implementato qualcosa in C# per XNArtillery? 🤔
        // -------------------------------------------------------------------------
        //
        // Qualche altro appunto...
        //  - Elenco oggetti e relative proprietà da animare.
        //  - Stato iniziale -> Valore numerico di scrolling (<min_value>).
        //     - Elenco dei valori delle proprietà corrispondenti allo stato inziale.
        //
        //  - Stato finale -> Valore numerico di scrolling (<max_value>).
        //     - Elenco dei valori delle proprietà corrispondenti allo stato finale.
        //
        //  - Tipo di animazione (opzionale / nice to have).
        //     - Lineare.
        //     - Gaussiana.
        //     -  ecc...
        //
        // -----------------------------------------------
        //
        //     if (scrollPosition <= <min_value>)
        //     {
        //         // Inizio dell'animazione.
        //     }
        //     else if (scrollPosition >= <max_value>)
        //     {
        //         // Fine dell'animazione.
        //     }
        //     else
        //     {
        //         // Stato intermedio.
        //     }
        //
        // -----------------------------------------------
        //

        this.adapter_.setStyle("height", `${newHeight}px`);

        this._lastScrollPosition = scrollPosition;
    }

    public init(): void
    {
        super.init();

        this.adapter_.registerScrollHandler(this.scrollHandler_);
        this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
    public destroy(): void
    {
        super.destroy();

        this.adapter_.deregisterScrollHandler(this.scrollHandler_);
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        this.adapter_.setStyle("height", "");
    }
}
