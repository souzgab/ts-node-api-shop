import { Router } from 'express'
import userController from '../handles/user.controller'

const userRouter = Router()

userRouter.post('/user', userController.createUser)

export { userRouter }