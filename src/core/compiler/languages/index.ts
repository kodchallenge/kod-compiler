import { ICompiler } from "../interfaces/ICompiler";
import { CCompiler } from "./c";
import { CppCompiler } from "./cpp";
import { JavaCompiler } from "./java";

const compilers: { [name: string]: ICompiler } = {
    cpp: new CppCompiler(),
    c: new CCompiler(),
    java: new JavaCompiler(),
}

export const getCompiler = (language: string): ICompiler => {
    const compiler = compilers[language];

    if (!compiler) {
        throw new Error(`Compiler is not found for Language: ${language}`)
    }

    return compiler;
}