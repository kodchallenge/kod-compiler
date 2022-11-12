import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import { errorHandlingMiddleware } from './middlewares/errorHandling'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 4000

// All routes
app.use("/", routes)

// Main endpoint
app.get("/", (req: Request, res: Response) => {
    throw new Error("ASDHASDK")
    res.json({
        server: "running",
        status: true,
        message: "Server is running"
    })
})

app.use(errorHandlingMiddleware)

app.listen(PORT, () => {
    console.log(`⚡[SERVER]: Server is running in PORT=${PORT}`)
})