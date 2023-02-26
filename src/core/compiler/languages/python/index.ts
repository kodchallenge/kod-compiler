import { exec } from "child_process";
import path from "path";
import { ICompiler } from "../../interfaces/ICompiler";

export class PythonCompiler implements ICompiler {
    execute(solutionPath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const mainFile = path.join(solutionPath, "main.py");
            const command = `python3 ${mainFile}`;
            exec(command, (err, stdout, stderr) => {
                if (stderr) {
                    return reject(stderr);
                }
                resolve(stdout);
            });
        });
    }
}