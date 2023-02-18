export interface ICompiler {
    execute(solutionPath: string): Promise<string>;
}