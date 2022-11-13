import path from "path";
import fs from 'fs'

export const saveFile = async (file: fs.PathLike | fs.promises.FileHandle, data: string) => {
    const dir: string = path.dirname(file.toString())
    if(!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true})
    }

    return await fs.promises.writeFile(file, data)
}