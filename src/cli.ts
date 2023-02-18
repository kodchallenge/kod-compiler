#!/usr/bin/env node

// kcompiler --path=/usr/kc/problems/hello-world/solutions/usr-id/c

import { compile } from "./core/compiler";
import { CCompiler } from "./core/compiler/languages/c";

console.log("Welcome to the CLI");

const args = process.argv.slice(2);

const getOption = (optionName: string | string[]) => {
    const option = args.find(arg => {
        if (typeof optionName === "string") {
            return arg.startsWith(optionName);
        }
        return optionName.find(name => arg.startsWith(name));
    });

    if (option) {
        const [, value] = option.split("=");
        return value;
    }
    return undefined;
}

const solutionPath = getOption(["--path", "--p"]);
const language = getOption(["--language", "--l"]);

if(!solutionPath) {
    throw new Error("Solution path is required");
}
if(!language) {
    throw new Error("Language is required");
}

compile(language, solutionPath).then(console.log).catch(console.error);