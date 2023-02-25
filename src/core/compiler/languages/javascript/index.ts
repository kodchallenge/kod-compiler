import { exec } from "child_process";
import path from "path";
import { ICompiler } from "../../interfaces/ICompiler";

export class JavaScriptCompiler implements ICompiler {
    execute(solutionPath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            // const solutionFile = path.join(solutionPath, "solution.js");
            const mainFile = path.join(solutionPath, "main.js");
            const command = `node ${mainFile}`;
            exec(command, (err, stdout, stderr) => {
                if (stderr) {
                    return reject(stderr);
                }
                resolve(stdout);
            });
        });
    }
}