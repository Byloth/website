export interface Button
{
    type: "primary" | "secondary";
    text: string;

    action: () => void;
}

export interface Message
{
    type: "success" | "info" | "warning" | "danger";
    icon?: string;
    title?: string;
    text: string;
}
export interface Alert
{
    type: "banner" | "dialog" | "snackbar";
    message: Message;
    timeout?: number;
    buttons?: Button[];
}

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
