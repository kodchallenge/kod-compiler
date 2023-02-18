import { ICompiler } from "../../interfaces/ICompiler";

export class JavaCompiler implements ICompiler {
    public execute(solutionPath: string): Promise<string> {
       // TODO: Implement this method
       return new Promise((resolve, reject) => {
        resolve("TODO: Implement this method")
       });
    }
}