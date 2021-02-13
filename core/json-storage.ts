export default class JsonStorage
{
    protected static get _FakeOne()
    {
        return {
            length: 0,

            key: (index: number): string | null => null,
            getItem: (key: string): string | null => null,
            setItem: (key: string, value: string): void => undefined,
            removeItem: (key: string): void => undefined,
            clear: (): void => undefined
        };
    };

    protected _storage: Storage;

    public constructor(storage?: Storage)
    {
        this._storage = storage || JsonStorage._FakeOne;
    }

    public get<T extends unknown>(propertyName: string, defaultValue?: T): T | undefined
    {
        const propertyValue = this._storage.getItem(propertyName) || undefined;

        if (propertyValue)
        {
            return JSON.parse(propertyValue);
        }

        return defaultValue;
    }
    public set<T extends unknown>(propertyName: string, newValue?: T): void
    {
        const encodedValue = JSON.stringify(newValue);

        if (encodedValue)
        {
            this._storage.setItem(propertyName, encodedValue);
        }
        else
        {
            this.remove(propertyName);
        }
    }

    public remove(propertyName: string): void
    {
        this._storage.removeItem(propertyName);
    }
}
