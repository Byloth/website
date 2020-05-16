export default abstract class Model
{
    public readonly isLoaded: boolean;

    public constructor(loaded: boolean)
    {
        this.isLoaded = loaded;
    }
}
