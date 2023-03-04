import { exec, execSync } from "child_process";
import { getCompiler } from "./languages";

export const compile = (language: string, solutionPath: string): Promise<string> => {

    const commands: {
        [slug: string]: string
    } = {
        js: "node main.js",
        ts: "ts-node main.ts",
        py: "python main.py",
        c: "gcc main.c solution.c -o solution && solution",
        cpp: "g++ main.cpp solution.cpp -o solution && solution",
    }

    return new Promise((resolve, reject) => {
        const command = commands[language];
        if(!command) {
            return reject("Bu dili desteklemiyoruz :(")
        }
        try {

            execSync(`docker run -t -d ${language}_app`);
            const container = execSync("docker ps -l -q").toString().trim();
            execSync(`docker cp ${solutionPath}/. ${container}:/app`);
            try {
                const output = execSync(`docker exec -i ${container} sh -c "cd /app && ${command}"`).toString().trim();
                resolve(output);
            } catch (err) {
                //exec(`docker stop ${container} && docker rm ${container}`);
                throw err;
            }
            //exec(`docker stop ${container} && docker rm ${container}`);
        } catch (err: any) {
            reject(err?.message ?? "Kodunuzu çalıştıramadık :(");
        }
    });
    //const compiler = getCompiler(language)
    //return compiler.execute(solutionPath)
}