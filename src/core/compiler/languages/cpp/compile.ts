import { ICompiler } from "../../interfaces/ICompiler";

export class Compiler implements ICompiler {
    public execute(code: string, args: unknown[]): Promise<string> {
        throw new Error("Method non implemented")
    }
}