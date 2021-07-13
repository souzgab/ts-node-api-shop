import {Router} from 'express'
import authController from '../handles/auth.controller'

const authRouter = Router()

authRouter.post('/auth', authController.authenticate)

export {authRouter}