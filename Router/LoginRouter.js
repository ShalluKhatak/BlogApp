import { Router } from 'express';
import LoginController from '../Controller/LoginController.js';

export const LoginRouter = Router();

LoginRouter.get('/', LoginController);
