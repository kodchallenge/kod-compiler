#!/usr/bin/env node

// kcompiler --path=/usr/kc/problems/hello-world/solutions/usr-id/c

console.log("Welcome to the CLI");  

const args = process.argv.slice(2);

const getOption = (optionName: string) => {
    const option = args.find(arg => arg.startsWith(optionName));
    if (!option) {
        return null;
    }
    return option.split('=')[1];
}

console.table(getOption("--path"));