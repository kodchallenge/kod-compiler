import { Code } from "../../models/Code";
import { getCompiler } from "./languages";

export const compile = (code: Code): string => {
    const compiler = getCompiler(code.language.name)
    return compiler.execute(code.code, [])
}