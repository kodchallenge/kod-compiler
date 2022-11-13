import { NextFunction, Request, Response } from "express";
import { compile } from "../core/compiler";
import { Code } from "../models/Code";

export const run = async (req: Request, res: Response, next: NextFunction) => {
    const code: Code = req.body as Code
    const result = await compile(code)
    res.send(result)
}