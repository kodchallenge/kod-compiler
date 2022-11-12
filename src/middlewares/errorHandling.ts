import { Response, Request, NextFunction } from 'express'

export const errorHandlingMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        status: false,
        message: `An error occured. Error: ${err.message}`
    })
}