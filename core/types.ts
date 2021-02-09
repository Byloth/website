export interface Action
{
    id: number;
    name: string;
    icon: string;
    title: string;

    path?: string;
}
export interface Link extends Action
{
    path: string;
}

export interface RootState
{
    title: string;
    author: string;
    actions: Action[];
    pages: Link[];
    version: string;
}
