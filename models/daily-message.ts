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

export default class DailyMessage implements DailyMessageData
{
    public static async GetAll(): Promise<DailyMessage[]>
    {
        const messages = (await import(/* webpackChunkName: "daily-messages" */ "./data/daily-messages.json")).default;

        return messages.map((message) => new DailyMessage(message));
    }
    public static async GetRandomOne(): Promise<DailyMessage>
    {
        const dailyMessages = await DailyMessage.GetAll();

        return dailyMessages[Math.floor(Math.random() * dailyMessages.length)];
    }

    public readonly id: number;
    public readonly type: DailyMessageType;
    public readonly typeId: number;
    public readonly text: string;
    public readonly author: string | null;
    public readonly source: string | null;
    public readonly script: string | null;
    public readonly url: string | null;

    public readonly canBeExecuted: boolean;

    public constructor({ id, typeId, text, author, source, script, url }: DailyMessageData)
    {
        this.id = id;
        this.type = typeId as DailyMessageType;
        this.typeId = typeId;
        this.text = text;
        this.author = author;
        this.source = source;
        this.script = script;
        this.url = url;

        this.canBeExecuted = (process.client && script !== null);
    }

    public execute(): Promise<unknown>
    {
        if (this.canBeExecuted === false)
        {
            throw new Error("This daily message cannot be executed. It hasn't a valid script to run.");
        }

        return new Promise<unknown>((resolve, reject) =>
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
