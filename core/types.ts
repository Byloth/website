import { Location } from "vue-router";

export interface Anchor
{
    type: "primary" | "secondary";
    text: string;

    location: string | Location;
}
export interface Button
{
    type: "primary" | "secondary";
    text: string;

    callback: () => void;
}

export interface Message
{
    type?: "success" | "info" | "warning" | "danger";
    icon?: string;
    title?: string;
    text: string;
}
export interface Alert
{
    type: "alert";
    message: Message;
    actions?: (Anchor | Button)[];
    blocking?: boolean;
}
export interface Banner
{
    type: "banner";
    message: Message;
    actions?: (Anchor | Button)[];
    dismissable?: boolean;
}
export interface Snackbar
{
    type: "snackbar";
    message: Message;
    actions?: (Anchor | Button)[];
    timeout?: number;
}

export type Dialog = Alert | Banner | Snackbar;

export interface Action extends Location
{
    id: number;
    name: string;
    icon: string;
    title: string;
}
export interface Page extends Action
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
    pages: Page[];
    version: string;
}

export interface RootState extends IndexState
{
    config: ConfigState;
}
