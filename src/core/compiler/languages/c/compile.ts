import { ICompiler } from "../../interfaces/ICompiler";

export class Compiler implements ICompiler {
    public execute(code: string, args: unknown[]): string {
        return "Compiled c codes";
    }
}