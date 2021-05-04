import Vue from "vue";

import { Context } from "@nuxt/types";
import { IContentDocument } from "@nuxt/content/types/content";

import Document from "./core/document";

export interface Thumbnail
{
    type: string;
    source: string,
    description?: string;
}

export default class Post extends Document
{
    public static async Get({ $content }: Vue | Context, slug: string): Promise<Post>
    {
        const document = await $content("posts", slug).fetch();

        return new Post(document as IContentDocument);
    }
    public static async GetAll({ $content }: Vue | Context): Promise<Post[]>
    {
        const documents = await $content("posts")
            .sortBy("date", "desc")
            .fetch();

        return documents.map((document: IContentDocument) => new Post(document));
    }

    public readonly title: string;
    public readonly subtitle?: string;
    public readonly icon: string;
    public readonly author: string;
    public readonly date: Date;

    public readonly thumbnail?: Thumbnail;

    public constructor(document: IContentDocument)
    {
        super(document);

        this.title = document.title;
        this.subtitle = document.subtitle;
        this.icon = document.icon ? document.icon : "thumbtack";
        this.author = document.author;
        this.date = new Date(document.date);

        this.thumbnail = document.thumbnail;
    }
}
