import { IContentDocument } from "@nuxt/content/types/content";

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

export default abstract class Document implements IContentDocument
{
    public readonly dir: string;
    public readonly path: string;
    public readonly extension: string;
    public readonly slug: string;

    public readonly body: Element;
    public readonly excerpt?: { body: Element };
    public readonly toc: TableOfContent[];

    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    public readonly hasBody: boolean;
    public readonly hasExcerpt: boolean;

    public constructor({ dir, path, extension, slug, createdAt, updatedAt, body, excerpt, toc }: IContentDocument)
    {
        this.dir = dir;
        this.path = path;
        this.extension = extension;
        this.slug = slug;

        this.body = body;
        this.excerpt = { body: excerpt };
        this.toc = toc;

        this.createdAt = new Date(createdAt);
        this.updatedAt = new Date(updatedAt);

        this.hasBody = !!body.children?.length;
        this.hasExcerpt = !!excerpt?.children?.length;
    }
}
