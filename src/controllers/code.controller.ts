import { NextFunction, Request, Response } from "express";
import { compile } from "../core/compiler";
import { Code } from "../models/Code";

export const run = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    const code: Code = req.body as Code
    const result = compile(code)
    res.send(result)
}