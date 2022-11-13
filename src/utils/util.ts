import path from "path"

export const getSaveCodePath = (filename: string) => {
    return path.join(process.env.PATH_TO_SAVE_CODE ?? __dirname, filename)
}