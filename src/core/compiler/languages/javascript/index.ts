import { exec, execSync } from "child_process";
import path from "path";
import { ICompiler } from "../../interfaces/ICompiler";

export class JavaScriptCompiler implements ICompiler {
    execute(solutionPath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            execSync(`docker run -t -d nodeapp`);
            const container = execSync("docker ps -l -q").toString().trim();
            execSync(`docker cp ${solutionPath} ${container}:/app`);
            const output = execSync(`docker exec ${container} /app/solution/main.js`).toString().trim();
            execSync(`docker stop ${container}`);
            execSync(`docker rm ${container}`);
            resolve(output);
        });
    }
}