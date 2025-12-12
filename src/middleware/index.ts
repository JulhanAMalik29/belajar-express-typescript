import express, { Router } from 'express';
import cors from 'cors';
import app from '../routes';
import '../utils/winston';

const appMiddleware = Router();

appMiddleware.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: true,
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'],
  }),
);

appMiddleware.use(express.json());
appMiddleware.use(app);

export default appMiddleware;
