import { saveCode } from "../../../../utils/util";
import { ICompiler } from "../../interfaces/ICompiler";

export class Compiler implements ICompiler {
    public execute(code: string, args: unknown[]): string {
        saveCode(Math.random() + ".c", code)
        return "Compiled c codes";
    }
}