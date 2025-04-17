import { Router } from 'express';
import {
  HomeController,
  HomeControllerGetBlog,
} from '../Controller/HomeController.js';

export const HomeRouter = Router();

HomeRouter.get('/', HomeController);
HomeRouter.get('/get_blog', HomeControllerGetBlog);
