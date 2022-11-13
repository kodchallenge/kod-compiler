import { Language } from "./language";

export interface Code {
    language: Language;
    baseCode: string;
    code: string;
    customInputs: string;
    args: string
}