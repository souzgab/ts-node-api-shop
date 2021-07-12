import { Express } from 'express'
import { userRouter } from './user.routes'

export const setupRoutes = (app: Express): void => {
    app.use(userRouter)
}