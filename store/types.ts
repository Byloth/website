import { Action, Link } from "@/core/types";

export interface RootState
{
    title: string;
    author: string;
    actions: Action[];
    pages: Link[];
    version: string;
}
