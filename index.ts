import { setupRoutes } from './src/controller/routes/index';
import { setupMiddlewares } from './src/utils/middlewares/index';
import './src/config/config'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
setupMiddlewares(app)
setupRoutes(app)

const port: number = Number(process.env.PORT) || 9090; 
app.listen(port , () => {
    console.log(`Server is online and listening at: http://localhost:${port}`)
})

