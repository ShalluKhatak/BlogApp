import { Router } from 'express';
import SignUpController from '../Controller/SignUpController.js';

export const SignUpRouter = Router();

SignUpRouter.get('/', SignUpController);
