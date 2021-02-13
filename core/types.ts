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

export interface IndexState
{
    cookieAck: boolean;
}
export interface ConfigState
{
    title: string;
    author: string;
    actions: Action[];
    pages: Link[];
    version: string;
}

export interface RootState extends IndexState
{
    config: ConfigState;
}
