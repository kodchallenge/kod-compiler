import express, {Router} from 'express'
import {run} from '../controllers/code.controller'

const routes: Router = express.Router()

routes.post("/run", run)

export default routes;