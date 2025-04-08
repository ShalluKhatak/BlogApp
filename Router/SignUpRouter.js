import { Router } from 'express';
import {
  SignUpController,
  SignupControllerPost,
} from '../Controller/SignUpController.js';

export const SignUpRouter = Router();

SignUpRouter.get('/', SignUpController);
SignUpRouter.post('/', SignupControllerPost);
