import { ICompiler } from "../interfaces/ICompiler";
import { CCompiler } from "./c";
import { CppCompiler } from "./cpp";
import { JavaCompiler } from "./java";
import { JavaScriptCompiler } from "./javascript";
import { PythonCompiler } from "./python";
import { TypeScriptCompiler } from "./typescript";

const compilers: { [name: string]: ICompiler } = {
    cpp: new CppCompiler(),
    c: new CCompiler(),
    java: new JavaCompiler(),
    js: new JavaScriptCompiler(),
    javascript: new JavaScriptCompiler(), // Maybe JS slug can come as javascript
    ts: new TypeScriptCompiler(),
    typescript: new TypeScriptCompiler(), // Maybe TS slug can come as typescript
    py: new PythonCompiler(),
    python: new PythonCompiler(), // Maybe Python slug can come as python
}

export const getCompiler = (language: string): ICompiler => {
    const compiler = compilers[language];

    if (!compiler) {
        throw new Error(`Compiler is not found for Language: ${language}`)
    }

    return compiler;
}