interface Element
{
    children?: Element[];
    props?: Record<string, number | string | string[]>;
    tag?: string;
    type: string;
    value?: string;
}
interface TableOfContent
{
    id: string;
    depth: number;
    text: string;
}

export interface IContentDocument extends Record<string, any> // from "@nuxt/content";
{
    dir: string;
    path: string;
    extension: string;
    slug: string;

    createdAt: Date;
    updatedAt: Date;
}

export default abstract class Document implements IContentDocument
{
    public readonly dir: string;
    public readonly path: string;
    public readonly extension: string;
    public readonly slug: string;

    public readonly body: Element;
    public readonly excerpt?: Element;
    public readonly toc: TableOfContent[];

    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    public get hasExcerpt(): boolean
    {
        return !!this.excerpt?.children?.length;
    }
    public get hasBody(): boolean
    {
        return !!this.body.children?.length;
    }

    public constructor({ dir, path, extension, slug, createdAt, updatedAt, body, excerpt, toc }: IContentDocument)
    {
        this.dir = dir;
        this.path = path;
        this.extension = extension;
        this.slug = slug;

        this.body = body;
        this.excerpt = excerpt;
        this.toc = toc;

        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);
    }
}
