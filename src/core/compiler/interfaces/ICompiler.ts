export interface ICompiler {
    execute(code: string, args: unknown[]): Promise<string>;
}