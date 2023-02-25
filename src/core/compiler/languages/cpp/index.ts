import { exec } from "child_process";
import path from "path";
import { ICompiler } from "../../interfaces/ICompiler";

export class CppCompiler implements ICompiler {
    public execute(solutionPath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const solutionFile = path.join(solutionPath, "solution.cpp");
            const mainFile = path.join(solutionPath, "main.cpp");
            const command = `g++ ${mainFile} ${solutionFile} -o ${solutionPath}\\solution && ${solutionPath}\\solution`;
            exec(command, (err, stdout, stderr) => {
                if (stderr) {
                    return reject(stderr);
                }
                resolve(stdout);
            });
        });
    }
}