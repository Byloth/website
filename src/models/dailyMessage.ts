import Model from "./core";

export enum DailyMessageType
{
    Subtitle = 0,
    Quote = 1,
    Translation = 2,
    HtmlCode = 3
}

export interface DailyMessageData
{
    id: number;
    typeId: number;
    text: string;
    author: string | null;
    source: string | null;
    script: string | null;
    url: string | null;
}

export default class DailyMessage extends Model implements DailyMessageData
{
    public static get Empty(): DailyMessage
    {
        return new DailyMessage({ id: -1, typeId: 3, text: "" } as DailyMessageData);
    }

    public static async GetAll(): Promise<Array<DailyMessage>>
    {
        const elements: Array<DailyMessageData> = await import(/* webpackChunkName: "dailyMessages" */ "@/data/dailyMessages.json");
        const dailyMessages = new Array<DailyMessage>();

        for (const index in elements)
        {
            dailyMessages.push(new DailyMessage(elements[index]));
        }

        return dailyMessages.filter((el) => el.id);
    }
    public static async GetRandomOne(): Promise<DailyMessage>
    {
        const dailyMessages = await DailyMessage.GetAll();

        return dailyMessages[Math.floor(Math.random() * dailyMessages.length)];
    }

    public readonly id: number;
    public readonly typeId: number;
    public readonly text: string;
    public readonly author: string | null;
    public readonly source: string | null;
    public readonly script: string | null;
    public readonly url: string | null;

    public get canBeExecuted(): boolean { return (this.script !== null); }
    public get type(): DailyMessageType { return this.typeId as DailyMessageType; }

    public constructor({ id, typeId, text, author, source, script, url }: DailyMessageData)
    {
        super(id !== -1);

        this.id = id;
        this.typeId = typeId;
        this.text = text;
        this.author = author;
        this.source = source;
        this.script = script;
        this.url = url;
    }

    public async execute(): Promise<unknown>
    {
        if (this.canBeExecuted === false)
        {
            throw new Error("This daily message cannot be executed. It hasn't a valid script to run.");
        }

        return new Promise((resolve, reject) =>
        {
            try
            {
                // eslint-disable-next-line no-eval
                const result = eval(`(function() { "use strict"; ${this.script} })();`);

                resolve(result);
            }
            catch (error)
            {
                reject(error);
            }
        });
    }
}
