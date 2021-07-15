import { Router } from 'express'
import userController from '../handles/user.controller'

const userRouter = Router()

userRouter.post('/user', userController.createUser)
userRouter.get('/user', userController.getAll)

export { userRouter }