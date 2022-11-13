import { exec } from "child_process";
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs'
import { saveFile } from "../../../../utils/fileSystem";
import { getSaveCodePath } from "../../../../utils/util";
import { ICompiler } from "../../interfaces/ICompiler";

export class Compiler implements ICompiler {
    public execute(code: string, args: unknown[]): Promise<string> {
        const filePath = getSaveCodePath(uuidv4() + ".c");
        const filePathWithoutExt = filePath.split(".")[0]
        console.log(filePathWithoutExt)
        saveFile(filePath, code);

        return new Promise((resolve, reject) => {
            exec(`gcc -o ${filePathWithoutExt} ${filePath} && ${filePathWithoutExt}`, (err, stdout, stderr) => {
                if(stderr) {
                    reject(stderr)
                } else {
                    resolve(stdout)
                }
                fs.unlinkSync(filePathWithoutExt+".exe")
            })
        })
    }
}