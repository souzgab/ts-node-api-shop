import express, { Express } from 'express'
import cors from 'cors'

export const setupMiddlewares = (app: Express):void => {
    app.use(cors());
    app.use(express.json())
}