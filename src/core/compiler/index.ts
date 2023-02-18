import { getCompiler } from "./languages";

export const compile = (language: string, solutionPath: string): Promise<string> => {
    const compiler = getCompiler(language)
    return compiler.execute(solutionPath)
}