import path from "path"
import { saveFile } from "./fileSystem"

export const saveCode = async (filename: string, codeData: string) => {
    const dir = path.join(process.env.PATH_TO_SAVE_CODE ?? __dirname, filename)

    return await saveFile(dir, codeData)
}