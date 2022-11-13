import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import { errorHandlingMiddleware } from './middlewares/errorHandling'
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 4000

// middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// All routes
app.use("/", routes)

// Main endpoint
app.get("/", (req: Request, res: Response) => {
    res.json({
        server: "running",
        status: true,
        message: "Server is running"
    })
})

// Error handling
app.use(errorHandlingMiddleware)

app.listen(PORT, () => {
    console.log(`⚡[SERVER]: Server is running in PORT=${PORT}`)
})