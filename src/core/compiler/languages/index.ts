import { ICompiler } from "../interfaces/ICompiler";
import { CCompiler } from "./c";
import { CppCompiler } from "./cpp";
import { JavaCompiler } from "./java";

export type CompilerConfig = {
    name: LanguageName;
    compiler: ICompiler;
}

// TODO: Config dosyaları {languages}/index.ts den gelsin.
export const compilers: CompilerConfig[] = [
    {
        name: "C++",
        compiler: new CppCompiler()
    },
    {
        name: "C",
        compiler: new CCompiler()
    },
    {
        name: "Java",
        compiler: new JavaCompiler()
    }
]

export const getCompiler = (language: LanguageName): ICompiler => {
    const compiler = compilers.find(x => x.name == language);

    if(!compiler) {
        throw new Error(`Compiler is not found for Language: ${language}`)
    }

    return compiler.compiler;
}