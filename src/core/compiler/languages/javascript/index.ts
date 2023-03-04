import { exec, execSync } from "child_process";
import path from "path";
import { ICompiler } from "../../interfaces/ICompiler";

export class JavaScriptCompiler implements ICompiler {
    execute(solutionPath: string): Promise<string> {
        return new Promise((resolve, reject) => {
            try {

                execSync(`docker run -t -d nodeapp`);
                const container = execSync("docker ps -l -q").toString().trim();
                execSync(`docker cp ${solutionPath}/. ${container}:/app`);
                try {
                    const output = execSync(`docker exec -it ${container} sh -c "node /app/main.js"`).toString().trim();
                    resolve(output);
                } catch(err) {
                    exec(`docker stop ${container} && docker rm ${container}`);
                    throw err;
                }
            } catch(err: any) {
                reject(err);
            }
        });
    }
}