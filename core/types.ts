import { Location } from "vue-router";

export interface Action
{
    type: "primary" | "secondary";
    text: string;

    callback?: () => void;
    location?: string | Location;
}
export interface Message
{
    type?: "success" | "info" | "warning" | "danger";
    icon?: string;
    title?: string;
    text: string;
}

export interface Dialog
{
    type: "alert" | "banner" | "snackbar";
    message: Message;
    actions?: Action[];
    dismissable?: boolean;
    timeout?: number;
}

export interface Menu extends Location
{
    id: number;
    name: string;
    icon: string;
    title: string;
}
export interface Page extends Menu
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
    menus: Menu[];
    pages: Page[];
    version: string;
}

export interface RootState extends IndexState
{
    config: ConfigState;
}
