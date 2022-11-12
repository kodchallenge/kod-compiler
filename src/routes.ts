import express, { Router } from 'express'
import codeRoutes from './routes/code.routes'

const routes: Router = express.Router()

routes.use("/code", codeRoutes)

export default routes;