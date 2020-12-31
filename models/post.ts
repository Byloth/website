import Vue from "vue";

import Document, { IContentDocument } from "./core/document";

export default class Post extends Document
{
    public static async GetAll({ $content }: Vue): Promise<Post[]>
    {
        const documents = await $content("posts")
            .sortBy("date", "desc")
            .fetch();

        return documents.map((document: IContentDocument) => new Post(document));
    }

    protected readonly _icon?: string;

    public readonly title: string;
    public readonly date: Date;
    public readonly image?: { source: string, description: string };

    public get icon(): string
    {
        if (this._icon)
        {
            return this._icon;
        }

        return "thumbtack";
    }

    public constructor(document: IContentDocument)
    {
        super(document);

        this.title = document.title;
        this.date = new Date(document.date);

        this.image = document.image;
        this._icon = document.icon;
    }
}
