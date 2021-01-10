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

export interface DialogPayload
{
    isFullscreen: boolean;
}
