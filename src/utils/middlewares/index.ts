import express, { Express } from 'express'
import cors from 'cors'
import { requestLogger } from './logger';

export const setupMiddlewares = (app: Express):void => {
    app.use(cors());
    app.use(express.json())
    app.use(requestLogger)
}