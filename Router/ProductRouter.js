import { Router } from 'express';
import { ProductControllerPost } from '../Controller/ProductController.js';

export const ProductRouter = Router();

ProductRouter.post('/', ProductControllerPost);
