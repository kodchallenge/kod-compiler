#!/usr/bin/env node

// kcompiler --path=/usr/kc/problems/hello-world/solutions/usr-id/c

import { compile } from "./core/compiler";

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

const run = async () => {
    try {
        const solutionPath = getOption(["--path", "--p"]);
        const language = getOption(["--language", "--l"]);
    
        if (!solutionPath) {
            throw new Error("Solution path is required");
        }
        if (!language) {
            throw new Error("Language is required");
        }
    
        compile(language, solutionPath).then(out => {
            process.stdout.write(out);
        }).catch(err => {
            process.stderr.write(err);
        });
    } catch(err: any) {
        process.stderr.write(err.message);
    }
}

run();