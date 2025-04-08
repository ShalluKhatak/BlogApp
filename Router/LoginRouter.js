import { Router } from 'express';
import {
  LoginController,
  LoginControllerPost,
} from '../Controller/LoginController.js';

export const LoginRouter = Router();

LoginRouter.get('/', LoginController);
LoginRouter.post('/', LoginControllerPost);
