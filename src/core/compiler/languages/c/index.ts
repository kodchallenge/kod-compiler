import { exec } from "child_process";
import { ICompiler } from "../../interfaces/ICompiler";

export class CCompiler implements ICompiler {
    public execute(solutionPath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const solutionFile = `${solutionPath}\\solution.c`;
            const mainFile = `${solutionPath}\\main.c`;
            const command = `gcc ${mainFile} ${solutionFile} -o ${solutionPath}\\solution && ${solutionPath}\\solution`;
            exec(command, (err, stdout, stderr) => {
                if (err) {
                    return reject(err);
                }
                if (stderr) {
                    return reject(stderr);
                }
                resolve(stdout);
            });
        });
    }
}