import { Router } from 'express';
import HomeController from '../Controller/HomeController.js';

export const HomeRouter = Router();

HomeRouter.get('/', HomeController);
