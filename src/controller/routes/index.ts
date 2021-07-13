import { Express } from 'express'
import { authRouter } from './auth.routes'
import { productRouter } from './product.routes'
import { userRouter } from './user.routes'

export const setupRoutes = (app: Express): void => {
    app.use([
        userRouter,
        productRouter,
        authRouter
    ])
}