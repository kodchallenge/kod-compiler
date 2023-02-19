import { exec } from "child_process";
import path from "path";
import { ICompiler } from "../../interfaces/ICompiler";

export class CCompiler implements ICompiler {
    public execute(solutionPath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const solutionFile = path.join(solutionPath, "solution.c");
            const mainFile = path.join(solutionPath, "main.c");
            const command = `gcc ${mainFile} ${solutionFile} -o ${solutionPath}\\solution && ${solutionPath}\\solution`;
            exec(command, (err, stdout, stderr) => {
                if (stderr) {
                    return reject(stderr);
                }
                resolve(stdout);
            });
        });
    }
}