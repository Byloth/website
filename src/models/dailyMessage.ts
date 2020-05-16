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
    script: string | null;
    author: string | null;
    source: string | null;
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
        const elements = await import("@/data/dailyMessages.json") as Array<DailyMessageData>;
        const dailyMessages = new Array<DailyMessage>();

        for (const index in elements)
        {
            dailyMessages.push(new DailyMessage(elements[index]));
        }

        return dailyMessages;
    }
    public static async GetRandomOne(): Promise<DailyMessage>
    {
        const dailyMessages = await DailyMessage.GetAll();

        return dailyMessages[Math.floor(Math.random() * dailyMessages.length)];
    }

    public readonly id: number;
    public readonly typeId: number;
    public readonly text: string;
    public readonly script: string | null;
    public readonly author: string | null;
    public readonly source: string | null;
    public readonly url: string | null;

    public get type() { return this.typeId as DailyMessageType; };

    public constructor({ id, typeId, text, script, author, source, url }: DailyMessageData)
    {
        super(id !== -1);

        this.typeId = typeId;

        this.id = id;
        this.text = text;
        this.script = script;
        this.author = author;
        this.source = source;
        this.url = url;
    }
}
