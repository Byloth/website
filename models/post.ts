import Vue from "vue";

import Document, { IContentDocument } from "./core/document";

export interface Thumbnail
{
    type: string;
    source: string,
    description?: string;
}

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
    public readonly subtitle?: string;
    public readonly author: string;
    public readonly date: Date;

    public readonly thumbnail?: Thumbnail;

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

        this._icon = document.icon;

        this.title = document.title;
        this.subtitle = document.subtitle;
        this.author = document.author;
        this.date = new Date(document.date);

        this.thumbnail = document.thumbnail;
    }
}
